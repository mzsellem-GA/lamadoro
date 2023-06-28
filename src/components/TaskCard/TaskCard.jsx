import { Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../../utilities/users-service";

export default function TaskCard({
   task,
   removeTaskFromState,
   updateTaskFromState,
}) {
   // const [task, setTask] = useState(task);
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

   async function handleSubmit() {
      // event.preventDefault();
      console.log("task in handle submit", task);
      try {
         const response = await fetch(`/api/tasks/${task._id}`, {
            method: "PATCH",
            headers: {
               Authorization: `Bearer ${token}`,
               Accept: "application/json",
               "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
         });
         console.log("response in handle submit", response);
         if (!response.ok) {
            throw new Error("Request failed");
         }

         const updatedTask = await response.json();
         console.log("task was changed", updatedTask);
      } catch (error) {
         setError(error.message);
      }
   }

   function handleUpdate(event) {
      console.log("task in handleChange in TaskCard", task);
      console.log("event in handleChange in TaskCard", event.target.value);
      task = { ...task, text: event.target.value };
      // task.text = event.target.value;
      updateTaskFromState(task._id);
      console.log("task.text in handleChange", task.text);
   }

   return (
      <div>
         <h1>{task.text}</h1>
         <form>
            <input
               type="text"
               name="text"
               value={task?.text}
               onChange={handleUpdate}
            ></input>
         </form>
         <button onClick={() => handleSubmit()}>Update</button>
         <button onClick={() => handleDelete()}>X</button>
         {error && <p>{error}</p>}
         <Link to="/detail" state={{ task }}>
            <button>Add Timer</button>
         </Link>
      </div>
   );
}
