import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <><nav className="permanent-elements">
      <div>
        <h1 className="author-title">Jason Carr</h1>
        <h4 className="author-descriptor">Data Analyst & Physicist</h4>
      </div>
    </nav>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="src\components\projects.jsx">Projects</Link>
          </li>
          <li>
            <Link to="src\components\about.jsx">About</Link>
          </li>
          <li>
            <Link to="src\components\contact.jsx">Contact</Link>
          </li>
        </ul>
      </nav></>
  );
}

export default Navbar;
