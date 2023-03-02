// import React, { Component } from "react";
// import tableau from "tableau-api";


// const { tableau } = window;


// class Visualization extends Component {
//   componentDidMount() {
//     this.initTableau();
//   }

//   initTableau() {
//     const vizUrl = "url";
//     const vizContainer = this.vizContainer;
//     let viz = new tableau.Viz(vizContainer, vizUrl);
//   }

//   render() {
//     return (
//       <div
//         ref={(div) => {
//           this.vizContainer = div;
//         }}
//       ></div>
//     );
//   }
// }

// export default Visualization;






// import React, { useRef, useEffect } from "react";

// const { tableau } = window;

// function TableauEmbed() {
//   const ref = useRef(null);
//   const url =
//     "https://public.tableau.com/views/coviddashboard_16748574137170/CovidTrackerDashboard1";

//   function initViz() {
//     new tableau.Viz(ref.current, url);
//   }

//   useEffect(() => {
//     initViz();
//   },[])

//   return (
//     <div>
//       <p>Coronavirus Tableau Dashboard</p>;<div>ref={ref}</div>
//     </div>
//   );
// }

// export default TableauEmbed;
