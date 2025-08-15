import React,{ useContext } from 'react'
import "../styles/AllTask.css";
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

  const authData = useContext(AuthContext)


  return (
    <div className='all-task-outer'>
    <div className='all-task-inner hello'>
        <h1>Employee Name</h1>
        <h5>New Task</h5>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
      </div>
   
   <div className='ListName'>
          {authData.employees.map(function(elem,idx){
         
         return <div key={idx} className='all-task-inner'>
        <h1>{elem.first_name}</h1>
        <h3>{elem.task_number.new_task}</h3>
        <h5>{elem.task_number.active}</h5>
        <h5>{elem.task_number.completed}</h5>
        <h5>{elem.task_number.failed}</h5>

        
      </div>

      })}
   </div>

    </div>
  )
}

export default AllTask