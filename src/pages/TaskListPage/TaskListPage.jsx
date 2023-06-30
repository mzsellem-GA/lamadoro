import { useEffect, useState } from "react";
import * as tasksAPI from "../../utilities/tasks-api";
import TaskForm from "../../components/TaskForm/TaskForm";
import TaskCard from "../../components/TaskCard/TaskCard";
import "./TaskListPage.css"

export default function TaskListPage({ user }) {
   const [tasks, setTasks] = useState([]);
   const [updated, setUpdated] = useState(false);

   useEffect(
      function () {
         async function getTasks() {
            const tasks = await tasksAPI.getAll();
            console.log("tasks in getTasks", tasks);
            setTasks(tasks);
         }
         getTasks();
      },
      [updated]
   );

   return (
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
         <div className="tasks-title col-7 w-52">
            <div className="my-4 task-top text-white justify-content-start d-flex w-100">
               <h1 className="mx-4">Tasks</h1>
            </div>
            
            <div className="tasks-container rounded-3 d-flex justify-content-center align-itmes-center h-100">
               <div className="col-8 p-2">
                  <TaskForm user={user} tasks={tasks} setTasks={setTasks} />
                  {tasks.length === 0 ? (
                     <p>No tasks yet!</p>
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
