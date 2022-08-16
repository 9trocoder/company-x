import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BusinessSignup.css";

function BusinessSignup() {
  const [password, setPassword] = useState("");
  const [poorPassword, setPoorPassword] = useState(false);
  const [weakPassword, setWeakPassword] = useState(false);
  const [strongPassword, setStrongPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const { state } = useLocation();
  let navigate = useNavigate();
  const { email } = state;

  const handleSubmitVerification = (e) => {
    navigate("/verify-email", { state: { email: email } });
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const passwordStrength = (e) => {
    const passwordValue = e.target.value;
    const passwordLength = passwordValue.length;
    const poorRegExp = /[a-z]/;
    const weakRegExp = /(?=.*?[0-9])/;
    const strongRegExp = /(?=.*?[#?!@$%^&*-])/;
    const whitespaceRegExp = /^$|\s+/;
    const poorPassword = poorRegExp.test(passwordValue);
    const weakPassword = weakRegExp.test(passwordValue);
    const strongPassword = strongRegExp.test(passwordValue);
    const whiteSpace = whitespaceRegExp.test(passwordValue);

    if (passwordValue === "") {
      setPasswordError("Password is required");
    } else {
      if (whiteSpace) {
        setPasswordError("Password cannot contain whitespace");
      }
      if (
        passwordLength <= 3 &&
        (poorPassword || weakPassword || strongPassword)
      ) {
        setPoorPassword(true);
        setPasswordError("Password is poor");
      }
      if (
        passwordLength >= 4 &&
        poorPassword &&
        (weakPassword || strongPassword)
      ) {
        setWeakPassword(true);
        setPasswordError("Password is Weak");
      } else {
        setWeakPassword(false);
      }
      if (
        passwordLength >= 6 &&
        poorPassword &&
        weakPassword &&
        strongPassword
      ) {
        setStrongPassword(true);
        setPasswordError("Password is Strong");
      } else {
        setStrongPassword(false);
      }
    }
  };

  return (
    <>
      <div className="signup-container">
        <div className="gobackbtn" onClick={() => navigate(-1)}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="signup-container-txt">
          <h1 className="signup-txtheader">
            Create your <br /> Organization account
          </h1>
          <p className="signup-cnt-text">
            Before setting up your organization, create your C-X business
            account.
          </p>
        </div>

        <form onSubmit={handleSubmitVerification} action="" className="signup-form">
          <input
            className="firstboard-input"
            type="text"
            required
            placeholder="Your full name"
          />
          <input className="firstboard-input" 
          required placeholder="Your email address" type="text" value={email} />
           <input
            className="firstboard-input"
            type="password"
            onChange={handlePasswordChange}
            value={password}
            onInput={passwordStrength}
            name="password"
            required
            placeholder="Your password"
          />

          <div className="passwordstrengthmeter">
            {poorPassword === true ? (
              <div className="strengthlength stlpoor"></div>
            ) : (
              ""
            )}
            {weakPassword === true ? (
              <div className="strengthlength stlweak"></div>
            ) : (
              ""
            )}
            {strongPassword === true ? (
              <div className="strengthlength stlstrong"></div>
            ) : (
              ""
            )}
          </div>
          <p className="passwordinfo">{passwordError}</p>

          <div className="checkbox">
            <input type="checkbox" required />
            <p>
              I Agree to the User Agreement, and acknowledge the Privacy Policy.
            </p>
          </div>

          <button type="submit" className="firstboard-button">Create account</button>
        </form>
      </div>
    </>
  );
}

export default BusinessSignup;
