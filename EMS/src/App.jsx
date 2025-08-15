import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

 
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)

    console.log(userData)
    }
  });

  

  const handleLogin = (email, password) => {
  // Admin check
  if (
    authData &&
    authData.admin &&
    Array.isArray(authData.admin) &&
    authData.admin.find(
      (a) => a.email === email && a.password === password
    )
  ) {
    setUser('admin');
    localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }));
  }
  // Employee check
  else if (authData && authData.employees) {
    const employee = authData.employees.find(
      (e) => email === e.email && e.password === password
    );

      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', ...employee })
        );
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  );
};

export default App;