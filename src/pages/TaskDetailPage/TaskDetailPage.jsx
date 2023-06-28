import Timer from "../../components/Timer/Timer";

export default function RandomQuote({ quotes }) {
   return (
      <div>
         <Timer quotes={quotes} />
      </div>
   );
}
