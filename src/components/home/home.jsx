import React from "react";
import { opacityFilterRemove, removeHorizontalNavbar } from "../../utils/functions";

function Home() {
  opacityFilterRemove();
  removeHorizontalNavbar();
  return (
    <section className="author-summary">
      Born in 1996, I grew up in the treasure state of Montana. I spent my
      formative years trekking the faces of indomitable mountains, breaking the
      glassy surface of waters rarely-touched, and watching the embers rise from
      the flames below them on cool summer evenings. This love of nature
      inspired me to pursue an understanding of it academically, which led me to
      Physics.
      <br />
      <br />
      Pursuing natural philosophy allowed me to glimpse some understanding of
      the mathematics that weave the fabric of our reality. This math is
      something that I believe is beautiful and deserves to be shown to the
      world in an equivalently beautiful way. One of the best ways to chisel the
      form from the marble is through the use of data analysis.
      <br />
      <br />
      Different types of data call for different methods of analysis, just as
      different forms of art require different media to fully capture the
      meaning of the subject. I love that I am able to continually learn new
      ways to convey this meaning to new audiences, and derive great
      satisfaction from honing my skills.
    </section>
  );
}

export default Home;
