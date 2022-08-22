import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = React.useState("");
  let navigate = useNavigate();
  const handleSignupClick = (e) => {
    navigate("/signup", { state: { email: email } });
  };
  const handleLogin = (e) => {
    navigate("/home");
  };
  return (
    <>
      <div className="signup-container">
        <div className="gobackbtn" onClick={() => navigate(-1)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="signup-container-txt">
          <h1 className="signup-txtheader">Log In</h1>
          <p className="signup-cnt-text">Fill in your credentials to log in</p>
        </div>

        <form action="" onSubmit={handleLogin} className="signup-form">
          <input
            className="firstboard-input"
            type="text"
            required
            placeholder="Your email address*"
          />
          <input
            className="firstboard-input"
            type="password"
            required
            placeholder="Your password*"
          />

          <Link to="/recovery-password" className="forgotpassword">
            Forgot password ?
          </Link>

          <button type="submit" className="firstboard-button">
            Log In
          </button>
          <p className="alreadybtn" onClick={() => handleSignupClick()}>
            Don't have an account? <span>Sign up </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
