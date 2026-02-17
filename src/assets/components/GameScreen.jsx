export default function GameScreen({ question, currentQuestionIndex, setCurrentQuestionIndex, endGame }) {
    const handleAnswer = (answer) => {
        if (answer === question.correct) {
            if (currentQuestionIndex === 9) {
                endGame(1000000); 
            } else {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            }
        } else {
            endGame(0); 
        }
    };

    return (
        <div className="game">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}