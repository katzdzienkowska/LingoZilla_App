import React, { useEffect, useState } from "react";
import "./App.css";
import LingoZillaContainer from "./container/LingoZillaContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeedBackForm from "./components/FeedBackForm";
import Game2 from "./components/Game2";
import FeedBackPage from "./components/FeedBackPage";
import { getFeedback } from "./service/LingozillaService";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getFeedback().then((feedbacks) => setFeedbacks(feedbacks));
  }, []);

  const addFeedback = (feedback) => {
    let temp = feedbacks.map((f) => f);
    temp.push(feedback);
    setFeedbacks(temp);
  };

  return (
    <main>
      <Header />

      <LingoZillaContainer />
      <FeedBackForm addFeedback={addFeedback} />
      <FeedBackPage feedbacks={feedbacks} />
      <Footer />
    </main>
  );
}

export default App;
