import React from "react";
import Header from "../other/Header";
import "../styles/AdminDashboard.css";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="admin-dashboard">
      <Header first_name="Vickey" changeUser={props.changeUser} />
     <CreateTask />
     <AllTask />
    </div>
  );
};

export default AdminDashboard;
