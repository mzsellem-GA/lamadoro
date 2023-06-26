import { useEffect, useState } from "react";
import * as tasksAPI from "../../utilities/tasks-api";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskCard from "../../components/TaskCard/TaskCard";

export default function TaskListPage({ user }) {
   const [tasks, setTasks] = useState([]);

   useEffect(function () {
      async function getTasks() {
         const tasks = await tasksAPI.getAll();
         console.log("tasks in getTasks", tasks);
         setTasks(tasks);
      }
      getTasks();
   }, []);
   return (
      <div>
         <h1>Tasks</h1>
         <TaskForm user={user} tasks={tasks} setTasks={setTasks} />
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
