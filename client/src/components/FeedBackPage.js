import React from "react";
import Feedback from "./Feedback";
import styled from "styled-components";

const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-right: 50px;
`;

const FeedBackPage = ({ feedbacks }) => {
  const feedbackNodes = feedbacks.map((feedback) => {
    return <Feedback key={feedback._id} feedback={feedback} />;
  });

  return (
    <div className="FeedBackPage">
      <h2>List of Feedback We've Received:</h2>
      <ItemContainer>{feedbackNodes}</ItemContainer>
    </div>
  );
};

export default FeedBackPage;
