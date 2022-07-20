import React, { useEffect, useState } from "react";
import {lessonOne} from "../data/data"; 
import { lessonTwo } from "../data/data"; 
import { lessonThree } from "../data/data"; 
import ColourInPl from "./ColourInPl";
import WordInPl from "./WordInPl"; 
import { useDrop } from "react-dnd";
import "../data/data"; 



const Board = () => {

  const[totalScore, setTotalScore] = useState(0);
  const [imageSelections, setImageSelections] = useState([]);
  const [wordBoard , setWordBoard] = useState([])
  const [colourBoard , setColourBoard] = useState([])
  

  const [{isOver} , drop] = useDrop(() => ({

    accept : "word", 
    drop : (item) => addWordToBoard(item.id),
    collect : (monitor) => ({
        isOver : !!monitor.isOver(), 
    })
  }))


  const [collectedProps, dropp] = useDrop(() => ({

    accept : "word", 
    drop : (item) => addColourToBoard(item.id),
    collect : (monitor) => ({
        isOver : !!monitor.isOver(), 
    })
  }))

  const addWordToBoard = (id) => {

    const updatedlessonOne = lessonOne.find((word) => id === word.id); 
    setWordBoard((wordBoard) => [...wordBoard, updatedlessonOne])
  }; 


  const addColourToBoard = (id) => {

    const updatedlessonTwo = lessonTwo.find((colour) => id === colour.id); 
    setColourBoard([...colourBoard, updatedlessonTwo]) 

  }

  const randomizeImages = () => {
    const data = [...lessonThree];
    const randomData = [];
    randomData.push(data.splice(Math.floor(Math.random() * data.length), 1));
    const animalObjects = randomData.flat();
    setImageSelections(animalObjects);
  };

  useEffect(() => {
    randomizeImages();
  }, []);

  const animalsImages = imageSelections.map((animal) => {
    return (
      <img
        src={animal.image}
        key={animal.id}
        alt={animal.animal}
        animalWordPoland = {animal.wordpl}
        animalColourPoland = {animal.colourpl}
        width="200"
      />
    );
  });

  const handleOnClick = () => { 

    if (imageSelections[0].wordpl === wordBoard[0].pl && imageSelections[0].colourpl === colourBoard[0].pl) {
        setTotalScore(totalScore + 1);
        randomizeImages();
      } else {
        setTotalScore(totalScore - 1);
      }
      setColourBoard([])
      setWordBoard([])
  }

    return (
        <div className="Board">

            <div className="animal">
              {animalsImages}
            </div>

            <div>
            {wordBoard.map((word , index) => {
            return <WordInPl word={word}  key={word.id} index={index} /> })}
            </div>

            <div>
            {colourBoard.map((colour , index) => {
            return <ColourInPl  colour={colour}  key={colour.id} index={index} /> })}
            </div>

            this is a <span ref={drop}>.................</span> 
            and the colour is <span ref={dropp}>..................</span>

                <br></br>

            <button onClick= {handleOnClick} >Submit</button>  

            <p>Current Total Score: {totalScore}</p>

         </div> 
    )
}

export default Board; 