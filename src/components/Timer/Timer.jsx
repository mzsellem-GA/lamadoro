import React, { useEffect, useState } from "react";
export default function Timer({ task }) {
   console.log("task in timer", task);
   const [secondsLeft, setSecondsLeft] = useState(3);
   const [timer, setTimer] = useState();
   const [playDing, setPlayDing] = useState(false);

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
         setPlayDing(true);
      }
   }, [secondsLeft, timer]);
   useEffect(() => {
      if (playDing) {
         const audio = document.getElementById("dingAudio");
         audio.play();
      }
   }, [playDing]);

   useEffect(() => {
      return () => clearInterval(timer);
   }, [timer]);
   return (
      <div className="App">
         <h1>{task}</h1>
         <div>{secondsLeft}</div>
         <audio id="dingAudio" src="ding/ding.mp3"></audio>
         <button onClick={start}>Start</button>
         <button onClick={pause}>Pause</button>
      </div>
   );
}
