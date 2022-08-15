import React from "react";
import { Link } from "react-router-dom";
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
          <h2 className="firstboard-typo">Productivity Management👌</h2>
          <h1 className="firstboard-header">
            Lets create <br />
            a space <br /> for your workflows
          </h1>
          <div className="firstboard-email">
            <input className="firstboard-input" type="email" placeholder="Your email address" />
          </div>
          <div className="firstboard-btn">
            <button className="firstboard-button">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstboard;
