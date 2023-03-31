import React from "react";
import { opacityFilter, addHorizontalNavbar } from "../../utils/functions";

function Project1() {
  setTimeout(() => {
    opacityFilter();
  }, 10);
  addHorizontalNavbar();
  return (
    <section className="project5-content">
      Proj content i.e pictures and paragraphs
    </section>
  );
}

export default Project1;
