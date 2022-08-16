import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Firstboard.css";

function Firstboard() {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    navigate("/signup", { state: { email: email } });
  };

  const handleLoginClick = (e) => { 
    navigate("/login");
  }
  return (
    <>
      <div className="firstboardcnt">
        {/* <div className="firstboard-image">
          <img src={firstboardchatimg} alt="" />
        </div> */}
        <div className="firstboard-text">
          <h2 className="firstboard-typo">Productivity Management👌</h2>
          <h1 className="firstboard-header">
            Lets create <br />
            a space <br /> for your workflows
          </h1>
          <form className="firstform" action="" onSubmit={handleClick}>
            <div className="firstboard-email">
              <input
                className="firstboard-input"
                required
                type="email"
                onChange={handleChange}
                placeholder="Your email address"
              />
            </div>
              <button type="submit" className="firstboard-button">
                Get Started
              </button>
          </form>
          <p className="alreadybtn" onClick={() => handleLoginClick()}>
            Already have an account ? <span>Log In</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Firstboard;
