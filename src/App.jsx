import "./App.css";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Projects/>
      <div className="overlay"></div>
      <div className="name">
        <span>Jason Carr Portfolio</span>
      </div>
      <div className="square">
        <nav className="permanent-elements">
          <div>
            <h1 className="author-title">Jason Carr</h1>
            <h4 className="author-descriptor">Data Analyst & Physicist</h4>
          </div>
          <ul className="nav">
            <li>
              <a href="./index.html" className="nav-link">
                {" "}
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" href="./projects.html">
                {" "}
                Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="/contact.html">
                {" "}
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link" href="./about.html">
                {" "}
                About
              </a>
            </li>
          </ul>
        </nav>
        <main>
          <section className="author-summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            iusto repellat soluta voluptate atque animi ratione reiciendis
            quidem! Porro repellat nobis eligendi nihil! Iste atque tempore ad
            unde temporibus doloribus impedit facilis quaerat quidem inventore
            odit enim debitis sit dignissimos deserunt libero corporis
            necessitatibus vel cumque, ex distinctio odio praesentium.
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
