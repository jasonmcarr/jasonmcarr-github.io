import React from "react";
import { opacityFilterRemove, removeHorizontalNavbar } from "../../utils/functions";

function About () {
  opacityFilterRemove();
  removeHorizontalNavbar();
    return (
      <div className="about-content">
        About stuffy bois placeholder
      </div>
    );
  }

export default About;