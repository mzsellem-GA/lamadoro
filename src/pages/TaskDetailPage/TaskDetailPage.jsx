import { useLocation } from "react-router-dom";
import { useState } from "react";


export default function RandomQuote({ quotes }) {
   
   let { state } = useLocation();
   console.log('quotes in RandomQuote', quotes)
   function getRandomQuote() {
      if (quotes) {
         const randomIndex = Math.floor(Math.random() * quotes.length);
         return quotes[randomIndex];
      }
   }
   //set useState to null and use setquote with getRandomQuote after timer is done
   const [quote, setQuote] = useState(getRandomQuote());

   function handleNewQuote() {
      console.log('quotes in handleNewQuote', quotes)
      setQuote(getRandomQuote());
   }

   return (
      <div>
         <h1>Random Quote</h1>
         {quote ? (
            <p>
               {state.quote.text} -{state.quote.byName}
            </p>
         ) : (
            <p>Loading...</p>
         )}
         <button onClick={handleNewQuote}>New Quote</button>
      </div>
   );
}