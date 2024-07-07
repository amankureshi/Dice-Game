import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`images/dice_${currentDice}.png`} alt="dice.png" />
      </div>
      <p>Click on dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
const DiceContainer = styled.div`
  margin-top: 1.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
  }
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
