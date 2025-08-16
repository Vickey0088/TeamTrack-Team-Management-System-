import React, { useContext, useEffect, useState } from 'react'
import "../styles/AllTask.css";
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  const [employees, setEmployees] = useState(authData.employees || []);

  // Listen for data updates
  useEffect(() => {
    const handleStorageUpdate = () => {
      const data = JSON.parse(localStorage.getItem('employees') || '[]');
      setEmployees(data);
    };

    // Initial load
    handleStorageUpdate();

    // Listen for custom events
    window.addEventListener('localStorageUpdated', handleStorageUpdate);
    
    // Listen for storage changes (in case of multiple tabs)
    window.addEventListener('storage', handleStorageUpdate);

    return () => {
      window.removeEventListener('localStorageUpdated', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, [authData.employees]);

  // Update employees when authData changes
  useEffect(() => {
    setEmployees(authData.employees || []);
  }, [authData.employees]);

  return (
    <div className='all-task-outer'>
      <div className='all-task-inner hello'>
        <h1>Employee Name</h1>
        <h5>New Task</h5>
        <h5>Active Task</h5>
        <h5>Completed</h5>
        <h5>Failed</h5>
        <h5>Categories</h5>
      </div>
   
      <div className='ListName'>
        {employees.map(function(elem, idx) {
          return (
            <div key={idx} className='all-task-inner'>
              <h1>{elem.first_name}</h1>
              <h3>{elem.task_number?.new_task || 0}</h3>
              <h5>{elem.task_number?.active || 0}</h5>
              <h5>{elem.task_number?.completed || 0}</h5>
              <h5>{elem.task_number?.failed || 0}</h5>
              <h5>{Array.isArray(elem.categories) ? elem.categories.join(', ') : 'None'}</h5>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AllTask
