import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

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
  const numberToDisplay = feedback.rating;

  return (
    <div className="Feedback">
      <IndividualFeedback>
        <h2>Student: {feedback.name}</h2>
        <Text>Age Group: {feedback.ageGroup}</Text>
        <Text>
          Rating:{" "}
          {[...Array(numberToDisplay)].map((star) => {
            return <FaStar color="#FFC107" />;
          })}
        </Text>
        <Text>Feedback: {feedback.feedback}</Text>
        <Text>Date: {feedback.date}</Text>
      </IndividualFeedback>
    </div>
  );
};

export default Feedback;
