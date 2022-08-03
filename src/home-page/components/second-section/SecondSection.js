import React from "react";
import "./SecondSection.css";
import "./SecondSectionMQ.css";
import img1 from "./assets/claudio-schwarz.jpg";
import img2 from "./assets/peter-herrmann.jpg";
import img3 from "./assets/bailey-zindel.jpg";

export default function SecondSection() {
  return (
    <>
      <div id="second-section">
        <div>
          <span class="second-section-image">
            <img src={img1} alt="" />
          </span>
          <span class="second-section-text">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>This is some placeholder text.</p>
          </span>
        </div>
        <div>
          <span class="second-section-image">
            <img src={img2} alt="" />
          </span>
          <span class="second-section-text">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>This is some placeholder text.</p>
          </span>
        </div>
        <div>
          <span class="second-section-image">
            <img src={img3} alt="" />
          </span>
          <span class="second-section-text">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p>This is some placeholder text.</p>
          </span>
        </div>
      </div>
    </>
  );
}
