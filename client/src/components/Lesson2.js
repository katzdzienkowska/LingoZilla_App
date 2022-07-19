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
                <h1>Lesson Two: Colours</h1>
                <p>short desc of the lesson to be added</p>
                {animalsList2}
                <button onClick={handleClick1}>Game time!</button>
            </div>

            {isShown1 && (
            <div>
                < Game2 />
                <button onClick={handleClick2}>How was the lesson?</button>
            </div>
            )}

            {isShown2 && (
            <div>
                <FeedBackForm/>
                <button >
                <Link to='/lesson3'>Go to lesson 3</Link>
                </button>
            </div>
            )}
        </>
    );
};

export default Lesson2; 