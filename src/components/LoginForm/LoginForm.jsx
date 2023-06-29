//********************** check code

import { useState } from "react";
import { login } from "../../utilities/users-service";
import "./LoginForm.css";

export default function LoginForm({ setUser }) {
   const [credentials, setCredentials] = useState({ email: "", password: "" });
   const [error, setError] = useState("");

   function handleChange(evt) {
      //   this.setState({
      //      [evt.target.name]: evt.target.value,
      //      error: "",
      //   });
      setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
      setError("");
   }

   async function handleSubmit(evt) {
      evt.preventDefault();

      try {
         const user = await login(credentials);
         //  console.log("credentials in login", credentials);
         setUser(user);
      } catch {
         //  this.setState({ error: "Sign Up Failed - Try Again" });
         setError("Log In Failed - Try Again");
      }
   }

   return (
      <div className="login-form-parent-container">
         <div className="logo-in-signup">
            {/* <img src="lamadoro-logo.png"></img> */}
         </div>
         <div className="form-container">
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
         </div>
         <p className="error-message">&nbsp;{error}</p>
      </div>
   );
}
