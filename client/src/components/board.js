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
  const [wordPrompt, setWordPrompt] = useState(null);
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

      console.log(id)



    const updatedlessonOne = lessonOne.find((word) => id === word.id); 
    setWordBoard((wordBoard) => [...wordBoard, updatedlessonOne])

    // if (updatedlessonOne !== undefined) {
    //     setWordBoard((wordBoard) => [...wordBoard, updatedlessonOne])
    // } 
  }; 


  const addColourToBoard = (id) => {

    console.log(id)

    const updatedlessonTwo = lessonTwo.find((colour) => id === colour.id); 
    setColourBoard([...colourBoard, updatedlessonTwo]) 

  }




  const randomizeImages = () => {
    const data = [...lessonThree];
    const randomData = [];
    randomData.push(data.splice(Math.floor(Math.random() * data.length), 1));
    const animalObjects = randomData.flat();
    setImageSelections(animalObjects);
    const animal =
      animalObjects[Math.floor(Math.random() * animalObjects.length)];
    setWordPrompt(animal.pl);
  };

  useEffect(() => {
    randomizeImages();
  }, []);

  const handleButtonClick = (word) => {
    if (word === wordPrompt) {
      setTotalScore(totalScore + 1);
      randomizeImages();
    } else {
      setTotalScore(totalScore - 1);
    }
  };

  const animalsImages = imageSelections.map((animal) => {
    return (
      <img
        src={animal.image}
        key={animal.id}
        alt={animal.animal}
        width="200"
        onClick={() => {
          handleButtonClick(animal.pl);
        }}
      />
    );
  });

  const prompts = imageSelections.map((animal) => {
    return <span>{animal.pl}</span>;
  });

  const randomPrompts = prompts[Math.floor(Math.random() * prompts.length)];

  const handleOnClick = (animalObjects , wordBoard, colourBoard) => { 

    if (animalObjects.wordpl === wordBoard.pl || animalObjects.colourpl === colourBoard.pl) {
        setTotalScore(totalScore + 1);
        randomizeImages();
      } else {
        setTotalScore(totalScore - 1);
      }
  }



console.log(colourBoard)

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
            return <ColourInPl colour={colour}  key={colour.id} index={index} /> })}
            </div>

            this is a <span ref={drop}>.................</span> and the colour is 
                <span ref={dropp} >..................</span>

                <br></br>

            <button onClick={handleOnClick}>Submit</button>  

            <p>    Current Total Score:  {totalScore}  </p>

            
            
            
        </div> 
    )
}

export default Board; 