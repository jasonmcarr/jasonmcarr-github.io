import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Plot from "react-plotly.js";
import { opacityFilter } from "../../utils/functions";
import thermalMotionScatterplot from "../../assets/json_files/thermalmotionscatterplot.json";
import "./project1.css";

function Project1() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [initialWidth, setInitialWidth] = useState(0);
  const grid1Ref = useRef(null);
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
      minGraphWidth
    ),
    height: Math.max(
      grid1Ref.current ? grid1Ref.current.offsetWidth * 0.4 : windowWidth * 0.4,
      minGraphHeight
    ),
  };
  // opacityFilter();
  return (
    <div className="project1-container">
      <div className="grid1" ref={grid1Ref}>
        <div className="section-title">Introduction</div>

        <div className="section-title">Thermal Motion of a Particle</div>
        <div className="scatterplot-container">
          <Plot data={thermalMotionScatterplot.data} layout={updatedLayout} />
        </div>
        <p>
          Suscipit, officiis delectus? Explicabo, accusantium totam architecto
          atque sit consectetur quibusdam doloremque animi, impedit provident
          eos nemo exercitationem pariatur cum magni aliquam. Alias, deserunt!
          Nostrum quod, quo nobis amet ab quis a incidunt error asperiores
          quisquam maiores quaerat molestiae dignissimos, libero minus? Sed, rem
          blanditiis aut in porro eveniet ut temporibus ipsa, possimus sapiente
          suscipit tempore, earum nemo voluptatum illum magni fugit quidem omnis
          repellendus debitis odio! Nostrum sequi beatae tempora quia blanditiis
          molestias suscipit. Esse vel maiores sunt, doloribus alias inventore
          quis reprehenderit nam voluptatibus id laudantium eius velit optio
          illo dignissimos atque similique laboriosam ullam minima dolores
          quaerat impedit sint quisquam. Maiores amet ipsam inventore quisquam,
          praesentium minima nemo expedita placeat corporis, iste voluptatem
          nesciunt vel ducimus et fuga harum quibusdam dolor dolorem in culpa
          nihil. Ratione sit numquam totam mollitia, repudiandae asperiores quam
          labore beatae illum excepturi dignissimos. Accusamus dignissimos eos
          neque eligendi ipsam qui labore eum dicta totam, aliquid magni ut
          doloremque laboriosam. At esse voluptate deserunt magnam, ducimus
          natus, consequuntur rem consequatur eos cumque voluptatibus temporibus
          repellendus sunt molestiae labore laudantium illo nemo nobis qui
          explicabo deleniti cupiditate! Minus omnis sunt atque placeat veniam
          repellat similique aut ea? Cupiditate nostrum maiores alias inventore
          qui aliquid tempore asperiores aliquam iste? Ex repellat error optio
          eos. Nisi, enim magni aut incidunt blanditiis iusto dolorum atque
          consectetur, a ex consequatur, praesentium eveniet possimus
          doloremque. Dolor assumenda a et minus, rem culpa reprehenderit,
          veritatis odio libero at dolorum dolorem numquam doloremque qui?
          Distinctio adipisci at enim ex consequatur! Voluptates minima illum
          totam earum quidem officiis architecto. Non nesciunt excepturi dicta
          ea quia ducimus.
        </p>
      </div>
      <div className="grid2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi
          qui consequatur nisi accusantium consectetur dolores aspernatur cum
          totam! Autem quod itaque expedita illo sit fugiat officiis hic sed et,
          consequuntur fugit sint eum similique cupiditate ducimus facilis quae
          aliquam qui architecto maxime voluptatibus, exercitationem
          consectetur. Nam odio velit exercitationem amet esse neque suscipit
          ullam magni magnam. Quaerat facilis odit molestiae quae aliquid,
          aperiam, optio nihil nulla error tempore ea architecto tenetur nobis
          animi incidunt et amet ipsum fuga. Totam, maxime asperiores. Vel,
          autem illum. Dolor magnam magni doloremque quisquam eligendi, unde eum
          quae ex minus in provident molestiae consequuntur mollitia alias.
          Corrupti enim sunt, vel at harum reiciendis earum et libero nostrum
          est expedita impedit inventore natus repudiandae, voluptatem quidem?
          Eveniet velit fuga voluptas quibusdam repellendus porro delectus quasi
          molestiae doloribus, officiis hic voluptates omnis vel reiciendis
          libero ut eum repellat distinctio nam harum quia alias, esse
          perspiciatis. Pariatur impedit ea quo quas quidem quod, obcaecati
          itaque explicabo aliquid, incidunt tenetur quibusdam consequatur in
          cupiditate? Laborum recusandae id dolorum eligendi iure, corrupti
          atque eveniet maxime ad, sed at cupiditate praesentium! Commodi sint
          voluptas, asperiores fugiat minus officiis, excepturi tenetur
          explicabo dignissimos aperiam quisquam nam? Deleniti libero iste
          perferendis esse officiis iusto optio autem! Beatae illum, ea ad odit
          consequuntur asperiores ipsam. Eius obcaecati quo similique! Nobis,
          illo accusantium quae recusandae quis saepe fugiat eos excepturi vel.
          Praesentium nulla porro nihil eligendi maxime? Sit reprehenderit
          veniam, quia nesciunt vel officiis voluptatem maxime nulla
          voluptatibus, doloremque modi? Illum error enim corrupti molestiae
          mollitia labore? Architecto fugit deleniti, praesentium cum
          repellendus, laudantium adipisci quisquam sequi rem nesciunt enim
          inventore necessitatibus. Eum necessitatibus, exercitationem eveniet
          laborum quos praesentium. Quaerat eum sed nulla labore sapiente velit
          modi earum animi veritatis, beatae cumque! Exercitationem sint
          voluptatem aperiam repellat reiciendis, adipisci sed beatae ullam
          amet! Voluptates modi atque excepturi? Perferendis adipisci minima
          eaque praesentium odio eveniet porro qui reprehenderit optio modi
          voluptatum natus consequuntur blanditiis quod unde, vel eos a? Sed
          exercitationem quo obcaecati non voluptatum reiciendis? Minima
          reprehenderit expedita earum exercitationem ab recusandae eius
          possimus. Exercitationem maxime, placeat corrupti ad at nulla! Minima
          natus, adipisci libero modi doloribus reprehenderit in tempora error
          architecto autem veniam commodi distinctio ab harum, atque quam fuga
          aliquid animi excepturi non! Sapiente quisquam adipisci cupiditate
          officia odit. Ipsum quod recusandae, facere dolores natus adipisci
          quas quaerat aliquam tempora iste nostrum maiores. Sit exercitationem
          recusandae architecto itaque eaque consectetur quas sapiente!
        </p>
      </div>
    </div>
  );
}

export default Project1;
