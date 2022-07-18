import React, { useState } from "react";
import "./App.css";
import LingoZillaContainer from "./container/LingoZillaContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppAbout from './components/AppAbout'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import FeedBackPage from './components/FeedBackPage'
import Lesson1 from "./components/Lesson1";
import Lesson2 from "./components/Lesson2";
import Lesson3 from "./components/Lesson3";


function App() {
  const [feedbacks, setFeedbacks] = useState([]);

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

        <Route path = "/" element = {<LingoZillaContainer/>}/>

        <Route path = "about" element= {<AppAbout/>}/> 

        <Route path = "feedback" element = {<FeedBackPage/>} />

        <Route path = "lesson1" element = {<Lesson1/>} />

        <Route path = "lesson2" element = {<Lesson2/>} />

        <Route path = "lesson3" element = {<Lesson3/>} />

      </Routes>



    </Router>
    <Footer />




    </div>
    
  );
}

export default App;
