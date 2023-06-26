import { useState } from "react";
import { createTask } from "../../utilities/tasks-service";

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
      <form onSubmit={handleSubmit}>
         <input name="text" value={newTaskText.text} onChange={handleChange} />
         <button type="submit">Add Task</button>
      </form>
   );
}
