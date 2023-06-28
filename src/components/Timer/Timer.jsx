import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Timer({ quotes }) {
   let { state } = useLocation();
   const [secondsLeft, setSecondsLeft] = useState(3);
   const [timer, setTimer] = useState();
   const [playDing, setPlayDing] = useState(false);
   const [randomQuote, setRandomQuote] = useState(null);

   const reset = () => {
      setSecondsLeft(3); // Replace 3 with your desired initial value
   };

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
         reset();
      } else if (secondsLeft === 2) {
         setPlayDing(true);
      }
   }, [secondsLeft, timer]);

   useEffect(() => {
      if (playDing) {
         const audio = new Audio("ding.mp3");
         audio.play();
         setPlayDing(false);
      }
   }, [playDing]);

   useEffect(() => {
      if (secondsLeft === 0) {
         const randomIndex = Math.floor(Math.random() * quotes.length);
         const newRandomQuote = quotes[randomIndex];

         setRandomQuote(newRandomQuote);
      }
   }, [secondsLeft]);

   useEffect(() => {
      return () => clearInterval(timer);
   }, [timer]);

   return (
      <div className="App">
         <h1>{state.task.text}</h1>
         <div>{secondsLeft}</div>
         {randomQuote && (
            <div>
               <h2>Random Quote:</h2>
               <p>
                  {randomQuote.text} - {randomQuote.byName}
               </p>
            </div>
         )}
         <button onClick={start}>Start</button>
         <button onClick={reset}>Reset</button>
         <button onClick={pause}>Pause</button>
      </div>
   );
}
