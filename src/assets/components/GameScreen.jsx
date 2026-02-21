import { useState, useEffect } from "react";
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
  const [fiftyUsed, setFiftyUsed] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState(question.options);

  useEffect(() => {
    if (question) {
      setVisibleOptions(question.options);
      setSelectedAnswer(null);
    }
  }, [question]);

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
    const handleFifty = () => {
        if (fiftyUsed) return;

        const correct = question.correct;
        const wrongOptions = question.options.filter(o => o !== correct);
        const randomWrong =
            wrongOptions[Math.floor(Math.random() * wrongOptions.length)];

        setVisibleOptions([correct, randomWrong].sort(() => Math.random() - 0.5));
        setFiftyUsed(true);
    };

  return (
    <div className="game-layout">
      <div className="game">
        <h3>Razina {currentQuestionIndex + 1}</h3>
        <h2>{question.question}</h2>
        <div className="jokers">
        <button
            onClick={handleFifty}
            disabled={fiftyUsed}
            className={fiftyUsed ? "joker used" : "joker"}
        >
            50:50
        </button>

        <button
            onClick={handleSkip}
            disabled={skipUsed}
            className={skipUsed ? "joker used" : "joker"}
        >
            Preskoči pitanje
        </button>
        </div>



        <div className="options">
          {visibleOptions.map((option, index) => (
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
