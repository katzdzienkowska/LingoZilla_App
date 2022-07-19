import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { lessonThree } from '../data/data';
import Lesson3Item from './Lesson3Item'
import Game3 from './Game3D&D'
import FeedBackForm from './FeedBackForm';

const Lesson3 = ({textToSpeech}) => {

    const animalsList3 = lessonThree.map((animal, index) => {
        return (
            <Lesson3Item animal={animal} key={animal.id} index={index} textToSpeech={textToSpeech}/>
        );
    });

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(true);
    };

    return(
        <>
            <div>
                <h1>Lesson Three: Farm Animals and Colours</h1>
                <p>short desc of the lesson to be added</p>
                {animalsList3}
                <button onClick={handleClick}>Game time!</button>
            </div>

            {isShown && (
            <div>
                < Game3 />
                <button onClick={handleClick}>How was the lesson?</button>
            </div>
            )}

            {isShown && (
            <div>
                <FeedBackForm/>
                <button >
                <Link to='/quiz'>Time for a Quiz!</Link>
                </button>
            </div>
            )}
        </>
    );
};

export default Lesson3; 