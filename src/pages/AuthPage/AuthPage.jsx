import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
   const [userPref, setUserPref] = useState("signup");
   function handlePref({ setUser }) {
      if (userPref === "signup") {
         setUserPref("login");
      } else {
         setUserPref("signup");
      }
   }

   return (
      <div className="w-100">
         {userPref === "signup" ? (
            <SignUpForm
               setUser={setUser}
               userPref={userPref}
               handlePref={handlePref}
            />
         ) : (
            <LoginForm
               setUser={setUser}
               userPref={userPref}
               handlePref={handlePref}
            />
         )}
      </div>
   );
}
