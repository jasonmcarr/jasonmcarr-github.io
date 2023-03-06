import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { opacityFilter } from "../../utils/functions";
import thermalMotionScatterplot from "../../assets/json_files/thermalmotionscatterplot.json";
import "./project1.css";

function Project1() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updatedLayout = {
    ...thermalMotionScatterplot.layout,
    width: windowWidth < 900 ? windowWidth : 900,
    height:
      windowHeight < 450
        ? windowHeight
        : 450 /* first num is dynamic lower limit, second num is static upper limit*/,
  };

  opacityFilter();
  return (
    <div className="project1-container">
      <div className="section-title">Introduction</div>
      <p>
        {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis quas temporibus aliquid, non cupiditate dicta aliquam veniam
          eveniet harum iusto qui sunt dolorum alias nostrum quo fugiat, sed
          totam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
          adipisci nostrum. Sed unde saepe praesentium corporis blanditiis animi
          consectetur sunt ipsa neque. Optio delectus ipsa officiis. Unde sint
          dolore dignissimos. */}
      </p>
      <div className="scatterplot-container">
        <Plot data={thermalMotionScatterplot.data} layout={updatedLayout} />
      </div>
    </div>
  );
}

export default Project1;
