import React from "react";
import "./SecondSection.css";
import "./SecondSectionMQ.css";
import img1 from "./assets/claudio-schwarz.jpg";
import img2 from "./assets/peter-herrmann.jpg";
import img3 from "./assets/bailey-zindel.jpg";
import img4 from "./assets/jonathan-cooper.jpg";
import img5 from "./assets/klara-kulikova.jpg";
import img7 from "./assets/dillon-wanner.jpg";

export default function SecondSection() {
  return (
    <>
      <div id="second-section">
        <section>
          <div>
            <span class="second-section-image">
              <img src={img1} alt="" />
            </span>
            <span class="second-section-text">
              <h3>
                Uploaded by <span class="uploaded-by">Claudio Schwarz</span>
              </h3>
              <p>
                Click <span class="bold">here</span> to download
              </p>
            </span>
          </div>
          <div>
            <span class="second-section-image">
              <img src={img2} alt="" />
            </span>
            <span class="second-section-text">
              <h3>
                Uploaded by
                <span class="uploaded-by"> Peter Herrmann</span>
              </h3>
              <p>
                Click <span class="bold">here</span> to download
              </p>
            </span>
          </div>
          <div>
            <span class="second-section-image">
              <img src={img3} alt="" />
            </span>
            <span class="second-section-text">
              <h3>
                Uploaded by
                <span class="uploaded-by"> Bailey Zindel</span>
              </h3>
              <p>
                Click <span class="bold">here</span> to download
              </p>
            </span>
          </div>
        </section>
        <section>
          <div>
            <span class="second-section-image">
              <img src={img4} alt="" />
            </span>
            <span class="second-section-text">
              <h3>
                Uploaded by <span class="uploaded-by">Jonathan Cooper</span>
              </h3>
              <p>
                Click <span class="bold">here</span> to download
              </p>
            </span>
          </div>
          <div>
            <span class="second-section-image">
              <img src={img7} alt="" />
            </span>
            <span class="second-section-text">
              <h3>
                Uploaded by <span class="uploaded-by">Dillon Wanner</span>
              </h3>
              <p>
                Click <span class="bold">here</span> to download
              </p>
            </span>
          </div>
          <div>
            <span class="second-section-image">
              <img src={img5} alt="" />
            </span>
            <span class="second-section-text">
              <h3>
                Uploaded by <span class="uploaded-by">Klara Kulikova</span>
              </h3>
              <p>
                Click <span class="bold">here</span> to download
              </p>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
