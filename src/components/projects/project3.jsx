import { opacityFilter, addHorizontalNavbar } from "../../utils/functions";
import React from "react";
import "./project3.css";
import trackerHome from "../../assets/images/project3/tracker-home.png";
import trackerBar from "../../assets/images/project3/tracker-bar.png";

function Project3() {
  setTimeout(() => {
    opacityFilter();
  }, 10);
  addHorizontalNavbar();

  return (
    <section className="project3-container">
      <div className="grid1">
        <div className="section-title">Introduction</div>
        <p>
          A fully interactive tableau dashboard utilizing active-filtering of
          data parameters (such as date range, country, continent) based on user
          input. The data set used is a study of the impact of the first year of
          COVID-19, with the dashboard specifically highlighting vaccinnation
          rates on a global scale.
        </p>
        <br />
        <div className="section-title">Dashboard Images</div>
        <p>
          Images of the interactive tableau dashboard. The actual dashboard can
          be viewed by clicking the code link in the project description on the
          projects page.
        </p>
        <br />
        <div className="image">
          <img src={trackerHome} alt="covid dashboard home" />
        </div>
        <br />
        <div className="image">
          <img src={trackerBar} alt="covid dashboard barchart" />
        </div>
      </div>
    </section>
  );
}

export default Project3;
