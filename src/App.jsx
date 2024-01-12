import StartScreen from "./screens/startScreen";
import GameScreen from "./screens/gameScreen";
import { useState } from "react";
function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <>
      {isGameStarted ? (
        <GameScreen setIsGameStarted={setIsGameStarted} />
      ) : (
        <StartScreen setIsGameStarted={setIsGameStarted} />
      )}
    </>
  );
}

export default App;
