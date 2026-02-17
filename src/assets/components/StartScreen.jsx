export default function StartScreen({ startGame }) {
  return (
    <div className="start">
      <h1>Tko želi biti polu milijunaš?</h1>
      <button onClick={startGame}>Započni igru</button>
    </div>
  );
}