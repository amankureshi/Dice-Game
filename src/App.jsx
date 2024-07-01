import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

function App() {
  const [gameStarted, setgameStarted] = useState(true);
  const toggleGamePlay = () => {
    setgameStarted((prev) => !prev);
  };
  return (
    <>{gameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
