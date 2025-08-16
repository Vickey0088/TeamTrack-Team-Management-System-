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

  // Listen for storage changes
  useEffect(() => {
    const handleStorageChange = () => {
      const data = getLocalStorage();
      setUserData(data);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageUpdated', handleStorageChange);
    };
  }, []);

  const refreshData = () => {
    const data = getLocalStorage();
    setUserData(data);
  };

  return (
    <AuthContext.Provider value={{ ...userData, refreshData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
