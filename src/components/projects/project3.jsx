import { opacityFilter } from "../../utils/functions";
import React, { useRef, useEffect, useCallback } from "react";
import "./project3.css";

const { tableau } = window;

function Project3() {
  setTimeout(() => {
    opacityFilter();
  }, 10);

  const ref = useRef(null);
  const url =
    "https://public.tableau.com/views/coviddashboard_16748574137170/CovidTrackerDashboard1";

  const vizRef = useRef(null);

  const initViz = useCallback(() => {
    if (vizRef.current) {
      vizRef.current.dispose();
    }
    const options = {
      width: "100%",
      height: "100%",
      hideTabs: true,
      suppressAlerts: true, // add this option to suppress warnings
    };
    vizRef.current = new tableau.Viz(ref.current, url, options);
  }, [url]);

  useEffect(() => {
    initViz();

    return () => {
      if (vizRef.current) {
        vizRef.current.dispose();
      }
    };
  }, [initViz, vizRef]);

  return (
    <body>
      <div className="project3-container">
        <div ref={ref} className="tableau-viz" />
      </div>
    </body>
  );
}

export default Project3;
