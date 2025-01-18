import React from "react";
import { opacityFilterRemove, removeHorizontalNavbar } from "../../utils/functions";

function Home() {
  opacityFilterRemove();
  removeHorizontalNavbar();
  return (
    <section className="home-container">
      <div className="author-summary">
        Welcome to my portfolio!
        <br />
        I’m an engineer and researcher specializing in optoelectronics, materials science, and data analysis, 
        and I’m currently pursuing my Master’s degree in Electrical Engineering. My passion lies in exploring how advanced materials and innovative device design can drive technological breakthroughs. 
        Here, you’ll find a small showcase of my academic and professional projects—each one reflecting my desire to learn new ways of doing new things. 
        Thank you for visiting, and I invite you to explore my work and connect as I continue on this exciting journey.
      </div>
    </section>
  );
}

export default Home;
