import React from 'react'
import "../styles/EmpD.css";
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ( props ) => {
  // console.log(data)
  return (
    <div>
      <div className='em p-10 bg-[#1C1C1C] h-screen'>
        <Header first_name={props.data?.first_name || "User"} changeUser={props.changeUser} />
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard