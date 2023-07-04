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
         <Nav className="navbar navbar-fixed-top" variant="underline">
            <Nav.Item className="d-flex flex-grow-1">
               <div className="w-25">
                  <img
                     className="navbar-lamadoro-logo w-50"
                     src="lamadoro-logo.png"
                     alt="Logo"
                  />
               </div>
            </Nav.Item>
            <div className="nav-items-wrapper ml-auto">
               <Nav.Item className="mr-3">
                  <Link className="tasks-in-nav text-white fw-bold" to="/">
                     Tasks
                  </Link>
               </Nav.Item>
               <Nav.Item className="mr-3">
                  <Link className="about-in-nav text-white fw-bold" to="/about">
                     What is lamadoro?
                  </Link>
               </Nav.Item>
               <Nav.Item className="mr-3">
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
