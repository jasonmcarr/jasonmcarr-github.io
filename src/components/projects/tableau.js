import React, { useEffect, useRef } from "react";
import tableau from "tableau-api"; // eslint-disable-line no-unused-vars
document.cookie = "cookie1=_gcl_au; SameSite=None; Secure";
document.cookie = "cookie2=_ga; SameSite=None; Secure";
document.cookie = "cookie3=_gid; SameSite=None; Secure";


export function Tableau() {
  const vizContainer = useRef(null);

  useEffect(() => {
    const vizUrl =
      "https://public.tableau.com/views/coviddashboard_16748574137170/CovidTrackerDashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
    const options = {
      width: vizContainer.current.offsetWidth,
      height: vizContainer.current.offsetHeight,
    };
    let viz = new window.tableau.Viz(vizContainer.current, vizUrl, options);

    return () => {
      viz.dispose();
    };
  }, []);

  return <div className="vizDiv" ref={vizContainer}></div>;
}

