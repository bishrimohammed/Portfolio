import Navbar from "../Navbar/NavbarComponent";
import "./hero.css";
import img from "../../assets/photo_carton.png";
import resume from "../../assets/resume.pdf";
import { TypeAnimation } from "react-type-animation";
import { Button } from "react-bootstrap";
const Hero = () => {
  const handleDownloadResume = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "../../assets/resume.pdf"; // Replace with the actual path to your CV file
    downloadLink.download = "resume.pdf"; // Replace with the desired filename
    downloadLink.click();
  };
  return (
    <>
      {/* <Navbar /> */}
      <div id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content text-lg-start text-center">
            <div className="hero-text">
              <h1 className="animate__animated animate__slideInDown animate__slow">
                <span
                  // className="animate__animated animate__slideInDown animate__fast"
                  style={{ fontSize: 20 }}
                >
                  Hi, I am
                </span>
                <span>
                  <br /> Bishri Mohammed
                </span>
              </h1>
              <div className="d-flex justify-content-lg-start flex-wrap justify-content-center gap-3 animate__animated animate__slideInDown animate__fast">
                <h2>I am a Junior</h2>
                <TypeAnimation
                  style={{
                    color: "yellow",
                  }}
                  className="typed"
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
              <p className="animate__animated animate__slideInLeft animate__slow">
                I am an enthusiastic and adaptable individual, consistently
                seeking out new opportunities to expand my skill set. Fueled by
                a genuine passion for continuous learning, I am committed to
                producing top-notch outcomes. Embracing a positive outlook and
                cultivating a growth mindset, I am poised to make a significant
                impact and accomplish remarkable achievements.
              </p>
              <div className="btns">
                <button className="hire-btn">Hire Me</button>
                <Button
                  //className="downloadbtn"
                  type="submit"
                  href={resume}
                  target="_blank"
                  bsPrefix="downloadbtn"
                >
                  Download cv
                </Button>
              </div>
            </div>
            <div className="hero-img d-lg-inline-flex d-none">
              <img
                src={img}
                alt=""
                className="img-fluid animate__animated animate__rotateInUpLeft animate__slower"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
