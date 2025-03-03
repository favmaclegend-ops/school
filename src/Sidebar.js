import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTachometerAlt,
  faStickyNote,
  faBook,
  faHandsHelping,
  faCommentDots,
  faExclamationCircle,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="profile">
          <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
          <span className="profile-name">John Doe</span>
        </div>

        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="fa-icon" />
              <span className="link-text">Main</span>
            </Link>
          </li>
          <li>
            <Link to="/Home1.js">
              <FontAwesomeIcon icon={faTachometerAlt} className="fa-icon" />
              <span className="link-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/note">
              <FontAwesomeIcon icon={faStickyNote} className="fa-icon" />
              <span className="link-text">Note</span>
            </Link>
          </li>
          <li>
            <Link to="/classes">
              <FontAwesomeIcon icon={faBook} className="fa-icon" />
              <span className="link-text">Classes</span>
            </Link>
          </li>
          <li>
            <Link to="/support">
              <FontAwesomeIcon icon={faHandsHelping} className="fa-icon" />
              <span className="link-text">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <FontAwesomeIcon icon={faCommentDots} className="fa-icon" />
              <span className="link-text">Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/issues">
              <FontAwesomeIcon icon={faExclamationCircle} className="fa-icon" />
              <span className="link-text">Having issues</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer">
        <p>©2021 John Doe</p>
      </div>
    </div>
  );
};

export default Sidebar;
