import React from 'react';
import './lesson1.css';

const Lesson1Item = ({animal}) => { 
    return(
        <div>
            <div>
                <img src={ animal.image } alt={ animal.en }/>
                <h2>{ animal.en }</h2>
            </div>
            <div>
                <h1>{ animal.pl }</h1>
            </div>
        </div>
    );
};


export default Lesson1Item; 