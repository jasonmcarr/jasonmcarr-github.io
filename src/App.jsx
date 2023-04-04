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
import Project2 from "./components/projects/opticalTrapping";
import Project4 from "./components/projects/magGravTrapping";
import Project3 from "./components/projects/pandemicTracker";
import Project1 from "./components/projects/expediaScraper";
import Project5 from "./components/projects/fluorescenceSpectrum";

function App() {
  return (
    <>
      <div className="intro-splash">
        <h1 className="auth-name">Jason Carr&nbsp;</h1>
        <h1 className="auth-folio">Portfolio</h1>
      </div>
      <div className="App">
        <div className="border-square" />
        <div className="animation">
          <div className="animation-overlay" />
          <ReactP5Wrapper className="p5-wrapper" sketch={sketch} />
        </div>
        <div className="square">
          <Navbar />
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
