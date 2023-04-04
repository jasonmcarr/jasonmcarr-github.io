import React from "react";
import { opacityFilter, addHorizontalNavbar } from "../../utils/functions";
import thuliumSpectra from "../../assets/images/project5/fluo_spectra.png";
import "../projects/project5.css"

function Project1() {
  setTimeout(() => {
    opacityFilter();
  }, 10);
  addHorizontalNavbar();
  return (
    <section className="project5-container">
      <div className="grid1-5">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit iste
          rem, numquam quos reprehenderit tempore ipsa quo similique nisi. Vero
          illum aliquam, ut qui delectus possimus reiciendis deleniti quas
          libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          architecto assumenda neque mollitia odio aut consequuntur fuga maxime
          ullam sit debitis impedit voluptatem, vitae expedita officia quas non
          temporibus, et, deserunt pariatur aliquam. Ullam modi pariatur eveniet
          nihil alias hic eius? Dolores cupiditate modi iure perferendis natus
          suscipit ex? Repudiandae ab quis, laborum dolores maiores impedit
          voluptatum quas. Sapiente ducimus fuga asperiores deserunt, beatae
          fugiat ipsum quibusdam nam optio tempora temporibus accusantium eius
          voluptatem iusto perferendis nemo. Distinctio dolores unde quam,
          explicabo animi illum dolorem ea quia vitae? Molestias voluptatum
          aliquam recusandae repellat harum id corporis tenetur fugit, explicabo
          eaque et, quidem qui iste corrupti quis accusamus, dolorum assumenda
          culpa quae commodi error dolores asperiores deleniti. Optio unde non
          commodi facilis sed officiis fuga deleniti voluptatibus ex provident
          incidunt, dolore iste earum repellendus quidem aperiam. Doloribus
          harum inventore perferendis.
        </p>
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
