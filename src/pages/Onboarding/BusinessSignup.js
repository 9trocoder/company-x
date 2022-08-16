import React from "react";
import { useLocation } from "react-router-dom";

function BusinessSignup() {
  const { state } = useLocation();
  const { email } = state;
  return (
    <>
      <div className="signup-container">
        <div className="signup-container-txt">
          <h1 className="signup-txtheader">Create your <br /> Organization account</h1>
          <p className="signup-cnt-text">
            Before setting up your organization, create your C-X business
            account.
          </p>
        </div>

        <form action="" className="signup-form">
          <input
            className="firstboard-input"
            type="text"
            placeholder="Your full name*"
          />
          <input className="firstboard-input" type="text" value={email} />
          <input
            className="firstboard-input"
            type="password"
            placeholder="Your password*"
          />

          <div className="checkbox">
            <input type="checkbox" />
            <p>
              I Agree to the User Agreement, and acknowledge the Privacy Policy.
            </p>
          </div>

          <button className="firstboard-button">Create account</button>
          <p className="alreadybtn">
            Not looking for an Organizational account?{" "}
            <span>Sign up for a personal account </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default BusinessSignup;
