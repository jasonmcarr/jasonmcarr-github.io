import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="permanent-elements">
        <h1 className="author-title">Jason Carr</h1>
        <h4 className="author-descriptor">Data Analyst & Physicist</h4>
      </nav>
      <nav className={"navbar"}>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="li-contact">
            <NavLink to="/contact" className="nav-link">
              Contact {}
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
