import { useState } from "react";

import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skill from "./components/skill/Skill";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
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
