import { useState } from 'react'
import questions from './assets/data/questions.js'
import StartScreen from "./assets/components/StartScreen.jsx";
import GameScreen from "./assets/components/GameScreen.jsx";
import EndScreen from "./assets/components/EndScreen.jsx";


function App() {
  const [gameState, setGameState] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [earned, setEarned] = useState(0);
  const [gameQuestions, setGameQuestions] = useState([]);
  const levels = [
  100, 200, 500, 1000, 5000,
  10000, 25000, 50000, 100000, 500000
  ];

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const startGame = () => {
    const shuffled = shuffleArray(questions);
    const selected = shuffled.slice(0, 10).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setGameQuestions(selected);
    setCurrentQuestionIndex(0);
    setEarned(0);
    setGameState("game");
  };
const endGame = (won) => {
  if (won) {
    setEarned(levels[9]);
  } else {
    if (currentQuestionIndex >= 4) {
      setEarned(5000); 
    } else {
      setEarned(0);
    }
  }
  setGameState("end");
};


  return (
    <>
      {gameState === "start" && <StartScreen startGame={startGame} />}

      {gameState === "game" && (
        <GameScreen
          questions={gameQuestions}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          endGame={endGame}
          levels={levels}
        />

      )}

      {gameState === "end" && (
        <EndScreen earned={earned} startGame={startGame} />
      )}
    </>
  );
}

export default App;
