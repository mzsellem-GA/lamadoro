import { Link } from "react-router-dom";
import { useState } from "react";
import { getToken } from "../../utilities/users-service";
import * as tasksApi from "../../utilities/tasks-api";
import "../../pages/TaskListPage/TaskListPage.css";

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
   const updateChange= () => {
      document.getElementById('task_text').classList.add('d-none');
      document.getElementById('update_input').classList.remove('d-none');
      document.getElementById('update_input').classList.add('d-flex');
      document.getElementById('task_text').classList.remove('d-flex');
   }

   return (
      <div className=" my-1 mx-auto d-flex justify-content-between align-items-center mx-auto">
         <div className="w-50 d-flex">
            <h5 className="d-flex box-center mx-2 text-white" id="task_text">{task.text}</h5>
            <div className="d-none" id="update_input" >
               <input type="text" name="text" onChange={handleChange} value={task.text}/>
               <button onClick={() => handleSubmit(task._id)}>Update</button>
            </div>
         </div>
         <div className="w-50 d-flex align-items-center justify-content-end">
            <Link to="/detail" state={{ task }}>
               <button className="rounded-3 py-1 px-3 border-0">Add Timer</button>
            </Link>
            <button className="d-flex box-center p-1 rounded-circle update_btn border-0" onClick={() => updateChange()}>
               <span className="d-flex box-center m-2">-</span>
            </button>
            <button className="delete_btn d-flex box-center p-1 rounded-circle border-0" onClick={() => handleDelete(task._id)}>
               <span className="d-flex box-center m-2">X</span>
            </button>
            {error && <p>{error}</p>}
            
         </div>
      </div>
   );
}
