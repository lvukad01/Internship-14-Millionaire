export default function StartScreen({ startGame }) {
  return (
    <div className="body start">
      <h1>Dobrodošli u igru</h1>
      <button onClick={startGame}>Start</button>
    </div>
  );
}
