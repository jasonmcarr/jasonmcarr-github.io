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
  const minTableWidth = 200; // Minimum width
  const minTableHeight = 91; // Minimum height

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
      minTableWidth
    ),
    height: Math.max(
      grid1Ref.current ? grid1Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minTableHeight
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
        <div className="section-title">Introduction</div>
        <p>
          Utilizing the BeautifulSoup and Selenium Python libraries, the Expedia
          flight page was scraped and compiled into csv format for Python
          analysis and presentation using the Pandas and Plotly. The metrics
          that were collected included airline, pricing, departure time, and
          departure date for the five "best" flights, according to Expedia's
          selection algorithms.
        </p>
        <br />
        <div className="section-title">Average Flight Prices</div>
        <div className="price-table-container">
          <Plot data={avgPriceByAirline.data} layout={updatedLayout} />
        </div>
        <br />
        <p>
          United Airlines generally had the cheapest available flights for the
          chosen route only getting beaten by Delta on February 23. As the
          booking date approached the end of the departure term, the prices of
          all flights increased substantially. Delta was the most
          highly-represented airline within the departure term, responsible for
          43% of all flights. This was followed closely by United with 40%
          representation. Delta also had the most variety in departure times.
        </p>
      </div>
      <div className="grid2-4" ref={grid2Ref}>
        <div className="section-title">Average Flight Prices by Day</div>
        <div className="line-chart-container">
          <Plot data={avgPriceByAirlineByDay.data} layout={updatedLineLayout} />
        </div>
        <br />
        <br />
        <div className="section-title">Average Flight Prices by Time</div>
        <div className="scatterplot-container">
          <Plot
            data={avgPriceByAirlineByTime.data}
            layout={updatedScatterLayout}
          />
        </div>
      </div>
    </section>
  );
}

export default Project4;
