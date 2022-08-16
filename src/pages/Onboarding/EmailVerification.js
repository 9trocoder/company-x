import React from "react";
import { useLocation } from "react-router-dom";

function EmailVerification() {
  const { state } = useLocation();
  const { email } = state;
  return (
    <>
      <div className="verifyemailbody">
        <h1>Let's go</h1>
        <p>We just emailed you @ {email}, Kindly verify your email address</p>
        <button className="firstboard-button">Resend Email Verification</button>
      </div>
    </>
  );
}

export default EmailVerification;
