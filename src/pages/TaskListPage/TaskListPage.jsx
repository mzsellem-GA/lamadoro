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

   function removeTaskFromState(taskid) {
      const foundTask = tasks.findIndex((task) => {
         return task._id === taskid;
      });
      const copyTask = [...tasks];
      //for update this will be different (no splice)- copyTask[foundTask] = {text: <"userinput">, user: userid}
      copyTask.splice(foundTask, 1);
      setTasks(copyTask);
      // console.log(copyTask);
   }

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
                     <TaskCard
                        task={task}
                        removeTaskFromState={removeTaskFromState}
                     />
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
}
