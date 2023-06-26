import TaskForm from '../../components/TaskForm/TaskForm'
import TaskItem from '../../components/TaskItem/TaskItem'
import TaskList from '../../components/TaskList/TaskList'
import Timer from '../../components/Timer/Timer'


export default function TaskPage() {
   return(
      <>
         <h1>Task Page</h1>
         <TaskForm />
         <TaskItem />
         <TaskList />
         <Timer />
      </>
   )
}
