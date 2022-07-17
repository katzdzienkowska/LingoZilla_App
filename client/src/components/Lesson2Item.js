import React from 'react';
import './lesson1.css';

const Lesson2Item = ({animal}) => { 
    return(
        <div>
            <div className='animal-card'>
                <img className='animal-image' src={ animal.image } alt={ animal.en }/>
                <p className='image-hover'>{ animal.pl }</p>
            </div>
            <div className='animal-name-en'>
                <h2>{ animal.en }</h2>
            </div>        
        </div>
    );
};


export default Lesson2Item; 