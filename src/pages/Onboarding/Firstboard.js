import React from "react";
import firstboardchatimg from "../../assets/chat.svg";
import "./Firstboard.css";

function Firstboard() {
  return (
    <>
      <div className="firstboardcnt">
        <div className="firstboard-image">
          <img src={firstboardchatimg} alt="" />
        </div>
        <div className="firstboard-text">
          <h2>Productivity Management👌</h2>
          <h1>
            Lets create <br />
            a space <br /> for your workflows
          </h1>
        </div>
        <div className="firstboard-btn">
            <button>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Firstboard;
