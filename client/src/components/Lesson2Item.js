import React from 'react';
import './lesson1.css';

const Lesson2Item = ({animal, textToSpeech}) => { 

    const handleSpeech = () => {
        const word = animal.pl;
        textToSpeech(word)
    };

    return(
        <div>
            <div className='animal-card'>
                <img className='animal-image' onClick={handleSpeech} src={ animal.image } alt={ animal.en }/>
                <p className='image-hover'>{ animal.pl }</p>
            </div>
            <div className='animal-name-en'>
                <h2>{ animal.en }</h2>
            </div>        
        </div>
    );
};


export default Lesson2Item; 