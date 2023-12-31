import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Nav from "react-bootstrap/Nav";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
   function handleLogOut() {
      userService.logOut();
      setUser(null);
   }

   return (
      <>
         <Nav className="navbar navbar-fixed-top w-100 mx-auto px-5">
            <div className="nav-items-wrapper d-flex justify-content-around w-100 align-items-center">
               <Nav.Item className="w-25">
                  <img
                     className="navbar-lamadoro-logo w-50"
                     src="lamadoro-logo.png"
                     alt="Logo"
                  />
               </Nav.Item>
               <Nav.Item className="w-25">
                  <Link className="home-in-nav text-white fw-bold text" to="/">
                     Home
                  </Link>
               </Nav.Item>
               <Nav.Item className="w-25">
                  <Link
                     className="tasks-in-nav text-white fw-bold text"
                     to="/tasks"
                  >
                     Tasks
                  </Link>
               </Nav.Item>
               <Nav.Item className="w-25">
                  <Link
                     className="about-in-nav text-white fw-bold text"
                     to="/about"
                  >
                     What is lamadoro?
                  </Link>
               </Nav.Item>
               <Nav.Item className="w-25">
                  <Link
                     className="logout-in-nav text-white fw-bold text"
                     to=""
                     onClick={handleLogOut}
                  >
                     Log Out
                  </Link>
               </Nav.Item>
            </div>
         </Nav>
      </>
   );
}
