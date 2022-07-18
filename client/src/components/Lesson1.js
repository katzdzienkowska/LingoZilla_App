import React from 'react';
import {lessonOne} from '../data/data';
import Lesson1Item from './Lesson1Item';
import GameOne from './Game1MC'

const Lesson1 = () => { 

    const animalsList = lessonOne.map((animal, index) => {
        return(
            <Lesson1Item animal={animal} key={animal.id} index={index} />
        );
    });

    return(
        <>
            <h1>Lesson One: Farm Animals</h1>
            <p>short desc of the lesson to be added</p>
            {animalsList}
            < GameOne /> 
        </>
    );
};


export default Lesson1; 