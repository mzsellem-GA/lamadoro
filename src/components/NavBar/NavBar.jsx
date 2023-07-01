import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
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
         <Nav className="navbar navbar-fixed-top" variant="underline">
            <Nav.Item className=" d-flex flex-grow-1 w-25">
               <div className="w-100">
                  <img
                     className="navbar-lamadoro-logo"
                     src="lamadoro-logo.png"
                  />
               </div>
            </Nav.Item>
            <div className="nav-items-wrapper d-flex flex-end">
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
