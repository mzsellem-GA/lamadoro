import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TaskListPage from "../TaskListPage/TaskListPage";
import TaskDetailPage from "../TaskDetailPage/TaskDetailPage";
import AuthPage from "../AuthPage/AuthPage";
import AboutPage from "../AboutPage/AboutPage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import * as quotesApi from "../../utilities/quotes-api";

export default function App() {
   const [user, setUser] = useState(getUser());
   const [quotes, setQuotes] = useState(null);
   const [quote, setQuote] = useState(null);
   // console.log("quotes in app", quotes);

   useEffect(function () {
      async function getQuotes() {
         const quotes = await quotesApi.getAll();
         setQuotes(quotes);
         // console.log("quotes in getQuotes before calling getQuotes", quotes);
         const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
         setQuote(randomQuote);
      }
      getQuotes();
      // console.log("quotes in getQuotes after calling getQuotes", quotes);
   }, []);

   return (
      <main className="App">
         {user ? (
            <>
               <NavBar user={user} setUser={setUser} />
               <Routes>
                  <Route path="/tasks" element={<TaskListPage user={user} />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route
                     path="/detail"
                     element={<TaskDetailPage quotes={quotes} />}
                  />
               </Routes>
            </>
         ) : (
            <AuthPage setUser={setUser} />
         )}
      </main>
   );
}
