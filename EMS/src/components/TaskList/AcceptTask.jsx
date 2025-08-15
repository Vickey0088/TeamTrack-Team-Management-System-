import React from "react";
import "../styles/TaskList.css";

const AcceptTask = ({data}) => {
 
  return (
    <div className="custom-box1">
      <div className="content">
        <h3>{data.category}</h3>
        <h4>{data.date}</h4>
      </div>
      <h2>{data.title} </h2>
      <p>
        {data.description}
      </p>

      <div className="accept-task-btns">
        <button className="btn-completed">Mark as Completed</button>
        <button className="btn-failed">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
