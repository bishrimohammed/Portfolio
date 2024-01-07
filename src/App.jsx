import { useState } from "react";

import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/skill/Skill";
import Navbar2 from "./components/Navbar/Navbar2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar2 />
      <section>
        <Hero />
      </section>
      <section>
        <Skill />
      </section>
      <section>skill</section>
    </div>
  );
}

export default App;
