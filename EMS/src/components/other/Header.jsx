import React from "react";
import "../styles/Header.css"; 

const Header = (props) => {

  const logOutUser = ()=>{
     localStorage.setItem('loggedInUser','')
     props.changeUser('');
    //  window.location.reload()
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="hh text-2xl">
        Hello <br /> <span className="text-3xl">{props.first_name} 👋</span>
      </h1>
      <button onClick= {logOutUser} className="btn"> Log Out</button>
    </div>
  );
};

export default Header;
