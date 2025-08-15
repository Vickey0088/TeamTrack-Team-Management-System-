import React from 'react'
import '../styles/TaskListNumbers.css'

const TaskListNumbers = ({data}) => {
  return (
    <div className="task-list-numbers-container">
      <div className="task-list-box-1">
        <h2>{data.task_number.new_task}</h2>
        <h3>New Task</h3>
      </div>

        <div className="task-list-box-2">
        <h2>{data.task_number.completed}</h2>
        <h3>Complited Task</h3>
      </div>

       <div className="task-list-box-3">
        <h2>{data.task_number.active}</h2>
        <h3>Accepted Task</h3>
      </div>

       <div className="task-list-box-4">
        <h2>{data.task_number.failed}</h2>
        <h3>Failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers