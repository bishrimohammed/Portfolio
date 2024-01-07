import Navbar from "../Navbar/Navbar";
import "./hero.css";
import img from "../../assets/F2A3857_1660135787480_1660135869754.jpg";

import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content text-lg-start text-center">
            <div className="hero-text">
              <h1>
                Hi, I am
                <span>
                  <br /> Bishri Mohammed
                </span>
              </h1>
              <div className="d-flex justify-content-lg-start justify-content-center gap-3">
                <h2>I am a </h2>
                <TypeAnimation
                  // preRenderFirstString={true}
                  style={{
                    lineHeight: "68px",
                    fontSize: 32,
                    fontWeight: 600,
                    color: "yellow",
                  }}
                  sequence={[
                    500,
                    " Mern Stack Developer", // initially rendered starting point
                    1000,
                    " backend Developer",
                    1000,
                    " React Js Developer",
                    500,
                    "Node Js Developer",
                  ]}
                  speed={50}
                  // style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </div>

              {/* <h2>I am Mern Stack Developer</h2> */}
              <p>
                I am a motivated and versatile individual, always eager to take
                on new challenges. With a passion for learning I am dedicated to
                delivering high-quality results. With a positive attitude and a
                growth mindset, I am ready to make a meaningful contribution and
                achieve great things.
              </p>
              <div className="btns">
                <button className="hire-btn">Hire Me</button>
                <button>Download cv</button>
              </div>
            </div>
            <div className="hero-img d-lg-block d-none">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
