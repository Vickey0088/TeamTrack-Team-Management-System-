import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({handleLogin}) => {
// console.log(handleLogin)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("Email is", email);
    console.log("Password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-outer">
      <div className="login-box">
        <form
          onSubmit={submitHandler}
          className="login-form"
        >
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            type="email"
            placeholder="Enter your Email"
          />
          <br />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            type="password"
            placeholder="Enter your Password"
          />
          <br />
          <button className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;