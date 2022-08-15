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
          <h1 className="signup-txtheader">Sign Up</h1>
          <p className="signup-cnt-text">Required fields have an asterisk:*</p>
        </div>

        <form action="" className="signup-form">
          <input className="firstboard-input" type="text" value={email} />
          <input
            className="firstboard-input"
            type="text"
            placeholder="Your full name*"
          />
          <input
            className="firstboard-input"
            type="password"
            placeholder="Your password*"
          />
          <div className="thedown">
            <button className="firstboard-button">Sign Up</button>

            <p className="alreadybtn">Already have an account ? <span>Log In</span></p>
          </div>
          
        </form>
      </div>
    </>
  );
}

export default Signup;
