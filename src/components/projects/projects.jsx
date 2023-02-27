import React from "react";
import { NavLink } from "react-router-dom";
import { projects_array } from "../../services/projectsarray";

function Projects() {
  return (
    <div className="nav-aligner">
      <section className="projects-nav">
        {projects_array.map((item) => (
          <NavLink
            key={projects_array.indexOf(item)}
            to={`project${projects_array.indexOf(item) + 1}`}
          >
            <h1 className="project-title">{item.Title}</h1>
            <p className="project-summary">{item.Description}</p>
          </NavLink>
        ))}
      </section>
    </div>
  );
}

export default Projects;
