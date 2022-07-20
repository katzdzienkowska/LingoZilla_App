import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { lessonThree } from '../data/data';
import Lesson3Item from './Lesson3Item'
import Game3 from './Game3'

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
                <h1>Lesson 3:</h1>
                <h2>Let's revise previous lessons and throw in some basic Polish grammar.</h2>
                    <p>Have a look at the images and their descriptions. First pair of sentences describes what is the animal, in English and then in Polish. The second pair tells you the colour of the animal. </p>
                    <p>Hint! If you click on the Polish sentence, Zuzia will teach you how to pronunce it correctly. Remember to turn on your volume!</p>
                {animalsList3}
                <button onClick={handleClick}>Game time!</button>
            </div>

            {isShown && (
            <div>
                < Game3 />
                <button>
                <Link to='/quiz'>Time for a Quiz!</Link>
                </button>
            </div>
            )}
        </>
    );
};

export default Lesson3; 