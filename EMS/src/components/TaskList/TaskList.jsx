import React from "react";
import "../styles/TaskList.css";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import Completetask from "./Completetask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  
  return (
    <div id="tasklist" className="task-list-container">

    {data.tasks.map((elem, idx)=>{

     if(elem.active){
      return <AcceptTask  key={idx} data={elem}/>
     }

     if(elem.new_task){
      return <NewTask key={idx} data={elem}/>
     }

     if(elem.completed){
      return <Completetask key={idx} data={elem}/>
     }

     if(elem.failed){
      return <FailedTask key={idx} data={elem}/>
     }

    })}


      {/* <AcceptTask />
      <NewTask />
      <Completetask />
      <FailedTask /> */}
    </div>
  );
};

export default TaskList;
