import React from "react";
import "./FirstSection.css";
import "./FirstSectionMQ.css";

export default function FirstSection() {
  return (
    <>
      <div id="first-section">
        <section id="first-section-contents">
          <h1>Unsplash</h1>
          <p>The internet's source of freely-usable images.</p>
          <p>Powered by creators everywhere.</p>
          <form action="">
            <input
              type="text"
              placeholder="Search free high-resolution photos"
            />
          </form>
          <span id="trending">
            <p>
              Trending:
              <span> flower</span>, <span>wallpapers</span>,
              <span> backgrounds</span>, <span>happy</span>, <span>love</span>
            </p>
          </span>
        </section>
      </div>
    </>
  );
}
