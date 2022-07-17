import React, { useState } from "react";
import { lessonTwo } from "../data/data";

const Game2 = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState([]);

  const imageList = lessonTwo.map((animal) => {
    return (
      <img
        src={animal.image}
        key={animal.id}
        alt={animal.animal}
        width="200"
      ></img>
    );
  });

  const prompts = lessonTwo.map((animal) => {
    return <span>{animal.pl}</span>;
  });

  const randomPrompts = prompts[Math.floor(Math.random() * prompts.length)];

  return (
    <div className="Game2">
      <h2>Game 2: Choose the Right One!</h2>
      <p>Insert Game Description Here</p>
      <p>Current Total Score: {totalScore}</p>
      <p>Click the picture that is {randomPrompts}!</p>
      {/* <button onClick={() => setTotalScore(totalScore + 1)}>Add</button>
      <button onClick={() => setTotalScore(totalScore - 1)}>Subtract</button> */}

      {imageList}
    </div>
  );
};

export default Game2;
