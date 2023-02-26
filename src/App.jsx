import React from "react";
import "./App.css";
import "./components/projects/projects.css";
import "./components/home/home.css";
import "./components/about/about.css";
import "./components/contact/contact.css";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./components/sketch";
import Navbar from "./navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Project1 from "./components/projects/project1";
import Project2 from "./components/projects/project2";
import Project3 from "./components/projects/project3";
import Project4 from "./components/projects/project4";
import Project5 from "./components/projects/project5";
// import NameAnimation from "./components/name-animation/name-animation.js";
// import "./components/name-animation/name-animation.css";

function App() {
  return (
    <>
      <div className="border-square" />
        <div className="animation">
          <div className="animation-overlay" />
          <ReactP5Wrapper className="p5-wrapper" sketch={sketch} />
        </div>
        <div className="square">
          <Navbar />
          <div>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/projects"} element={<Projects />} />
              <Route path={"/about"} element={<About />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path={"/projects/project1"} element={<Project1 />} />
              <Route path={"/projects/project2"} element={<Project2 />} />
              <Route path={"/projects/project3"} element={<Project3 />} />
              <Route path={"/projects/project4"} element={<Project4 />} />
              <Route path={"/projects/project5"} element={<Project5 />} />
            </Routes>
          </div>
        </div>
    </>
  );
}
export default App;
