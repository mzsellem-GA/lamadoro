import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import Nav from "react-bootstrap/Nav";

export default function NavBar({ user, setUser }) {
   function handleLogOut() {
      userService.logOut();
      setUser(null);
   }

   return (
      <>
         <Nav
            className="navbar navbar-fixed-top w-75 mx-auto"
            variant="underline"
         >
            <Nav.Item className="w-50">
               <div className="w-50">
                  <img
                     className="navbar-lamadoro-logo w-50"
                     src="lamadoro-logo.png"
                     alt="Logo"
                  />
               </div>
            </Nav.Item>
            <div className="nav-items-wrapper d-flex justify-content-around w-25">
               <Nav.Item>
                  <Link className="tasks-in-nav text-white fw-bold" to="/">
                     Home
                  </Link>
               </Nav.Item>
               <Nav.Item>
                  <Link className="tasks-in-nav text-white fw-bold" to="/tasks">
                     Tasks
                  </Link>
               </Nav.Item>
               <Nav.Item>
                  <Link className="about-in-nav text-white fw-bold" to="/about">
                     What is lamadoro?
                  </Link>
               </Nav.Item>
               <Nav.Item>
                  <Link
                     className="logout-in-nav text-white fw-bold"
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
