import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Plot from "react-plotly.js";
import { opacityFilter } from "../../utils/functions";
import thermalMotionScatterplot from "../../assets/json_files/thermalmotionscatterplot.json";
import verticalHistogram from "../../assets/json_files/verticalhistogram.json";
import transverseHistogram from "../../assets/json_files/transversehistogram.json";
import "./project1.css";

function Project1() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [initialWidth, setInitialWidth] = useState(0);
  const grid1Ref = useRef(null);
  const grid2Ref = useRef(null);
  const minThermGraphWidth = 550; // Minimum therm width
  const minThermGraphHeight = 400; // Minimum therm height
  const minGraphWidth = 550; // Minimum width
  const minGraphHeight = 400; // Minimum height

  useLayoutEffect(() => {
    setInitialWidth(grid1Ref.current.offsetWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updatedLayout = {
    ...thermalMotionScatterplot.layout,
    width: Math.max(
      grid1Ref.current
        ? grid1Ref.current.offsetWidth
        : initialWidth || windowWidth * 0.8,
      minThermGraphWidth
    ),
    height: Math.max(
      grid1Ref.current ? grid1Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minThermGraphHeight
    ),
  };

  const updatedVertLayout = {
    ...verticalHistogram.layout,
    width: Math.max(
      grid2Ref.current
        ? grid2Ref.current.offsetWidth
        : initialWidth || windowWidth * 0.8,
      minGraphWidth
    ),
    height: Math.max(
      grid2Ref.current ? grid2Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minGraphHeight
    ),
  };

  const updatedTransvLayout = {
    ...transverseHistogram.layout,
    width: Math.max(
      grid2Ref.current
        ? grid2Ref.current.offsetWidth
        : initialWidth || windowWidth * 0.8,
      minGraphWidth
    ),
    height: Math.max(
      grid2Ref.current ? grid2Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minGraphHeight
    ),
  };

  opacityFilter();
  return (
    <div className="project1-container">
      <div className="grid1" ref={grid1Ref}>
        <div className="section-title">Introduction</div>
        <p>
          The trapping of particles using a single-beam optical tweezer is an
          effective way of isolating a particle and recording its respective
          motion in an attempt to gain understanding into its observable
          properties such as mass, thermal capacity, etc. Optical tweezers are
          capable of manipulating nanometer and micron-sized dielectric
          particles by exerting extremely small forces via a highly focused
          laser beam. The beam is typically focused by sending it through a
          microscope objective. The narrowest point of the focused beam, known
          as the beam waist, contains a very strong electric field gradient.
          <br />
          <br />
          Dielectric particles are attracted along the gradient to the region of
          strongest electric field, which is the center of the beam. The laser
          light also tends to apply a force on particles in the beam along the
          direction of beam propagation. This is due to conservation of
          momentum: photons that are absorbed or scattered by the tiny
          dielectric particle impart momentum to the dielectric particle. This
          is known as the scattering force and results in the particle being
          displaced slightly downstream from the exact position of the beam
          waist.
        </p>
        <br />
        <div className="section-title">Thermal Motion of a Particle</div>
        <div className="scatterplot-container">
          <Plot data={thermalMotionScatterplot.data} layout={updatedLayout} />
        </div>
        <br />
        <p>
          The thermal motion of a particle (i.e the motion caused by the
          particle vibrating) was isolated by trapping it using the single-beam
          optical tweezers described previously. Once the particle was trapped,
          5000 images were taken of the particle. These images were analyzed
          using computer-vision libraries in Python to generate vertical and
          transverse motion data, which was further scrutinized using libraries
          such as Pandas and Numpy to gain insight into the physical properties
          of the particle.
        </p>
        <br />
      </div>
      <div className="grid2" ref={grid2Ref}>
        <div className="section-title">Particle Mass & Velocity</div>
        <p>
          The mass of the microsphere can be calulated by measuring the radius
          of the particle (in this case, the radius was 1.72 microns). Using
          this value, along with the density of of the material at room
          temperature (polystyrene, which has a desity of 1.055 g/cm^3), the
          calculated mass of the microsphere was 2.249E-14 kg. This information
          was used to calculate the velocity of 7.758 microns/second.
        </p>
        <br />
        <div className="section-title">Vertical Motion</div>
        <div className="vertical-histogram-container">
          <Plot data={verticalHistogram.data} layout={updatedVertLayout} />
        </div>
        <br />
        <br />
        <div className="section-title">Transverse Motion</div>
        <div className="transverse-histogram-container">
          <Plot data={transverseHistogram.data} layout={updatedTransvLayout} />
        </div>
        <br />
        <br />
        <div className="section-title">Optical Trap Properties & Results</div>
        <p>
          The strength of the optical trap can be calculated using force
          equations, which gives a result of 2.51524E-12 N. This force is very
          strong given the properties of the particle it is acting on, and is
          reflected in the vertical motion and transverse motion histograms
          above. The resonance frequency was derived from the laser itself,
          which was used to calculated a spring constant of 1.14329E-5 kg/s^2
          for the system.
        </p>
      </div>
    </div>
  );
}

export default Project1;
