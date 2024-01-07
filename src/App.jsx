import { useState } from "react";

import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/skill/Skill";
import Navbar2 from "./components/Navbar/Navbar2";
import Projects from "./components/project/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar2 />
      <section>
        <Hero />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
