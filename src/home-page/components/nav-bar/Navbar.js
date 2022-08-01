import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav id="nav-bar">
        <div id="left-nav">
          <span class="nav-item nav-item-one">
            <img src="" alt="" />
            <h2>My Company</h2>
          </span>
        </div>
        <div id="right-nav">
          <span class="nav-item nav-item-two">Menu 1</span>
          <span class="nav-item nav-item-three">Menu 2</span>
          <span class="nav-item nav-item-four">Menu 3</span>
          <span class="nav-item nav-item-four">Login</span>
        </div>
      </nav>
    </>
  );
}
