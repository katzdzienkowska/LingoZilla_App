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
                <h1>Lesson One: Farm Animals</h1>
                <p>short desc of the lesson to be added</p>
                {animalsList}
                <button onClick={handleClick}>Game time!</button>
            </div>

            {isShown && (
            <div>
                < GameOne />
                <button onClick={handleClick}>How was the lesson?</button>
            </div>
            )}

            {isShown && (
            <div>
                <FeedBackForm/>
                <button >
                <Link to='/lesson2'>Go to lesson 2</Link>
                </button>
            </div>
            )}
        </>
    );
};


export default Lesson1; 