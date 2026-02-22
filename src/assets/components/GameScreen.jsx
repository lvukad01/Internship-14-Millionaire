import { useState, useEffect, useRef } from "react";
import Levels from "./Levels.jsx";
import question1 from "../sounds/Question_1-4.mp4";
import question2 from "../sounds/Question_5-9.mp4";
import question3 from "../sounds/Question_10.mp4";
import correctSound from "../sounds/Correct.mp3";
import wrongSound from "../sounds/Wrong.mp3";



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
  const [timer, setTimer] = useState(60);
  const sound=useRef(null);

  useEffect(() => {
    if (question) {
      setVisibleOptions(question.options);
      setSelectedAnswer(null);
      setTimer(60);
    }
    if(sound.current){
        sound.current.pause();
    }

  const audioFile = getAudioForRound(currentQuestionIndex);
    sound.current = new Audio(audioFile);
    sound.current.play().catch(e => console.log("Audio error:", e));
  }, [question]);

  if (!question) return null;

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === question.correct;
    if(sound.current){
        sound.current.pause();
    }
      if (answer === question.correct) {
        sound.current = new Audio(correctSound);
    } else {
        sound.current = new Audio(wrongSound);
    }
    sound.current.play().catch(e => console.log("Audio error:", e));

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
    }, 2000);
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
    const getAudioForRound=(currentQuestionIndex)=>{
        if(currentQuestionIndex<4){
            return question1;
        }else if(currentQuestionIndex<9){
            return question2;
        }else{
            return question3;
        }
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
                selectedAnswer
                ? option === question.correct
                    ? "correct"
                    : option === selectedAnswer
                    ? "wrong"     
                    : ""
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
