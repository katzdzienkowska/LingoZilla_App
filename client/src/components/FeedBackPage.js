import React from "react";
import Feedback from "./Feedback";

const FeedBackPage = ({ feedbacks }) => {
  const feedbackNodes = feedbacks.map((feedback) => {
    return <Feedback key={feedback._id} feedback={feedback} />;
  });

  return (
    <div className="FeedBackPage">
      <h2>List of Feedback We've Received:</h2>
      {feedbackNodes}
    </div>
  );
};

export default FeedBackPage;
