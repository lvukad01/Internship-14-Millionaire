import { useState } from "react";
import Levels from "./Levels.jsx";

export default function GameScreen({
  questions,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  endGame,
  levels
}) {
  const question = questions[currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [skipUsed, setSkipUsed] = useState(false);

  if (!question) return null;
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === question.correct;

    setTimeout(() => {
      if (correct) {
        if (currentQuestionIndex === questions.length - 1) {
          endGame(true);
        } else {
          setSelectedAnswer(null);
          setCurrentQuestionIndex(prev => prev + 1);
        }
      } else {
        endGame(false); 
      }
    }, 800);
  };
    const handleSkip = () => {
    if (skipUsed) return;

    if (currentQuestionIndex === questions.length - 1) {
        endGame(true);
    } else {
        setSkipUsed(true);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    };
  return (
    <div className="game-layout">
      <div className="game">
        <h3>Razina {currentQuestionIndex + 1}</h3>
        <h2>{question.question}</h2>
        <div className="jokers">
            <button
                onClick={handleSkip}
                disabled={skipUsed}
                className={skipUsed ? "joker used" : "joker"}
            >
                Preskoči pitanje
            </button>
        </div>


        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
              className={
                selectedAnswer === option
                  ? option === question.correct
                    ? "correct"
                    : "wrong"
                  : ""
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <Levels
        levels={levels}
        currentQuestionIndex={currentQuestionIndex}
      />
    </div>
  );
}
