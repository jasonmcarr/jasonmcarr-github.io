import React from "react";
import Plot from "react-plotly.js";
import { opacityFilter } from "../../utils/functions";
import thermalMotionScatterplot from "../../assets/json_files/thermalmotionscatterplot.json"
import "./project1.css";

function Project1() {
  opacityFilter();
  return (
    <div className="project1-container">
      <div className="scatterplot-container">
        <div className="section-title">Introduction</div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          officiis quas temporibus aliquid, non cupiditate dicta aliquam veniam
          eveniet harum iusto qui sunt dolorum alias nostrum quo fugiat, sed
          totam?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Debitis, adipisci nostrum. Sed unde saepe praesentium corporis
          blanditiis animi consectetur sunt ipsa neque. Optio delectus ipsa
          officiis. Unde sint dolore dignissimos.
        </p>
        <div className="scatterplot-container" ref={ref} style={{ display: 'flex', height: '100%' }}>
          <Plot
            data={thermalMotionScatterplot.data}
            layout={thermalMotionScatterplot.layout}
          />
        </div>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          perferendis deleniti molestiae nemo pariatur. Aspernatur, tempore
          deserunt nihil perspiciatis doloribus, repellat corporis adipisci
          doloremque inventore sunt maxime totam? Vel, possimus! Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Quia qui molestiae
          delectus enim voluptatibus, inventore adipisci vitae dolore doloremque
          quod mollitia eius quidem ad corporis ipsum non, distinctio eaque
          amet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
          aspernatur quis, quam fugiat commodi voluptatem minus. Exercitationem
          nulla debitis nemo voluptate accusantium, aut natus facere temporibus
          soluta doloremque nobis, dolores recusandae voluptatem harum illum
          velit hic numquam odit, quaerat architecto. Iusto, at iure excepturi
          corporis quia non voluptate commodi dolorem repudiandae iste eligendi
          fugiat facere totam maxime soluta praesentium beatae eveniet,
          consequatur animi. Cupiditate, sapiente reiciendis consectetur
          delectus magni sint tenetur possimus autem enim laborum quasi nemo
          fuga nobis ducimus neque quas numquam exercitationem atque ab labore
          dolore obcaecati illum unde! Porro id deserunt labore! Repellat nam
          blanditiis magni fuga. Eum officia odit voluptates perspiciatis harum,
          tempore voluptatum eius in numquam facilis neque doloremque et
          praesentium, dolore reiciendis magnam suscipit molestiae repellat
          earum, at natus excepturi inventore totam cumque. Error debitis beatae
          at ab aliquam. Inventore in sit, magni blanditiis voluptatibus veniam
          eveniet, repellendus voluptas dolore iure assumenda a fugiat
          distinctio expedita quisquam aut ipsam quo molestiae, culpa quis dicta
          sint accusamus id velit. Hic sed ab enim esse itaque eos laborum
          praesentium amet? Quaerat dolorum ad deleniti veritatis vero fugit hic
          alias eius sint praesentium officiis nostrum debitis quasi corporis
          dolore beatae, cum velit explicabo? Eius suscipit cupiditate
          repellendus nesciunt consectetur alias, tempore sit soluta laboriosam
          temporibus dicta corporis culpa, veniam natus nisi, similique quisquam
          nam modi. Aspernatur possimus quas cumque, voluptatum, maxime autem
          mollitia labore, suscipit ullam doloribus quam quia ducimus dolores
          dolore. Dolorum nulla debitis iusto quidem vitae, minus perferendis
          officia praesentium quas. Doloremque laboriosam nobis recusandae quo
          ipsam repudiandae et asperiores, inventore ab, quibusdam numquam
          similique! Corrupti sequi repellat dolore inventore qui magni
          voluptatibus eveniet perferendis consequatur voluptatem, architecto
          libero maiores, saepe enim ut excepturi minima veniam modi provident
          harum nihil reiciendis autem laborum. Officia asperiores accusamus
          repellat ex culpa. Officiis ullam tempore consectetur eos rem.
        </p> */}
      </div>
    </div>
  );
}

export default Project1;
