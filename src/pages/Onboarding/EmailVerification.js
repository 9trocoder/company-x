import React from "react";
import { useLocation } from "react-router-dom";
import "./EmailVerification.css";

function EmailVerification() {
  const { state } = useLocation();
  const { email } = state;
  return (
    <>
      <div className="verifyemailbody">
        <h1 className="firstboard-header">Let's go</h1>
        <p>We just emailed you at {email}, Kindly verify your email address</p>
        <button className="firstboard-button">Resend Email Verification</button>
      </div>
    </>
  );
}

export default EmailVerification;
