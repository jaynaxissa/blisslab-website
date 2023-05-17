import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" className="logo">
          <img
            className="logo-pic"
            src="/images/blisslab-logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="social-bottom">
        <Link to="/" className="social-link">
          <span className="social">INSTAGRAM</span>
        </Link>
        <Link to="/" className="social-link">
          <span className="social">TWITTER</span>
        </Link>
        <Link to="/" className="social-link">
          <span className="social">FACEBOOK</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
