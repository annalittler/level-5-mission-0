import React from "react";
import "./Navbar.css";
import "./NavbarMQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "./assets/logo.jpeg";
export default function Navbar() {
  const [showAltNav, setShowAltNav] = useState(false);
  const [showXMark, setShowXMark] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

  const handleAltNav = () => {
    setShowAltNav(!showAltNav);
    setShowHamburger(!showHamburger);
    setShowXMark(!showXMark);
  };

  return (
    <>
      <nav id="nav-bar">
        <div id="left-nav">
          <span class="nav-item" id="nav-logo-span">
            <img src={logo} alt="" id="nav-logo" />
          </span>
        </div>
        <div id="right-nav">
          <span class="nav-item">Explore</span>
          <span class="nav-item">Blog</span>
          <span class="nav-item">Login / Sign Up</span>
          <span class="nav-item nav-item-photo">Submit a photo</span>
        </div>
        <div id="alt-nav-icons">
          {showHamburger === true && (
            <span id="hamburger">
              <FontAwesomeIcon
                icon={faBars}
                className="nav-icon"
                onClick={handleAltNav}
              />
            </span>
          )}
          {showXMark === true && (
            <span id="x-mark">
              <FontAwesomeIcon
                icon={faXmark}
                className="nav-icon"
                onClick={handleAltNav}
              />
            </span>
          )}
        </div>
      </nav>
      {showAltNav === true && (
        <section id="alt-nav-item-container">
          <span class="alt-nav-item">Explore</span>
          <span class="alt-nav-item">Blog</span>
          <span class="alt-nav-item">Login</span>
          <span class="alt-nav-item">Sign up</span>
        </section>
      )}
    </>
  );
}
