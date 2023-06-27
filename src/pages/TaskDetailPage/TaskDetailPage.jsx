import Timer from "../../components/Timer/Timer";

export default function RandomQuote({ quote, handleNewQuote }) {
   return (
      <div>
         <h1>Random Quote</h1>
         {!quote && <p>Loading...</p>}
         {quote && (
            <p>
               {quote.text} - {quote.byName}
            </p>
         )}
         <button onClick={handleNewQuote}>New Quote</button>
         <Timer />
      </div>
   );
}
