import React from "react";
import "../MainComponents/Login.css";
import LoginImg from "../assets/login.png";
function Login() {
  return (
    <div className="Login-wrapper">
      <div className="Login-container">
        <div className="Login-header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>

        <div className="Login-inputs">

          <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder="Username" />
          </div>

          <div className="input">
            <img src="" alt="" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input">
            <img src="" alt="" />
            <input type="password" placeholder="password" />
          </div>

          <div className="frogot-psw">
            Lost password? <span>Click here!</span>
          </div>
          <div className="submit-container">
            <div className="submit">Login</div>
            <div className="submit">SingUp</div>

          </div>
        </div>
      </div>

      <div className="Login-Img">
        <img src={LoginImg} alt="" />
      </div>
    </div>
  );
}
export default Login;

