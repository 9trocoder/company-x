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
          <form action="" onSubmit={handleClick}>
            <div className="firstboard-email">
              <input
                className="firstboard-input"
                required
                type="email"
                onChange={handleChange}
                placeholder="Your email address"
              />
            </div>
            <div className="firstboard-btn">
              <button type="submit" className="firstboard-button">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Firstboard;
