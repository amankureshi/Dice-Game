import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="Image">
        <img src="images/hero-dice.png" alt="Dice images" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .content h1 {
    font-size: 5.5rem;
    white-space: nowrap;
    font-weight: 600;
  }
  .Image img {
    width: 85%;
  }
  .Image {
    width: 85%;
    transition: 2s ease-in-out;
  }
  .Image:hover {
    -webkit-transform: rotateZ(-5deg);
    -ms-transform: rotateZ(-5deg);
    transform: rotateZ(-5deg);
    transition: 2s ease-in-out;
    /* margin-bottom: 220px; */
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  @media (max-width: 786px) {
    .content h1 {
      font-size: 2rem;
    }
    .Image img {
      width: 100%;
    }
  }
`;
