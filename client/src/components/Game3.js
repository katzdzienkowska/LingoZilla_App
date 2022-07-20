import React, {useState} from "react"; 
import {lessonOne} from '../data/data';
import {lessonTwo} from '../data/data';
import WordInPl from "./WordInPl"; 
import './Game3.css' 
import ColourInPl from "./ColourInPl";
import Board from "./board";


const Game3 = () => {


  




    return (
        <>
        <div>
            <h1>Game3: Drag and Drop Match Game </h1>
            <h2>Ready to test your skills after three lessons?</h2>
                <p>Match the animal name and colour in Polish with the animal image .</p>
                <p>If correct, one point will be added to your final score.</p>
                <p>Good luck! 🤞</p>
        </div>
        <h2 className="center"> Animals in Polish </h2> 
        <div className="flex"> 
        {lessonOne.map((word , index) => {
            return  <WordInPl  word={word}  key={word.id} index={index} /> })} </div> 

            <h2 className="center"> Colours in Polish </h2>   
        <div className="flex"> {lessonTwo.map((colour , index) => {
            return <ColourInPl colour={colour}  key={colour.id} index={index} /> })} </div> 

        <div> 
            <Board/> 
        </div> 
        
        </>
    )
}

export default Game3; 