import { opacityFilter } from "../../utils/functions";
import { Tableau } from "./tableau";

function Project3() {
  opacityFilter();
  return (
    <div id="vizContainer">
      <h1>Tableau Dashboard in React</h1>
      <Tableau/>
    </div>
  );
}

export default Project3;
