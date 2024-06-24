import React from 'react';
import "../login/login.css";
import { IoLogoGoogle } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";

const Register = () => {
  return (
    <div className="login_body">
    <div className="login_background">
      <div className="login_shape" />
      <div className="login_shape" />
    </div>
    <form id ="login_form">
      <h3>Login Here</h3>
      <label className="login_label" htmlFor="username">Username</label>
      <input className="login_input" type="text" placeholder="Email or Phone" id="username" />
      <label className="login_label" htmlFor="password">Password</label>
      <input className="login_input" type="password" placeholder="Password" id="password" />
      <button>Log In</button>
      <div className="social">
        <div className="go">
        <IoLogoGoogle /> Google
        </div>
        <div className="fb">
        <ImFacebook2 /> Facebook
        </div>
      </div>
    </form>
  </div>
  )
}

export default Register
