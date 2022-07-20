import React, { useState } from "react";
import { Link } from "react-router-dom";
import { lessonOne } from "../data/data";
import Lesson1Item from "./Lesson1Item";
import GameOne from "./Game1MC";
import styled from "styled-components";

const Heading = styled.h1`
  margin: 40px;
  text-align: center;
  font-size: 5rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
`;

const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-evenly;
`;

const ImgContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 5rem;
  padding: 2rem;
`;

const Lesson1 = ({ textToSpeech }) => {
  const animalsList = lessonOne.map((animal, index) => {
    return (
      <Lesson1Item
        animal={animal}
        key={animal.id}
        index={index}
        textToSpeech={textToSpeech}
      />
    );
  });

  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown(true);
  };

  return (
    <>
      <div>
        <Heading>Lesson 1</Heading>
        <h2>Let's start with learning farm animals names in Polish</h2>
        <Paragraph>
          Hover over the animal image to learn its name in Polish.
        </Paragraph>
        <Paragraph>
          Hint! If you click on the Polish word, Zuzia will teach you how to
          pronunce it correctly. Remember to turn on your volume!
        </Paragraph>
        <Container>
          <ImgContainer>{animalsList}</ImgContainer>
        </Container>
        <button onClick={handleClick}>Game time!</button>
      </div>

      {isShown && (
        <div>
          <GameOne />
          <button>
            <Link to="/lesson2">Go to level 2</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Lesson1;
