import React from 'react';
import {lessonTwo} from '../data/data';
import Lesson2Item from './Lesson2Item'
import Game2 from './Game2'

const Lesson2 = () => { 

    const animalsList2 = lessonTwo.map((animal, index) => {
        return(
            <Lesson2Item animal={animal} key={animal.id} index={index} />
        );
    });

    return(
        <>
            <h1>Lesson Two: Farm Animals</h1>
            <p>short desc of the lesson to be added</p>
            {animalsList2}
            <Game2/>
        </>
    );
};


export default Lesson2; 