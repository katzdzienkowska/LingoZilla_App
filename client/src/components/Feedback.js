import { useState, useEffect } from "react";

const Feedback = ({ feedback }) => {
  return (
    <div className="Feedback">
      <h2>Student: {feedback.name}</h2>
      <p>Age Group: {feedback.ageGroup}</p>
      <p>Rating: {feedback.rating}</p>
      <p>Feedback: {feedback.comment}</p>
      <p>Date: {feedback.date}</p>
    </div>
  );
};

export default Feedback;
