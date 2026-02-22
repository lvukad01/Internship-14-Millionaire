export default function Levels({ levels, currentQuestionIndex }) {
  return (
    <ul className="levels">
      {levels.map((amount, index) => (
        <li
          key={index}
          className={`level ${
            index === currentQuestionIndex
              ? "active"
              : index === 4
              ? "safe"
              : ""
          }`}
        >
          {index + 1}. {amount} €
        </li>
      ))}
    </ul>
  );
}
