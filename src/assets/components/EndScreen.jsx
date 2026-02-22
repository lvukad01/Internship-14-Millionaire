import { useEffect, useRef } from "react";
import win1 from "../sounds/Win_5.mp3";
import win2 from "../sounds/Win_10.mp3";

export default function EndScreen({ earned, onRestart }) {
  const audio = useRef(null); 

  useEffect(() => {
    if (earned === 5000) {
      audio.current = new Audio(win1);
    } else if (earned === 500000) {
      audio.current = new Audio(win2);
    }

    if (audio.current) {
      audio.current.play().catch(e => console.log("Audio error:", e));
    }

    return () => {
      if (audio.current) {
        audio.current.pause();
        audio.current.currentTime = 0;
      }
    };
  }, [earned]);

  const handleRestart = () => {
    if (audio.current) {
      audio.current.pause();
      audio.current.currentTime = 0;
    }
    onRestart();
  };

  return (
    <div className="body end">
      <h1>Kraj igre</h1>
      <p>Osvojili ste: {earned} €</p>
      <button onClick={handleRestart}>Igraj ponovo</button>
    </div>
  );
}
