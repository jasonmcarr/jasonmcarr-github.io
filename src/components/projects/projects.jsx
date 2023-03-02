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
            <h1 className="project-title">{item.Title}</h1>
            <p className="project-summary">{item.Description}</p>
            </div>
          </NavLink>
        ))}
      </section>
  );
}

export default Projects;
