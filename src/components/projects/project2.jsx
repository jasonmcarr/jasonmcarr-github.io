import React from "react";
import { opacityFilter } from "../../utils/functions";
import thermalMotion from "../../assets/images/therm-colored-transformed.png"
import "./project2.css";

function Project2 (){
  opacityFilter();
    return (
      <section className="project2-content">
        <div className="image1">
        <img
          src={thermalMotion}
          alt="thermally-driven motion"
        />
        </div>
      </section>
    );
}

export default Project2;