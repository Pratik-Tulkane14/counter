import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(55);
  const [isCounterStart, setIsCounterStart] = useState(false);
  const handleReset = () => {
    setIsCounterStart(false);
    setCount(0);
  };
  const formatTime = (seconds) => {
    const timeInMintes = Math.floor(seconds / 60);
    const timeInSeconds = seconds % 60;
    const formatedSeconds = timeInSeconds<10?`0${timeInSeconds}`:timeInSeconds
    return `${timeInMintes}:${formatedSeconds}`;
  };
  const handleToggle = () => {
    setIsCounterStart(!isCounterStart);
  };
  useEffect(() => {
    let interval;
    if (isCounterStart) {
      interval = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else {
      clearTimeout(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isCounterStart, count]);
  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
        }}
      >
        Stopwatch
      </p>
      <p>Time: {formatTime(count)}</p>
      <button onClick={() => handleToggle()}>
        {isCounterStart ? "Stop" : "Start"}
      </button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default App;
