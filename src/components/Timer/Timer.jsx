import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Timer({ quotes }) {
   let { state } = useLocation();
   const [secondsLeft, setSecondsLeft] = useState(3);
   const [timer, setTimer] = useState();
   const [playDing, setPlayDing] = useState(false);
   const [randomQuote, setRandomQuote] = useState(null);

   const reset = () => {
      setSecondsLeft(3);
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
      <div className="w-100 h-100 d-flex justify-content-center align-items-center App">
         <div className="tasks-title col-7 w-80">
            <div className="my-4 task-top text-white justify-content-start d-flex w-100">
               <h1 className="mx-4 text-white">{state.task.text}</h1>
            </div>
            {randomQuote && (
               <div>
                  <p>
                     "{randomQuote.text}" - {randomQuote.byName}
                  </p>
               </div>
            )}
            <div className="tasks-container rounded-6 w-100 d-flex justify-content-center align-itmes-center h-100">
               <div className="col-8 p-2 w-50">
                  <div className="timer-logo-div">
                     <img
                        src="lamadoro-logo.png"
                        alt="image"
                        className="w-50 h-100 timer-logo"
                     />
                  </div>
                  <div className="d-flex w-100 box-center">
                     <div className="rounded-3 py-2 w-25 timer_part">
                        {secondsLeft}
                     </div>
                  </div>
                  <div className="d-flex w-100 box-center my-2">
                     <button
                        className="mx-3 rounded-3 border-0 px-4"
                        onClick={start}
                     >
                        Start
                     </button>
                     <button
                        className="mx-3 rounded-3 border-0 px-4"
                        onClick={reset}
                     >
                        Reset
                     </button>
                     <button
                        className="mx-3 rounded-3 border-0 px-4"
                        onClick={pause}
                     >
                        Pause
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
