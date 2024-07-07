import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="Image">
        <img
          src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CkrZOtxAS2Zu8R2z5A2KWs5~T7q-UdxyPS-DCT8xpqlnH8qPAtk7XG9kTg~cQggZcjXumkuCxt5~CNzOkrM-4JKlLnB27hIdXBRxS4Nkvyk16GO2hryByjankxhaJh5D0ASEAt06mWG3OlJhlMOLspY-nUogNqm1OIB30uzzeHJJC30h-rlHNXXZ80ts-OgMvJvmLkmdJauAMAOSGGJiDwViAG20ksSVUXzccrJzNcrymzHESp0-vC-oK8v3u5vlA2vvgoTaNaQgVG1xOZSh3yzW7k3UfnfRQz66xZ-fDV5CmrlMtZJOLbEH79CsVaYwCxTRMvgQaNpsWbkJ5QKmyQ__"
          alt=""
        />
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
