import React, { useEffect, useState } from "react";
import "./App.css";
import LingoZillaContainer from "./container/LingoZillaContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

import FeedBackForm from "./components/FeedBackForm";
import Game2 from "./components/Game2";
import FeedBackPage from "./components/FeedBackPage";
import { getFeedback } from "./service/LingozillaService";

import AppAbout from './components/AppAbout'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import NavBar from "./components/NavBar";

import Lesson1 from "./components/Lesson1";
import Lesson2 from "./components/Lesson2";
import Lesson3 from "./components/Lesson3";

import { useSpeechSynthesis } from "react-speech-kit";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const { speak, voices } = useSpeechSynthesis();

  const textToSpeech = (word) => {
    speak({ 
      text: word, 
      voice: voices[46] 
    })
  }

  useEffect(() => {
    getFeedback().then((feedbacks) => setFeedbacks(feedbacks));
  }, []);

  const addFeedback = (feedback) => {
    let temp = feedbacks.map((f) => f);
    temp.push(feedback);
    setFeedbacks(temp);
  };

  return (
    <div>

      <Header />
      <Router> 
       <NavBar  />


       <LingoZillaContainer />

      <Routes>

        {/* <Route path = "/" element = {<LingoZillaContainer/>}/> */}

        <Route path = "about" element= {<AppAbout/>}/> 

        <Route path = "feedback" element = {<FeedBackPage/>} />

        <Route path = "lesson1" element = {<Lesson1 textToSpeech={textToSpeech}/>} />

        <Route path = "lesson2" element = {<Lesson2 textToSpeech={textToSpeech}/>} />

        <Route path = "lesson3" element = {<Lesson3 textToSpeech={textToSpeech}/>} />

      </Routes>

      </Router>
      <FeedBackForm addFeedback={addFeedback} />
      <FeedBackPage feedbacks={feedbacks} />
    <Footer />




    </div>
    

  );
}

export default App;
