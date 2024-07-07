import React from "react";
import styled from "styled-components";

const Rule = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  );
};

export default Rule;
const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f183;
  border-radius: 10px;
  padding: 1.3rem;
  margin-top: 3rem;
  h2 {
    font-size: 1.3rem;
  }
  .text {
    margin-top: 1.5rem;
  }
`;
