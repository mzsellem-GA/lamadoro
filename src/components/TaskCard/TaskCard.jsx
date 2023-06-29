import { Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../../utilities/users-service";
import * as tasksApi from "../../utilities/tasks-api";

export default function TaskCard({ task, setTasks, setUpdated, updated }) {
   const token = getToken();
   const [error, setError] = useState(null);
   const [updatedText, setUpdatedText] = useState("");

   function handleChange(event) {
      setUpdatedText((prevText) => {
         console.log(event);
         return {
            ...prevText,
            [event.target.name]: event.target.value,
         };
      });
   }

   const handleDelete = async (taskId) => {
      try {
         const response = await tasksApi.deleteTask(taskId);

         if (response) {
            setUpdated(!updated);
         }
      } catch (error) {
         setError(error.message);
      }
   };

   const handleSubmit = async (id) => {
      try {
         const response = await tasksApi.updateTask(id, updatedText);
         // console.log("task was changed", task);
         // console.log("response in handleSubmit", response);
         if (response) {
            setUpdated(!updated);
         }
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <div>
         <h1>{task.text}</h1>
         <input type="text" name="text" onChange={handleChange} />

         <button onClick={() => handleSubmit(task._id)}>Update</button>
         <button onClick={() => handleDelete(task._id)}>X</button>
         {error && <p>{error}</p>}
         <Link to="/detail" state={{ task }}>
            <button>Add Timer</button>
         </Link>
      </div>
   );
}
