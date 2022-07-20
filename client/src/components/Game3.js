import React, {useState} from "react"; 
import {lessonOne} from '../data/data';
import {lessonTwo} from '../data/data';
import WordInPl from "./WordInPl"; 
import Lesson3Item from './Lesson3Item'
import './Game3.css' 
import ColourInPl from "./ColourInPl";
import Board from "./board";


const Game3 = () => {


  




    return (
        <>
            <h2 className="center"> Animals in Polish </h2> 
            
        <div className="flex"> 
        
        {lessonOne.map((word , index) => {
            return  <WordInPl  word={word}  key={word.id} index={index} /> })} </div> 

            <h2 className="center"> Animals Colour in Polish </h2>   
        <div className="flex"> {lessonTwo.map((colour , index) => {
            return <ColourInPl colour={colour}  key={colour.id} index={index} /> })} </div> 

        <div> 
            <Board/> 
        </div> 
        
        </>
    )
}

export default Game3; 