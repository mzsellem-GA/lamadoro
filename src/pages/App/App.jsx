import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TaskListPage from "../TaskListPage/TaskListPage";
import TaskDetailPage from "../TaskDetailPage/TaskDetailPage";
// import TaskCard from "../../components/TaskCard/TaskCard";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";

export default function App() {
   const [user, setUser] = useState(getUser());
   return (
      <main className="App">
         {user ? (
            <>
               <NavBar user={user} setUser={setUser} />
               <Routes>
                  <Route path="/tasks" element={<TaskListPage user={user} />} />
                  <Route path="/tasks/:taskName" element={<TaskDetailPage />} />
               </Routes>
            </>
         ) : (
            <AuthPage setUser={setUser} />
         )}
      </main>
   );
}
