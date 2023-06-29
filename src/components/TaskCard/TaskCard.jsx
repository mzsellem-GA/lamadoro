import { Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../../utilities/users-service";
import * as tasksApi from "../../utilities/tasks-api";

export default function TaskCard({ task, setTasks, removeTaskFromState }) {
   const token = getToken();
   const [error, setError] = useState(null);
   const [updatedText, setUpdatedText] = useState("");

   //   const handleChange = (e) => {
   //     setUpdatedText(e.target.value);
   //   };

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
            removeTaskFromState(taskId);
         }
      } catch (error) {
         setError(error.message);
      }
   };

   //   const handleUpdate = async (taskId, taskData) => {
   //     try {
   //       const response = await tasksApi.updateTask(taskId, taskData)
   //       setTasks(response)

   //     } catch (error) {
   //       setError(error.message);
   //     }
   //   };

   const handleUpdate = async (id) => {
      try {
         const res = await fetch(`/api/tasks/${id}`, {
            method: "PATCH",
            headers: {
               Authorization: `Bearer ${token}`,
               Accept: "application/json",
               "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedText),
         });
         
         const task = await res.json();
         console.log("task was changed", task);
         setTasks(await tasksApi.getAll());
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <div>
         <h1>{task.text}</h1>
         <input type="text" name="text" onChange={handleChange} />

         <button onClick={() => handleUpdate(task._id)}>Update</button>
         <button onClick={() => handleDelete(task._id)}>X</button>
         {error && <p>{error}</p>}
         <Link to="/detail" state={{ task }}>
            <button>Add Timer</button>
         </Link>
      </div>
   );
}
