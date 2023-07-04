import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import "./SignUpForm.css";

export default class SignUpForm extends Component {
   state = {
      name: "",
      email: "",
      password: "",
      confirm: "",
      error: "",
   };
   handleChange = (evt) => {
      this.setState({
         [evt.target.name]: evt.target.value,
         error: "",
      });
   };

   handleSubmit = async (evt) => {
      evt.preventDefault();

      try {
         const formData = { ...this.state };
         delete formData.error;
         delete formData.confirm;
         const user = await signUp(formData);
         this.props.setUser(user);
      } catch {
         this.setState({ error: "Sign Up Failed - Try Again" });
      }
   };
   render() {
      const disable = this.state.password !== this.state.confirm;
      return (
         <div className="return-container">
            <div className="signup-parent">
               <div className="signUp-logo-div">
                  <img
                     className="signUp-lamadoro-logo"
                     src="lamadoro-logo.png"
                  ></img>
               </div>
               <div className="form-container col-3 mx-auto">
                  <form autoComplete="off" onSubmit={this.handleSubmit}>
                     <label>Name</label>
                     <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                     />
                     <label>Email</label>
                     <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                     />
                     <label>Password</label>
                     <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                     />
                     <label>Confirm</label>
                     <input
                        type="password"
                        name="confirm"
                        value={this.state.confirm}
                        onChange={this.handleChange}
                        required
                     />
                     <button
                        className="button-in-signup"
                        type="submit"
                        disabled={disable}
                     >
                        SIGN UP
                     </button>
                  </form>
                  <div>
                     <button
                        className="ternary-button-signup"
                        onClick={this.props.handlePref}
                     >
                        {this.props.userPref === "signup"
                           ? "Already a member? Log In"
                           : "Need an account? Sign Up"}
                     </button>
                  </div>
               </div>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
         </div>
      );
   }
}
