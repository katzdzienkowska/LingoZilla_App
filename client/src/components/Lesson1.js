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

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);

    const handleClick1 = event => {
        setIsShown1(current => !current);
    };
    
    const handleClick2 = event => {
        setIsShown2(current => !current);
    };

    return(
        <>
            <div>
                <h1>Lesson One: Farm Animals</h1>
                <p>short desc of the lesson to be added</p>
                {animalsList}
                <button onClick={handleClick1}>Game time!</button>
            </div>

            {isShown1 && (
            <div>
                < GameOne />
                <button onClick={handleClick2}>How was the lesson?</button>
            </div>
            )}

            {isShown2 && (
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