import Timer from "../../components/Timer/Timer";
import { useLocation } from "react-router-dom";

export default function TaskDetailPage() {
   let { state } = useLocation();
   console.log("this is state in taskdetailpage", state);
   return (
      <>
         <h1>{state.task.text}</h1>
         <Timer />
      </>
   );
}
