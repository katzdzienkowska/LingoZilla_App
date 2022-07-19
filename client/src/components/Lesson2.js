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
                <h1>Lesson Two: Colours</h1>
                <p>short desc of the lesson to be added</p>
                {animalsList2}
                <button onClick={handleClick}>Game time!</button>
            </div>

            {isShown && (
            <div>
                < Game2 />
                <button onClick={handleClick}>How was the lesson?</button>
            </div>
            )}

            {isShown && (
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