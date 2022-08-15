import React from "react";
import { useLocation } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const { state } = useLocation();
  const { email } = state;
  return (
    <>
      <div className="signup-container">
        <div className="signup-container-txt">
          <h1>Sign Up</h1>
          <p>Required fields have an asterisk:*</p>
        </div>

        <form action="" className="signup-form">
          <input className="firstboard-input" type="text" value={email} />
          <input className="firstboard-input" type="text" placeholder="Your name*" />
          <input className="firstboard-input" type="text" placeholder="Your password*" />
          <button className="firstboard-button">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
