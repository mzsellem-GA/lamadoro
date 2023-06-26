import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
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
                  <Route path="/orders/new" element={<NewOrderPage />} />
               </Routes>
            </>
         ) : (
            <AuthPage setUser={setUser} />
         )}
      </main>
   );
}
