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

  const endGame = (amount) => {
    setEarned(amount);
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
        />
      )}

      {gameState === "end" && (
        <EndScreen earned={earned} startGame={startGame} />
      )}
    </>
  );
}

export default App;
