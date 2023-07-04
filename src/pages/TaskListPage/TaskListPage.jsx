import { useEffect, useState } from "react";
import * as tasksAPI from "../../utilities/tasks-api";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskCard from "../../components/TaskCard/TaskCard";
import "./TaskListPage.css";

export default function TaskListPage({ user }) {
   const [tasks, setTasks] = useState([]);
   const [updated, setUpdated] = useState(false);

   useEffect(
      function () {
         async function getTasks() {
            const tasks = await tasksAPI.getAll();
            const newShowingTasks = tasks.filter(
               (task) => task.user === user._id
            );
            setTasks(newShowingTasks);
         }
         getTasks();
      },
      [updated, user._id]
   );

   return (
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
         <div className="tasks-title col-7 w-80">
            <div className="my-4 task-top text-white justify-content-start d-flex w-100">
               <h1 className="mx-4 text-white">Tasks</h1>
            </div>

            <div className="tasks-container d-flex justify-content-center align-items-center h-100 w-52">
               <div className="col-9 p-2">
                  <TaskForm user={user} tasks={tasks} setTasks={setTasks} />
                  {tasks.length === 0 ? (
                     <p>No Tasks Yet</p>
                  ) : (
                     <ul className="d-flex box-center w-100">
                        {tasks.map((task, index) => (
                           <li key={index} className="w-100 mx-auto">
                              <TaskCard
                                 task={task}
                                 setTasks={setTasks}
                                 setUpdated={setUpdated}
                                 updated={updated}
                              />
                           </li>
                        ))}
                     </ul>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
