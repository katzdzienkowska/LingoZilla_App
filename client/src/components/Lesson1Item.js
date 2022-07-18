import React from 'react';
import { useSpeechSynthesis } from "react-speech-kit";
import './lesson1.css';

const Lesson1Item = ({animal}) => { 

    const { speak, voices } = useSpeechSynthesis();
    const word = animal.pl;

    return(
        <div>
            <div className='animal-card'>
                <img className='animal-image' onClick={() => speak({ text: word, voice: voices[46] })} src={ animal.image } alt={ animal.en }/>
                <p className='image-hover'>{ animal.pl }</p>
            </div>
            <div className='animal-name-en'>
                <h2>{ animal.en }</h2>
            </div>        
        </div>
    );
};


export default Lesson1Item; 