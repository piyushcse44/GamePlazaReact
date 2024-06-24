import React from 'react'
import "../login/login.css";

const ForgotPassword = () => {
  return (
    <div>
       <div className="login_body">
    <div className="login_background">
      <div className="login_shape" />
      <div className="login_shape" />
    </div>
    <form id ="login_form" style={{height : '400px'}}>
      <h3>Recover Password</h3>
      <label className="login_label" htmlFor="username">Username</label>
      <input className="login_input" type="text" placeholder="Email or Phone" id="username" />
      <button>PROCEED</button>
    </form>
  </div>
    </div>
  )
}

export default ForgotPassword
