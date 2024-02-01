import "./skill.css";
import reactLogo from "../../assets/react.svg";
import htmllogo from "../../assets/HTML5_logo.png";
import { SiRedux } from "react-icons/si";
import { FaReact, FaHtml5 } from "react-icons/fa";

import jsLogo from "../../assets/jslogo.png";
import cssLogo from "../../assets/logo-css-3.png";
import bootstrapLogo from "../../assets/bootstraplogo.jpeg";
import nodeLogo from "../../assets/icons8-node-js-240.png";
import mongoLogo from "../../assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png";
import expressLogo from "../../assets/icons8-express-js-150.png";
import jwtLogo from "../../assets/icons8-json-web-token-480.png";
import mongooseLogo from "../../assets/icons8-mongoose-480.png";
import git from "../../assets/git.png";
import github from "../../assets/github1.png";
import docker from "../../assets/docker.png";
import creative from "../../assets/creative.png";
import SingleSkill from "./components/SingleSkill";
const Skill = () => {
  return (
    <div className="skill">
      <div className="skill-container">
        <div className="skill-content">
          <div className="skill-text text-center">
            <h1>Skills</h1>
            <p className="mt-3">
              Here are some of my skills on which I have been working on for the
              past 2 years.
            </p>
          </div>
          <div className="mt-5 skill-box flex-wrap flex-lg-row flex-column">
            <div className="skill-box-content front">
              <h2 className="mb-4">Frontend</h2>
              <div className="skill-list">
                <SingleSkill
                  logo={<FaReact size={24} color="rgb(97, 218, 251)" />}
                  title="React Js"
                />
                <SingleSkill
                  logo={<SiRedux size={24} color="rgb(113, 71, 183)" />}
                  title="Redux"
                />

                <div className="single-skill">
                  <img src={htmllogo} alt="" /> HTML
                </div>
                <div className="single-skill">
                  <img src={cssLogo} alt="" /> CSS
                </div>
                <div className="single-skill">
                  <img src={jsLogo} alt="" /> JavaScript
                </div>
                <div className="single-skill">
                  <img src={bootstrapLogo} alt="" /> Bootstrap
                </div>
              </div>
            </div>
            <div className="skill-box-content back">
              <h2 className="mb-4">Backend</h2>
              <div className="skill-list">
                <div className="single-skill">
                  <img src={nodeLogo} alt="" /> Node Js
                </div>
                <div className="single-skill">
                  <img src={expressLogo} alt="" /> Express Js
                </div>
                <div className="single-skill">
                  <img src={mongoLogo} alt="" /> Mongo DB
                </div>
                <div className="single-skill">
                  <img src={mongooseLogo} alt="" /> Mongoose
                </div>
                <div className="single-skill">
                  <img src={jwtLogo} alt="" /> JWT
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 skill-box justify-content-start flex-lg-row flex-column">
            <div className="skill-box-content  others">
              <h2 className="mb-4">Others</h2>
              <div className="skill-list">
                <div className="single-skill">
                  <img src={docker} alt="" /> Docker
                </div>

                <div className="single-skill">
                  <img src={git} alt="" /> Git
                </div>
                <div className="single-skill">
                  <img src={github} alt="" /> Github
                </div>
                <div className="single-skill">
                  <img src={creative} alt="" /> Creative
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
