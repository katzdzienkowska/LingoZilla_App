import React from "react";
import styled from "styled-components";

const IndividualFeedback = styled.li`
  border: 2px solid black;
  list-style: none;
  border-radius: 5px;
  padding: 10px;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Feedback = ({ feedback }) => {
  return (
    <div className="Feedback">
      <IndividualFeedback>
        <h2>Student: {feedback.name}</h2>
        <Text>Age Group: {feedback.ageGroup}</Text>
        <Text>Rating: {feedback.rating}-stars </Text>
        <Text>Feedback: {feedback.feedback}</Text>
        <Text>Date: {feedback.date}</Text>
      </IndividualFeedback>
    </div>
  );
};

export default Feedback;
