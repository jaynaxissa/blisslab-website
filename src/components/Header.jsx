import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="category-title">
          <span>
            <strong>HOME</strong>
          </span>
        </div>
        <div className="category-title">
          <span>HOW IT WORKS</span>
        </div>
        <div className="category-title">
          <span>BLOG</span>
        </div>
        <div className="category-title">
          <span>CONTACTS</span>
        </div>
      </div>
      <div className="header-right">
        <button className="try-button">TRY FREE</button>
        <button className="buy-button">BUY</button>
      </div>
    </div>
  );
};

export default Header;
