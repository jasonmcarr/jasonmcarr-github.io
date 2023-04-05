import { opacityFilter, addHorizontalNavbar } from "../../utils/functions";
import opticalCooling from "../../assets/images/project6/optical-cooling.png";
import "./project6.css";

function Project6() {
  setTimeout(() => {
    opacityFilter();
  }, 10);
  addHorizontalNavbar();
  return (
    <div className="project6-container">
      <div className="grid1-6"></div>
      <div className="poster-container">
        <div className="poster">
          <img src={opticalCooling} alt="optical cooling poster" />
        </div>
      </div>
      <div className="grid3-6"></div>
    </div>
  );
}

export default Project6;
