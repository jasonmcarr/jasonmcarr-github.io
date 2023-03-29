import React from "react";
import { opacityFilter } from "../../utils/functions";
import "./project2.css";
import axialDis from "../../assets/images/project2/axial_dis.png";
import axialFFT from "../../assets/images/project2/Axial_FFT.png";
import jpdatmos from "../../assets/images/project2/jpdatmos.png";
import jpdhighvac from "../../assets/images/project2/jpdhighvac.png";
import jpdroughvac from "../../assets/images/project2/jpdroughvac.png";
import q_avg from "../../assets/images/project2/q_avg.png";
import q_ax from "../../assets/images/project2/q_ax.png";
import q_v from "../../assets/images/project2/q_v.png";
import residuals from "../../assets/images/project2/residuals.png";
import trajectories from "../../assets/images/project2/Trajectories.png";
import trapDiagram from "../../assets/images/project2/trap_diagram.png";
import verticalDis from "../../assets/images/project2/vertical_dis.png";
import verticalFFT from "../../assets/images/project2/Vertical_FFT.png";
import boltzmannDist from "../../assets/images/project2/boltzmannDist.png";

function Project2 (){
  opacityFilter();
    return (
      <section className="project2-container">
        <div className="grid1">
          <div className="image">
            <img src={trajectories} alt="trajectories" />
          </div>
          <div className="image">
            <img src={axialFFT} alt="axial fft" />
          </div>
          <div className="image">
            <img src={verticalFFT} alt="vertical fft" />
          </div>
          <div className="image">
            <img src={axialDis} alt="axial displacement" />
          </div>
          <div className="image">
            <img src={verticalDis} alt="vertical displacement" />
          </div>
        </div>
        <div className="grid2">
          <div className="image">
            <img src={jpdatmos} alt="jpd atmos" />
          </div>
          <div className="image">
            <img src={jpdroughvac} alt="jpd rough vac" />
          </div>
          <div className="image">
            <img src={jpdhighvac} alt="jpd high vac" />
          </div>
          <div className="image">
            <img src={boltzmannDist} alt="boltzmann distribution" />
          </div>
        </div>
        <div className="grid3">
          <div className="image">
            <img src={residuals} alt="residuals" />
          </div>
          <div className="image">
            <img src={q_ax} alt="quality axial" />
          </div>
          <div className="image">
            <img src={q_v} alt="quality vertical" />
          </div>
          <div className="image">
            <img src={q_avg} alt="quality average" />
          </div>
          {/* <div className="image">
            <img src={trapDiagram} alt="trap diagram" />
          </div> */}
        </div>
      </section>
    );
}

export default Project2;