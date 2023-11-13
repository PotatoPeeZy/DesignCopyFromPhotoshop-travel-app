import React from "react";
import "./FirstPage.css";
function FirstPage() {
  return (
    <div className="firstPage">
      <img
        className="firstPage-bg"
        src={process.env.PUBLIC_URL + "FirstPage/Background.png"}
        alt="fp BG"
      ></img>
      <div className="fp-container">
        <div className="fp-hike">
          IT'STIME <br />
          FOR HIKING
        </div>
        <div class="fp-subtitle">LOREMIPSUM DOLOR</div>
        <div class="fp-button">Read More</div>
        <div class="fp-bodytext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do iusmod
          tempor incididunt ut labore et dolore magna.
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
