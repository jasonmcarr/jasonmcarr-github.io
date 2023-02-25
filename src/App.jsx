import React from "react";
import "./App.css";
import Navbar from "./navbar.jsx";
// import ParticleSketch from "./components/bganimation.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

// import NameAnimation from "./components/name-animation/name-animation.js";
// import "./components/name-animation/name-animation.css";

function App () {
    return (
      <div className="square">
        {/* <ParticleSketch /> */}
        <Navbar />
        <div>
          <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/projects"} element={<Projects />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/contact"} element={<Contact />} />
          </Routes>
        </div>
      </div>
    );
}
export default App;
