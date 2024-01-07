import "./skill.css";
import reactLogo from "../../assets/react.svg";
import htmllogo from "../../assets/HTML5_logo.png";
import { SiRedux } from "react-icons/si";
import { FaReact, FaHtml5 } from "react-icons/fa";

import jsLogo from "../../assets/jsLogo.png";
import cssLogo from "../../assets/logo-css-3.png";
import bootstrapLogo from "../../assets/bootstraplogo.jpeg";
import SingleSkill from "./components/SingleSkill";
const Skill = () => {
  return (
    <div id="skill" className="skill">
      <div className="skill-container">
        <div className="skill-content">
          <div className="skill-text text-center">
            <h1>Skills</h1>
            <p className="mt-3">
              Here are some of my skills on which I have been working on for the
              past 2 years.
            </p>
          </div>
          <div className="mt-5 skill-box flex-lg-row flex-column">
            <div className="skill-box-content ">
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
            <div className="skill-box-content ">
              <h2 className="mb-4">Backend</h2>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
