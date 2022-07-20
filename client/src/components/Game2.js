import React, { useEffect, useState } from "react";
import { lessonTwo } from "../data/data";
import Timerv2 from "./Timerv2";
import styled from "styled-components";
import "./Game2.css";

const Game2Container = styled.div`
  
  align-items: center;
  text-align: center;
  
`;

const Heading = styled.h1`
  font-size: 5rem;
`;

const Button = styled.button`
  & {
    padding: 20px;
    width: 30%;
    font-size: 20px;
    background: #9d7bf4;
    color: white;
    border: 0;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
    background: #fe729b;
  }
`;



const Game2 = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wordPrompt, setWordPrompt] = useState(null);
  const [imageSelections, setImageSelections] = useState([]);
  const [visible, setVisible] = useState(false);
  const [wobble, setWobble] = useState(0);

  const randomizeImages = () => {
    const data = [...lessonTwo];
    const randomData = [];
    randomData.push(data.splice(Math.floor(Math.random() * data.length), 1));
    randomData.push(data.splice(Math.floor(Math.random() * data.length), 1));
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

  const handleButtonClick = (word, event) => {
    if (word === wordPrompt) {
      setTotalScore(totalScore + 1);
      randomizeImages();
    } else {
      console.log(event.target);
      event.target(setWobble(1));
    }
  };

  const animalsImages = imageSelections.map((animal) => {
    return (
      <img
        className="game-img"
        src={animal.image}
        key={animal.id}
        alt={animal.animal}
        width="500"
        onClick={(event) => {
          handleButtonClick(animal.pl, event);
        }}
        onAnimationEnd={() => setWobble(0)}
        wobble={wobble}
      />
    );
  });

  return (
    <Game2Container>
      <Heading>Game 2: Match Race</Heading>
      <h2>
        <p>
          Click the picture that matches the word! You get +1 point for every
          correct answer.{" "}
        </p>
        <p>See how many points you can get in 30 seconds!</p>
        <p>Click "Show Game" to open the game then "Start Timer" to begin!</p>
        <p>Good luck! 🤞</p>
      </h2>
      <Button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Game" : "Show Game"}
      </Button>
      <div style={{ display: visible ? "block" : "none" }}>
        <div className="show-game">
          <Timerv2 initialMinutes={0} initialSeconds={30} />
          <h3>Total Score: {totalScore}</h3>
          <p>
            Click the picture that is coloured <strong>{wordPrompt}</strong>!
          </p>
          <p>{animalsImages}</p>
        </div>
      </div>
    </Game2Container>
  );
};

export default Game2;
