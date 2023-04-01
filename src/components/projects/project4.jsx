import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Plot from "react-plotly.js";
import { opacityFilter, addHorizontalNavbar } from "../../utils/functions";
import avgPriceByAirline from "../../assets/json_files/avgpricebyairline.json";
import avgPriceByAirlineByTime from "../../assets/json_files/avgpricebyairlinebytime.json";
import avgPriceByAirlineByDay from "../../assets/json_files/avgpricebyairlinebyday.json";
import "./project4.css";

function Project4() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [initialWidth, setInitialWidth] = useState(0);
  const grid1Ref = useRef(null);
  const grid2Ref = useRef(null);
  const minGraphWidth = 410; // Minimum width
  const minGraphHeight = 400; // Minimum height

  useLayoutEffect(() => {
    setInitialWidth(grid1Ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updatedLayout = {
    ...avgPriceByAirline.layout,
    width: Math.max(
      grid1Ref.current
        ? grid1Ref.current.offsetWidth
        : initialWidth || windowWidth * 0.8,
      minGraphWidth
    ),
    height: Math.max(
      grid1Ref.current ? grid1Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minGraphHeight
    ),
  };

  const updatedLineLayout = {
    ...avgPriceByAirlineByDay.layout,
    width: Math.max(
      grid2Ref.current
        ? grid2Ref.current.offsetWidth
        : initialWidth || windowWidth * 0.8,
      minGraphWidth
    ),
    height: Math.max(
      grid2Ref.current ? grid2Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minGraphHeight
    ),
  };

  const updatedScatterLayout = {
    ...avgPriceByAirlineByTime.layout,
    width: Math.max(
      grid2Ref.current
        ? grid2Ref.current.offsetWidth
        : initialWidth || windowWidth * 0.8,
      minGraphWidth
    ),
    height: Math.max(
      grid2Ref.current ? grid2Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minGraphHeight
    ),
  };

  addHorizontalNavbar();

  setTimeout(() => {
    opacityFilter();
  }, 10);
  return (
    <section className="project4-container">
      <div className="grid1" ref={grid1Ref}>
        <div className="price-table-container">
          <Plot data={avgPriceByAirline.data} layout={updatedLayout} />
        </div>
        <div className="line-chart-container">
          <Plot data={avgPriceByAirlineByDay.data} layout={updatedLineLayout} />
        </div>
        <div className="scatterplot-container">
          <Plot data={avgPriceByAirlineByTime.data} layout={updatedScatterLayout} />
        </div>
      </div>
    </section>
  );
}

export default Project4;
