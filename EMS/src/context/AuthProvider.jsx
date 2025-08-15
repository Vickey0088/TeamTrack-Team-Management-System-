/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  
  const [userData, setUserData] = useState({ employees: [], admin: [] })
 
useEffect(() => {
  
  if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
    setLocalStorage();
  }
  const data = getLocalStorage();
  setUserData(data);
}, []);

   const refreshData = () => {
    setUserData(getLocalStorage());
  };
   

  return (
      <AuthContext.Provider value={{ ...userData, refreshData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
