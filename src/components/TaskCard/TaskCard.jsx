import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getToken } from '../../utilities/users-service';


export default function TaskCard({ task }) {
   const token = getToken()
   const navigate = useNavigate()
   const [error, setError] = useState(null)
   const handleDelete = async () => {
      try {
        const response = await fetch(`/api/tasks/${task._id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });
    
        if (response.ok) {
          await navigate('/tasks/new');
        } else {
          const error = await response.json();
          setError(error.message);
        }
      } catch (error) {
        setError(error.message);
      }
    };
    
    handleDelete();

   return (
      <div>
         <h1>{task.text}</h1>
            <button onClick={handleDelete}>X</button>
         <Link to="/detail" state={{ task }}>
            <button>Add Timer</button>
         </Link>
      </div>
   );
}
