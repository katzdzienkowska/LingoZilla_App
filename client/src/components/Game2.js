import React, { useEffect, useState } from "react";
import { lessonTwo } from "../data/data";
import ProgressTimer from "react-progress-bar-timer";

const Game2 = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [wordPrompt, setWordPrompt] = useState(null);
  const [imageSelections, setImageSelections] = useState([]);
  const [hidden, setHidden] = useState(true);

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
          handleButtonClick(animal.pl, animal.img);
        }}
      />
    );
  });

  const stopGame = () => {
    return "Game Over";
  };

  return (
    <div className="Game2">
      <h2>Game 2: Choose the Right One!</h2>
      <p>Insert Game Description Here</p>
      {!hidden ? (
        <>
          <ProgressTimer
            buttonText="Start"
            direction="right"
            duration={10}
            onFinish={stopGame()}
            showDuration
            started={false}
            variant="fill"
          />
          <p>Current Total Score: {totalScore}</p>
          <p>Click the picture that is {wordPrompt}!</p>
          {animalsImages}
        </>
      ) : null}
      <button onClick={() => setHidden((s) => !s)}>Let's Play!</button>
    </div>
  );
};

export default Game2;
