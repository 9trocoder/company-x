import React from "react";
import CardDeck from "../../components/CardDeck/CardDeck";
import TaskCard from "../../components/TaskCard/TaskCard";

import "./Homepage.css";
let proifilepic =
  "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80";

const arrowright = (
  <svg
    width="25"
    height="25"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
  </svg>
);

function Homepage() {
  return (
    <div className="homepagebody">
      <nav className="homepage-nav">
        <div className="homepage-nav-logo">
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.5C2 4.22386 2.22386 4 2.5 4H12.5C12.7761 4 13 4.22386 13 4.5C13 4.77614 12.7761 5 12.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H7.5C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H10.5C10.7761 10 11 10.2239 11 10.5C11 10.7761 10.7761 11 10.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="homepage-nav-links">
          <div className="hompage-nav-chat">
            <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="homechatntf">
              <p>4</p>
            </div>
          </div>
          <div className="homepage-profile">
            <img src={proifilepic} alt="" />
          </div>
        </div>
      </nav>
      <div className="homepagecnt">
        <h1 className="homepagewelcometxt">
          Hello <br />
          Oladimeji Adeyemi 👋
        </h1>
        <div className="homepageheader">
          <div className="homepageheader-buttons">
            <button className="overviewbtn">Overview</button>
            <button className="productivitybtn">Productivity</button>
          </div>
          <div className="filterbutton">
            <svg
              width="25"
              height="25"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        {/* <CardDeck /> */}
        <TaskCard />
        <div className="tasklista">
          <div className="tasklista-item">
            <div className="tasklista-item-left">
              <div className="tasklista-itemimage"></div>
              <p className="tasklista-itemcate">Total Task</p>
            </div>
            <div className="tasklista-item-right">
              <div className="tasklista-item-right-number">16</div>
              <div className="tasklista-item-right-arrow">{arrowright}</div>
            </div>
          </div> 
          <div className="tasklista-item">
            <div className="tasklista-item-left">
              <div className="tasklista-itemimage"></div>
              <p className="tasklista-itemcate">In Progress</p>
            </div>
            <div className="tasklista-item-right">
              <div className="tasklista-item-right-number">20</div>
              <div className="tasklista-item-right-arrow">{arrowright}</div>
            </div>
          </div>
          <div className="tasklista-item">
            <div className="tasklista-item-left">
              <div className="tasklista-itemimage"></div>
              <p className="tasklista-itemcate">Completed</p>
            </div>
            <div className="tasklista-item-right">
              <div className="tasklista-item-right-number">32</div>
              <div className="tasklista-item-right-arrow">{arrowright}</div>
            </div>
          </div>
          <div className="tasklista-item">
            <div className="tasklista-item-left">
              <div className="tasklista-itemimage"></div>
              <p className="tasklista-itemcate">Total Projects</p>
            </div>
            <div className="tasklista-item-right">
              <div className="tasklista-item-right-number">8</div>
              <div className="tasklista-item-right-arrow">{arrowright}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomnav"></div>
    </div>
  );
}

export default Homepage;
