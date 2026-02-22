import win1 from "../sounds/Win_5.mp3";
import win2 from "../sounds/Win_10.mp3";

export default function EndScreen({ earned, onRestart }) {
  const handleRestart = () => {
    let audio;

    if (earned === 5000) {
      audio = new Audio(win1);
    } else if (earned === 500000) {
      audio = new Audio(win2);
    }

    if (audio) {
      audio.onended = () => onRestart();
      audio.play().catch(e => console.log("Audio error:", e));
    } else {
      onRestart();
    }
  };

  return (
    <div>
      <h1>Kraj igre</h1>
      <p>Osvojili ste: {earned} €</p>
      <button onClick={handleRestart}>Igraj ponovo</button>
    </div>
  );
}

