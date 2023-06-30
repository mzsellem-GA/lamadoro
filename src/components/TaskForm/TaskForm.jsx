import { useState } from "react";
import { createTask } from "../../utilities/tasks-service";
import "../../pages/TaskListPage/TaskListPage.css"

export default function TaskForm({ user, tasks, setTasks }) {
   const [newTaskText, setNewTaskText] = useState({ text: "" });

   async function handleSubmit(event) {
      event.preventDefault();
      console.log({ user });
      const newTask = {
         text: newTaskText.text,
         user: user._id,
      };
      //here is where we connect react to the server
      const task = await createTask(newTask);
      setTasks([...tasks, task]);
      // console.log("all notes that exists", notes);
      // console.log("user in handleSubmit", user);
      setNewTaskText({ text: "" });
   }

   function handleChange(event) {
      setNewTaskText({
         ...newTaskText,
         [event.target.name]: event.target.value,
      });
      // console.log("nnt in handleChange", newNoteText);
   }
   return (
      <form onSubmit={handleSubmit} className="w-100 d-flex">
         <div className="p-2 w-100 d-flex">
            <input className="rounded-3 w-75" name="text" value={newTaskText.text} onChange={handleChange} />
            <div className="w-25 d-flex box-center">
               <button className="w-75 d-flex box-center my-auto" type="submit">Add Task</button>
            </div>
            
         </div>
         
         
      </form>
   );
}
