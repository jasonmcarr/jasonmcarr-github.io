import React from "react";
import "./App.css";
import "./components/author-summary/author-summary.css";
// import "./components/name-animation/name-animation.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./navbar.jsx";
import Home from "./components/home";
import Projects from "./components/projects/projects";
import About from "./components/about";
import Contact from "./components/contact"
// import AuthorSummary from "./components/author-summary/author-summary";
// import NameAnimation from "./components/name-animation/name-animation.js";

function App() {
  // NameAnimation();
  return (
    <div className="square">
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/home" component={<Home />} />
            <Route path="/projects" component={<Projects />} />
            <Route path="/about" component={<About />} />
            <Route path="/contact" component={<Contact />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
