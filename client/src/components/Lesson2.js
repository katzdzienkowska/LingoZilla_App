import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {lessonTwo} from '../data/data';
import Lesson2Item from './Lesson2Item'
import Game2 from './Game2'
import FeedBackForm from './FeedBackForm';

const Lesson2 = ({textToSpeech}) => { 

    const animalsList2 = lessonTwo.map((animal, index) => {
        return(
            <Lesson2Item animal={animal} key={animal.id} index={index} textToSpeech={textToSpeech}/>
        );
    });

    const [isShown, setIsShown] = useState(false);
    
    const handleClick = event => {
        setIsShown(true);
    };
    
    return(
        <>
            <div>
                <h1>Lesson 2:</h1>
                <h2>Next challenge is to learn farm animals colours in Polish</h2>
                    <p>Hover over the animal image to learn its colour in Polish.</p>
                    <p>Hint! If you click on the Polish word, Zuzia will teach you how to pronunce it correctly. Remember to turn on your volume!</p>
                {animalsList2}
                <button onClick={handleClick}>Game time!</button>
            </div>

            {isShown && (
            <div>
                < Game2 />
                <button >
                <Link to='/lesson3'>Go to level 3</Link>
                </button>
            </div>
            )}

        </>
    );
};

export default Lesson2; 