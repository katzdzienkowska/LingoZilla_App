import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {lessonOne} from '../data/data';
import Lesson1Item from './Lesson1Item';
import GameOne from './Game1MC'
import FeedBackForm from './FeedBackForm';

const Lesson1 = ({textToSpeech}) => { 

    const animalsList = lessonOne.map((animal, index) => {
        return(
            <Lesson1Item animal={animal} key={animal.id} index={index} textToSpeech={textToSpeech}/>
        );
    });

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(true);
    };

    return(
        <>
            <div>
                <h1>Lesson 1:</h1>
                <h2>Let's start with learning farm animals names in Polish</h2>
                    <p>Hover over the animal image to learn its name in Polish.</p>
                    <p>Hint! If you click on the Polish word, Zuzia will teach you how to pronunce it correctly. Remember to turn on your volume!</p>
                {animalsList}
                <button onClick={handleClick}>Game time!</button>
            </div>

            {isShown && (
            <div>
                < GameOne />
                <button onClick={handleClick}>Did you like the lesson?</button>
            </div>
            )}

            {isShown && (
            <div>
                <FeedBackForm/>
                <button >
                <Link to='/lesson2'>Go to level 2</Link>
                </button>
            </div>
            )}
        </>
    );
};


export default Lesson1; 