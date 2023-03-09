import React from "react";
import { NavLink } from "react-router-dom";
import { projects_array } from "../../services/projectsarray";
import { opacityFilterRemove } from "../../utils/functions";

function Projects() {
  opacityFilterRemove();
  return (
    <section className="projects-nav">
      {projects_array.map((item) => (
        <div
          className="project-nav-internal"
          key={projects_array.indexOf(item)}
        >
          <NavLink
            className="projects-nav-link"
            to={`project${projects_array.indexOf(item) + 1}`}
          >
            <div className="project-links">
              <div className="project-title">{item.Title}</div>
              <div className="project-summary">{item.Description}</div>
            </div>
          </NavLink>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.open(item.Link, "_blank");
            }}
            className="project-linker"
          >
            <i className="fa-brands fa-github github-icon"></i>
            <p>Code</p>
          </button>
        </div>
      ))}
    </section>
  );
}

export default Projects;
