import React from "react";
import { opacityFilter, addHorizontalNavbar } from "../../utils/functions";
import thuliumSpectra from "../../assets/images/project5/fluo_spectra.png";
import "../projects/project5.css";

function Project1() {
  setTimeout(() => {
    opacityFilter();
  }, 10);
  addHorizontalNavbar();
  return (
    <section className="project5-container">
      <div className="grid1-5">
        <div className="section-title">Introduction</div>
        <p>
          When materials are exposed to certain spectra of light, the electrons
          of said material absorb energy from the light and are excited to a
          higher energy level. These electrons then release the energy by
          emitting light of there own in a process called fluorescence, and
          therefore drop down to a lower energy level. This emitted light can be
          measured using a device called a fluorimeter, and the data from this
          measurement can be used to characterize physical properties of the
          material.
        </p>
        <br />
        <div className="section-title">
          Fluorescence Spectroscopy of a Thin-Film Crystal
        </div>
        <p>
          A fluorimeter was used to measure the fluorescence spectra of a
          magnesium oxide-doped lithium niobate crystal with a 20nm thulium thin
          film on its surface. A laser operating at 670nm was used to "pump" the
          electrons in the thulium film, allowing them to excite and then
          fluoresce. This fluorescence was filtered using a 900 short-pass and a
          750 long-pass filter, and collected using an Ocean Optics
          spectrometer.
        </p>
        <br />
        <div className="section-title">Results & Fits</div>
        <p>
          The white trace is the experimental data, while the red line is the
          sum of all the other colored lines. These lines represent physical
          parameters of the crystalling material, and summing up the
          mathematical representations of these physical parameters allows for
          mathmatical representation of the crystalline system as a whole.
          <br />
          As shown, the Voight-cumulative fit is fairly representative of the
          system without being overdetermined. These deconstructed fits can be
          used to characterize new properties of the experimental material.
        </p>
        <br />
      </div>
      <div className="grid2-5">
        <div className="image">
          <img src={thuliumSpectra} alt="thulium spectra" />
        </div>
      </div>
    </section>
  );
}

export default Project1;
