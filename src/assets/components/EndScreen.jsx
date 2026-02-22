
export default function EndScreen({ earned, onRestart }) {
  return (
    <div>
      <h1>Kraj igre</h1>
      <p>Osvojili ste: {earned} €</p>
      <button onClick={onRestart}>Igraj ponovo</button>
    </div>
  );
}

