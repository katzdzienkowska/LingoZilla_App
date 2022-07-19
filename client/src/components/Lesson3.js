import React from 'react';
import { lessonThree } from '../data/data';
import Lesson3Item from './Lesson3Item'
import Game3 from './Game3D&D'

const Lesson3 = ({textToSpeech}) => {

    const animalsList3 = lessonThree.map((animal, index) => {
        return (
            <Lesson3Item animal={animal} key={animal.id} index={index} textToSpeech={textToSpeech}/>
        );
    });

    return (
        <>
            <h1>Lesson Three: Farm Animals and Colours</h1>
            <p>short desc of the lesson to be added</p>
            {animalsList3}
            <Game3 />
        </>
    );
};


export default Lesson3; 