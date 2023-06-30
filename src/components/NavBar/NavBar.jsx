import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";

export default function NavBar({ user, setUser }) {
   // console.log("this is setUser in nav", setUser);
   function handleLogOut() {
      //delete the token from storage
      userService.logOut();
      //set the user to null
      setUser(null);
   }

   return (
      <>
         <Nav className="navbar" variant="underline">
            <Nav.Item>
               <img className="navbar-lamadoro-logo" src="lamadoro-logo.png" />
            </Nav.Item>
            <Nav.Item>
               <Link className="tasks-in-nav" to="/tasks">
                  Tasks
               </Link>
            </Nav.Item>
            <Nav.Item>
               <Link className="about-in-nav" to="/about">
                  What is lamadoro?
               </Link>
            </Nav.Item>
            <Nav.Item>
               <Link className="logout-in-nav" to="" onClick={handleLogOut}>
                  Log Out
               </Link>
            </Nav.Item>
         </Nav>
      </>
   );
}

// {
/* <nav className="navbar">
         <Link className="tasks-in-nav" to="/tasks">
            Tasks
         </Link>
         &nbsp;&nbsp;
         <Link className="about-in-nav" to="/about">
            What is lamadoro?
         </Link>
         &nbsp;&nbsp;
         <Link className="logout-in-nav" to="" onClick={handleLogOut}>
            Log Out
         </Link>
      </nav> */
// }
