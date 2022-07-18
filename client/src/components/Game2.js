import React, { useEffect, useState } from "react";
import { lessonTwo } from "../data/data";

const Game2 = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wordPrompt, setWordPrompt] = useState(null);
  const [imageSelections, setImageSelections] = useState([]);

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

  const handleButtonClick = (word) => {
    setTotalScore(totalScore + 1);
    randomizeImages();
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

  return (
    <div className="Game2">
      <h2>Game 2: Choose the Right One!</h2>
      <p>Insert Game Description Here</p>
      <p>Current Total Score: {totalScore}</p>
      <p>Click the picture that is {wordPrompt}!</p>
      {animalsImages}
    </div>
  );
};

export default Game2;
