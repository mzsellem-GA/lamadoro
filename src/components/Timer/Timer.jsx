import React, { useEffect, useState } from "react";
export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timer, setTimer] = useState();
  const start = () => {
    const newTimer = setInterval(() => {
      setSecondsLeft((prevSecondsLeft) => prevSecondsLeft - 1);
    }, 1000);
    setTimer(newTimer);
  };
  const pause = () => {
    clearInterval(timer);
    setTimer(null);
  };
  useEffect(() => {
    if (secondsLeft === 0) {
      clearInterval(timer);
    }
  }, [secondsLeft, timer]);
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);
  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <div>{secondsLeft} seconds left</div>
    </div>
  );
}
