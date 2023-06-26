import { Link } from "react-router-dom";

export default function TaskCard({ task }) {
   return (
      <div>
         <h1>{task.text}</h1>
         <Link to={`/tasks/${task.text}`}>
            <button>Add Timer</button>
         </Link>
      </div>
   );
}
