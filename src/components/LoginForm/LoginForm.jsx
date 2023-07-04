import { useState } from "react";
import { login } from "../../utilities/users-service";
import "./LoginForm.css";

export default function LoginForm({ setUser, userPref, handlePref }) {
   const [credentials, setCredentials] = useState({ email: "", password: "" });
   const [error, setError] = useState("");

   function handleChange(evt) {
      setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
      setError("");
   }

   async function handleSubmit(evt) {
      evt.preventDefault();

      try {
         const user = await login(credentials);
         setUser(user);
      } catch {
         setError("Log In Failed - Try Again");
      }
   }

   return (
      <div className="login-form-parent-container">
         <div className="login-logo-div">
            <img className="login-lamadoro-logo" src="lamadoro-logo.png"></img>
         </div>
         <div className="form-container col-3 mx-auto">
            <form autoComplete="off" onSubmit={handleSubmit}>
               <label>Email</label>
               <input
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
               />
               <label>Password</label>
               <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
               />
               <button type="submit" className="button">
                  Log In
               </button>
            </form>
            <div>
               <button className="ternary-button-login" onClick={handlePref}>
                  {userPref === "signup"
                     ? "Already a member? Log In"
                     : "Need an account? Sign Up"}
               </button>
            </div>
         </div>
         <p className="error-message">&nbsp;{error}</p>
      </div>
   );
}
