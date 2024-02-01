import { useState } from "react";
import "animate.css";
import "./App.css";
import Hero from "./components/hero/Hero";

import Skill from "./components/skill/Skill";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Projects from "./components/project/Projects";
import ContactMe from "./components/contact me/ContactMe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <NavbarComponent />
      <section>
        <Hero />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
