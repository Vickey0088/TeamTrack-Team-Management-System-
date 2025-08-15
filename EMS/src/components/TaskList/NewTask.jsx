import React from 'react'
import "../styles/TaskList.css";

const NewTask = ({data}) => {
  return (
      <div className="custom-box2">
      <div className="content">
        <h3>{data.cate}</h3>
        <h4>{data.date}</h4>
      </div>
      <h2>{data.title} </h2>
      <p>
        {data.description}
      </p>
      <div className="accept-task-btns">
        <button className="btn-completed">Accept Task</button>
      </div>
    </div>
  )
}

export default NewTask
