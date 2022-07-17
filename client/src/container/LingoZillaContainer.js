
import React from "react";
import Header from "../components/Header";
import Lesson1 from "../components/Lesson1";
import GameOne from '../components/Game1MC';
import Game2 from "../components/Game2";

const LingoZilla = () => {
  return (
    <section>
      <Lesson1 />
      <GameOne />
      <Game2 />
    </section>
  );
};

export default LingoZilla;