import { Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../../utilities/users-service";

export default function TaskCard({ task, removeTaskFromState }) {
   const token = getToken();
   const [error, setError] = useState(null);
   const handleDelete = async () => {
      try {
         const response = await fetch(`/api/tasks/${task._id}`, {
            method: "DELETE",
            headers: {
               Authorization: `Bearer ${token}`,
               Accept: "application/json",
               "Content-Type": "application/json",
            },
         });
         if (response.ok) {
            removeTaskFromState(task._id);
         } else {
            const error = await response.json();
            setError(error.message);
         }
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <div>
         <h1>{task.text}</h1>
         <button onClick={() => handleDelete()}>X</button>
         {error && <p>{error}</p>}
         <Link to="/detail" state={{ task }}>
            <button>Add Timer</button>
         </Link>
      </div>
   );
}
