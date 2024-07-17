import React, { useState } from "react";
import "./style.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="logo">
      <img src="./images/logo.jpg" alt="" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`} data-testid="nav-items"> 
        <a href="#about-section">About</a>
        <a href="#my-skills">Skills </a>
        <a href="#my-projects">Projects</a>
        <a href="#footer-container">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="nav-toggle"
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;