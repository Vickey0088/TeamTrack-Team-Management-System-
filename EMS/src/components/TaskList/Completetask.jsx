import React from "react";

const Completetask = ({data}) => {
  return (
  <div className="custom-box3">
        <div className="content">
          <h3>{data.category}</h3>
          <h4>{data.date}</h4>
        </div>
        <h2>{data.title} </h2>
        <p>
         {data.description}
        </p>
        <div className="accept-task-btns">
        <button className="btn-completed">Completed</button>
      </div>
      </div>
  );
};

export default Completetask;
