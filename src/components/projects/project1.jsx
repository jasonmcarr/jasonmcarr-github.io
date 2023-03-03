import React from "react";
import { opacityFilter } from "../../utils/functions";
import laserTrapping from "../../assets/images/laser-opt-trap-diag-1.png";
import "./project1.css";

function Project1() {
  opacityFilter();
  return (
    <div className="column-parent">
      <div className="column-container">
        <div className="column">
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
          </p>
          <p>
            Dielectric particles are attracted along the gradient to the region
            of strongest electric field, which is the center of the beam. The
            laser light also tends to apply a force on particles in the beam
            along the direction of beam propagation. This is due to conservation
            of momentum: photons that are absorbed or scattered by the tiny
            dielectric particle impart momentum to the dielectric particle. This
            is known as the scattering force and results in the particle being
            displaced slightly downstream from the exact position of the beam
            waist.
          </p>
          <p>
            Below is a diagram showing the how a particle behaves in a gaussian
            laser beam:
            <p className="laser-Trapping">
              <img src={laserTrapping} alt="particle in a gaussian beam" />
            </p>
          </p>
        </div>
        <div className="column">
          <div className="section-title">Objectives</div>
          <p>
            The objective of this project was to back-out the thermally-driven
            motion (in time and Fourier domains) and mass of an
            optically-trapped dielectric particle in a liquid, as well as the
            strength transverse force of the trap and spring constant of the
            system.
            <p>
              <div className="section-title">Equipment</div>
              <p className="equipment-list">
                <div>Basler acA1920-40 micron Camera</div>
                <div>AC254-100-1-ML Camera Objective</div>
                <div>Microscope Objective</div>
                <div>Immersion Oil, type LDI</div>
                <div>Microscope Slides</div>
                <div>Deionized Water</div>
                <div>Polystyrene Microspheres</div>
                <div>Optical Multimeter</div>
                <div>Laser Diode Controller</div>
                <div>Temperature Controller</div>
                <div>Optical Fiber</div>
                <div>Translation Stage</div>
                <div>Calibration Slide</div>
                <div>Illumination Lamp</div>
              </p>
              <div className="section-title">Process</div>
              <p></p>
              <div className="section-subtitle">Setup:</div>
              <p>
                Aligned fibre to laser via visual optimization in 3D, then used
                an optical multimeter to maximize power output. 67.33mA of
                current used for coupling. Output reached 2.60 ± 0.05 mW.
                Focused camera at infinity, then attached it to the
                two-dimensional translation stage. Adjusted relay lens and
                microscope objective until a distance of approximately 30cm was
                between them. Mounted fibre to stage-array.
              </p>
              <div className="section-subtitle">Calibration:</div>
              <p>
                Prepared microscope slide by placing particles and DI-H2O on top
                of slide. Covered particles and liquid with coverslip. Placed a
                dot of immersion oil on top of coverslip and lowered microscope
                objective into oil. Took images of microspheres to use as
                calibration. Using radius= 1.72 microns, found horizontal
                calibration to be 0.0860 microns/pixel and vertical calibration
                to be 0.0819 microns/pixel.
              </p>
              <div className="section-subtitle">Motion:</div>
              <p>
                Diluted sample with DI-H2O and caught a single particle in the
                beam-path. Tuned current to 62.23 mA to allow for thermal motion
                to be recorded. Took 5000 frames of data at 30.00Hz.
              </p>
              <div className="section-subtitle">Strength:</div>
              <p>
                Trapped a single particle at 62.60 mA of current. Recorded 500
                frames of data, moving the beam with acceleration until the
                particle was freed from the trap. Using radius= 1.72 microns and
                denisty= 1.055 g/cm3 at room temperature, calculated the mass of
                each microsphere to be 2.249E−14 kg. This information was used
                to calculate the velocity: v = 7.758 microns/second 5
              </p>
            </p>
          </p>
        </div>
        <div className="column">
          <div className="section-title">Results</div>
          <p>
            The transverse force was found to be 2.51524E-12 Newtons. The spring
            constant was found to be 1.14329E-5 kg/s^2.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project1;
