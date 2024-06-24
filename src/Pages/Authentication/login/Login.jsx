import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import bgImage from "../../../assets/images/bg-image-login.avif";

const Login = () => {
  return (
    <div className="login_body" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="login_background">
        <div className="login_shape" />
        <div className="login_shape" />
      </div>
      <form id="login_form" >
        <h3>Login Here</h3>
        <label className="login_label" htmlFor="username">
          Username
        </label>
        <input
          className="login_input"
          type="text"
          placeholder="Email or Phone"
          id="username"
        />
        <label className="login_label" htmlFor="password">
          Password
        </label>
        <input
          className="login_input"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button>Log In</button>
        <div className="loginLabel" style={{ display:"flex", justifyContent: "space-around"  }}>
          <Link to="/" className="login_label" 
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.color = "#e75e8d")}
          onMouseLeave={(e) => (e.target.style.color = "#FFF")}
          >
            forgot password?
          </Link>
          <Link to="/" className="login_label" 
          style={{ textDecoration: "none" }}
          onMouseEnter={(e) => (e.target.style.color = "blue")}
          onMouseLeave={(e) => (e.target.style.color = "#FFF")}
          >
            New User?
          </Link>
        </div>
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
  );
};

export default Login;
