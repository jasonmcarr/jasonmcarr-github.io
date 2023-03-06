import React from "react";
import { NavLink } from "react-router-dom";
import { projects_array } from "../../services/projectsarray";
import { opacityFilterRemove } from "../../utils/functions";

function Projects() {
  opacityFilterRemove();
  return (
      <section className="projects-nav">
        {projects_array.map((item) => (
          <NavLink
            key={projects_array.indexOf(item)}
            to={`project${projects_array.indexOf(item) + 1}`}
          >
            <div className="project-links">
            <div className="project-title">{item.Title}</div>
            <div className="project-summary">{item.Description}</div>
            </div>
          </NavLink>
        ))}
      </section>
  );
}

export default Projects;
