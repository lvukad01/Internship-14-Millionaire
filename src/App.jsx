import { useState } from 'react'
import questions from './assets/data/questions.js'
import StartScreen from "./assets/components/StartScreen.jsx";
import GameScreen from "./assets/components/GameScreen.jsx";
import EndScreen from "./assets/components/EndScreen.jsx";

function App() {
  const [gameState, setGameState] = useState("start") 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [earned, setEarned] = useState(0)

  const startGame = () => {
    setGameState("game");
    setCurrentQuestionIndex(0);
    setEarned(0);
  };
  const endGame = (amount) => {
    setEarned(amount);
    setGameState("end");
  };

  return (
    <>
      {gameState === "start" && <StartScreen startGame={startGame} />}
      {gameState === "game" && (
        <GameScreen
          question={questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          endGame={endGame}
        />
      )}
      {gameState === "end" && <EndScreen earned={earned} startGame={startGame} />}  
    </>
  );
}

export default App
