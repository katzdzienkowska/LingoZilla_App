import React, { useState } from "react";
import "./App.css";
import LingoZillaContainer from "./container/LingoZillaContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeedBackForm from "./components/FeedBackForm";
import Game2 from "./components/Game2";

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

      <LingoZillaContainer />
      <FeedBackForm addFeedback={addFeedback} />
      <Footer />
    </div>
  );
}

export default App;
