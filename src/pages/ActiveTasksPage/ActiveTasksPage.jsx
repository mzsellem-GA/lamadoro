// import * as usersService from "../../utilities/users-service"
import { checkToken } from "../../utilities/users-service";

export default function ActiveTasksPage() {
   async function handleCheckToken() {
      const expDate = await checkToken();
      console.log(expDate);
   }
   return (
      <>
         <h1>Active Tasks Page</h1>
         <button onClick={handleCheckToken}>Check When My Login Expires</button>
      </>
   );
}
