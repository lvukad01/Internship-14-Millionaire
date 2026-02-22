export default function StartScreen({ startGame }) {
  return (
    <div className="body start">
      <h1>Tko želi biti polu milijunaš?</h1>
      <button onClick={startGame}>Start</button>
    </div>
  );
}
