import React from 'react';
import { lessonThree } from '../data/data';
import Lesson3Item from './Lesson3Item'
import Game3 from './Game3';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const Lesson3 = () => {

    const animalsList3 = lessonThree.map((animal, index) => {
        return (
            <Lesson3Item animal={animal} key={animal.id} index={index} />
        );
    });

    return (
        <>
            <h1>Lesson Three: Farm Animals and Colours</h1>
            <p>short desc of the lesson to be added</p>
            {animalsList3}

            <h2> Game Three </h2>

            <DndProvider backend={HTML5Backend}>

            <Game3 />

            </DndProvider>
        </>
    );
};


export default Lesson3; 