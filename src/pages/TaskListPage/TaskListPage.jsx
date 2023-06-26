// import TaskForm from "../../components/TaskForm/TaskForm";
import TaskCard from "../../components/TaskCard/TaskCard";

// export default function TaskListPage() {
//    return (
//       <>
//          <h1>Task List Page</h1>
//          <TaskForm />
//          <TaskCard />
//       </>
//    );
// }

import { useEffect, useState } from "react";
import { createTask } from "../../utilities/tasks-service";
import * as tasksAPI from "../../utilities/tasks-api";

export default function TaskListPage({ user }) {
   const [tasks, setTasks] = useState([]);
   const [newTaskText, setNewTaskText] = useState({ text: "" });

   useEffect(function () {
      async function getTasks() {
         const tasks = await tasksAPI.getAll();
         console.log("tasks in getTasks", tasks);
         setTasks(tasks);
      }
      getTasks();
   }, []);

   async function handleSubmit(event) {
      event.preventDefault();
      // console.log({ user });
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
      <div>
         <h1>Tasks</h1>
         <form onSubmit={handleSubmit}>
            <input
               name="text"
               value={newTaskText.text}
               onChange={handleChange}
            />
            <button type="submit">Add Task</button>
         </form>

         {tasks.length === 0 ? (
            <p>No tasks yet!</p>
         ) : (
            <ul>
               {tasks.map((task, index) => (
                  <li key={index}>
                     <TaskCard task={task} />
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
