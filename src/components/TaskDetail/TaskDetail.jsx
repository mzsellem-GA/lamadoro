import Timer from "../../components/Timer/Timer";

export default function TaskDetailPage({ task }) {
   return (
      <>
         <h1>{task.text}</h1>
         <Timer />
      </>
   );
}
