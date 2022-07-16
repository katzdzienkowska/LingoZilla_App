import React from 'react';
import lessonOne from '../data/Data';
import Lesson1Item from './Lesson1Item'

const Lesson1 = () => { 

    const animalsList = lessonOne.map((animal, index) => {
        return(
            <Lesson1Item animal={animal} key={animal.id} index={index} />
        );
    });

    return(
        <>
            {animalsList}
        </>
    );
};


export default Lesson1; 