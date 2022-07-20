import React from 'react';
import './lesson1.css';

const Lesson2Item = ({ animal, textToSpeech }) => {

    const handleSpeech1 = () => {
        const word = animal.pl1;
        textToSpeech(word)
    };

    const handleSpeech2 = () => {
        const word = animal.pl2;
        textToSpeech(word)
    };

    return (
        <div>
            <div>
                <img src={animal.image} alt={animal.en} />
            </div>
            <div>
                <p>{animal.en1}</p>
                <p onClick={handleSpeech1}>{animal.pl1}</p>
                <br></br>
                <p>{animal.en2}</p>
                <p onClick={handleSpeech2}>{animal.pl2}</p>
            </div>
        </div>
    );
};


export default Lesson2Item; 