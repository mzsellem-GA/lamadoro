import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
   // console.log("this is setUser in nav", setUser);
   function handleLogOut() {
      //delete the token from storage
      userService.logOut();
      //set the user to null
      setUser(null);
   }

   return (
      <nav>
         <Link to="/tasks">Tasks</Link>
         &nbsp;&nbsp;
         <Link to="/about">What is lamadoro?</Link>
         &nbsp;&nbsp;
         <Link to="" onClick={handleLogOut}>
            Log Out
         </Link>
         <h3>Welcome {user.name}!</h3>
      </nav>
   );
}
