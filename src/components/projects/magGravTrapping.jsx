import React from "react";
import { opacityFilter, addHorizontalNavbar } from "../../utils/functions";
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

function Project2() {
  setTimeout(() => {
    opacityFilter();
  }, 10);

  addHorizontalNavbar();
  return (
    <section className="project2-container">
      <div className="grid1">
        <div className="section-title">Introduction</div>
        <p>
          Magneto-gravitational trapping of diamagnetic materials involves
          levitation of the particle in a magnetic quadrupole. This quadrupole
          is required to exhibit a magnetic field of magnitude 18T. According to
          Earnshaw's Theorem, no combination of classical 1/r^2 forces can
          result in a stable equilibrium. This means that no array of static
          magnetic fields alone can levitate a particle - however, through the
          use of an additional gravitational force the particle can be levitated
          indefinitely. This creates an equipotential parabola in which the
          particle exhibits harmonic motion, the specifics of which depend on
          particle-particle interactions via atmospheric levels.
          <br />
          <br />
        </p>
        <div className="section-title">Magnetic Quadrupole</div>
        <div className="image">
          <img src={trapDiagram} alt="trap diagram" />
        </div>
        <br />
        <p>
          The motion of the particle in the equipotential parabola that exists
          axially within the quadrupole is caused by both the Brownian (thermal)
          and gravitational energies. If the particle were placed directly at
          the bottom of the parabola in pure vacuum and cooled to 0K, it would
          be stationary. Brownian motion can be quantified by the diffusion
          constant which arises from the joint-probability distribution.
        </p>
        <br />
        <div className="section-title">Particle Trajectories</div>
        <div className="image">
          <img src={trajectories} alt="trajectories" />
        </div>
        <br />
        <p>Particle trajectories in different levels of vacuum.</p>
        <br />
        <div className="section-title">Axial Fast-Fourier Transforms</div>
        <div className="image">
          <img src={axialFFT} alt="axial fft" />
        </div>
        <br />
        <p>
          FFTs of axial position data to calculate axial oscillation
          frequencies.
        </p>
        <br />
        <div className="section-title">Vertical Fast-Fourier Transforms</div>
        <div className="image">
          <img src={verticalFFT} alt="vertical fft" />
        </div>
        <br />
        <p>
          FFTs of vertical position data to calculate vertical oscillation
          frequencies.
        </p>
        <br />
        <div className="section-title">
          Axial Displacement Due to Thermal Motion
        </div>
        <div className="image">
          <img src={axialDis} alt="axial displacement" />
        </div>
        <br />
        <p>Absolute value of axial displacement and logarithmic count.</p>
        <br />
        <div className="section-title">
          Vertical Displacement Due to Thermal Motion
        </div>
        <div className="image">
          <img src={verticalDis} alt="vertical displacement" />
        </div>
        <br />
        <p>Absolute value of vertical displacement and logarithmic count.</p>
        <br />
      </div>
      <div className="grid2">
        <div className="section-title">
          Joint Probability Distribution for Atmospheric Pressure
        </div>
        <div className="image">
          <img src={jpdatmos} alt="jpd atmos" />
        </div>
        <br />
        <div className="section-title">
          Joint Probability Distribution for Rough Vacuum
        </div>
        <div className="image">
          <img src={jpdroughvac} alt="jpd rough vac" />
        </div>
        <br />
        <div className="section-title">
          Joint Probability Distribution for High Vacuum
        </div>
        <div className="image">
          <img src={jpdhighvac} alt="jpd high vac" />
        </div>
        <br />
        <p>
          Qualitatively, the particle diffusion coefficient is proportional to
          pressure: as the pressure decreased, the major and minor axes of the
          ellipse compress, resulting in a smaller diffusion constant. This is
          because the joint probability distribution is dependent upon the
          displacement-squared, which gets larger as pressure decreases because
          there exists less atmosphere to prevent particle movement. Since this
          displacement term is in a decreasing exponential, it will lower the
          value of the probability distribution as it increases. As the
          diffusion constant is proportional to joint probability density, this
          behavior makes sense.
          <br />
          <br />
          The results of the analysis were all expected and aligned closely with
          theoretical prediction. The mass of the particles was slightly larger
          than theory in each case due to being conglomerates of several
          particles each. The fits were good, with a χ2(reduced average) equal
          to 8.674366.
        </p>
        <br />
        <div className="section-title">
          Boltzmann Distribution Fit: Vertical Motion, Atmospheric Pressure
        </div>
        <div className="image">
          <img src={boltzmannDist} alt="boltzmann distribution" />
        </div>
        <br />
        <p>
          The oscillation frequencies were calculated via the FFTs of the
          positional data for each of the three particles at their respective
          pressures. These frequencies were used in conjunction with the
          “Displacement Due to Thermal Motion” data, which was fitted with a
          Maxwell-Boltzmann distribution. From the parameters of the fit, the
          approximate masses of each particle was calculated to be
          mass_atmosphere = (4.5 ± 0.6) ∗ 10−12kg, mass_rough = (6.1 ± 0.5) ∗
          10−12kg, and mass_high = (3.8 ± 0.5) ∗ 10−12kg, which was expected.
          <br />
          <br />
          Brownian motion should not be used at high vacuum because by
          definition it relies upon, and is defined characteristically by, the
          erratic random movement of microscopic particles in a fluid as a
          result of continuous bombardment from molecules of the surrounding
          medium - of which there are very few in high vacuum. Therefore, in
          this limit of low molecular populations, Brownian motion falls apart
          and cannot be used for precise and/or accurate calculation.
        </p>
        <br />
      </div>
      <div className="grid3">
        <div className="section-title">Residuals</div>
        <div className="image">
          <img src={residuals} alt="residuals" />
        </div>
        <br />
        <p>
          The residuals all show linear trends, which was expected and desired.
        </p>
        <br />
        <div className="section-title">Axial Quality Factor</div>
        <div className="image">
          <img src={q_ax} alt="quality axial" />
        </div>
        <br />
        <div className="section-title">Vertical Quality Factor</div>
        <div className="image">
          <img src={q_v} alt="quality vertical" />
        </div>
        <br />
        <div className="section-title">
          Averaged Quality Factor Over Both Domains
        </div>
        <div className="image">
          <img src={q_avg} alt="quality average" />
        </div>
      </div>
    </section>
  );
}

export default Project2;
