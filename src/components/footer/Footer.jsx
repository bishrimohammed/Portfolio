import "./footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Bishri Mohammed</h1>
      <div className="icon-container d-flex gap-5 my-5">
        <a
          href="https://www.facebook.com/bishri.mohammed.56"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare size={23} className="icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram size={23} className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/bishri-mohammed-3836541a4/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={23} className="icon" />
        </a>
        <a
          href="https://twitter.com/bishrimohammed2"
          target="_blank"
          rel="noreferrer"
        >
          <FaXTwitter size={23} className="icon" />
        </a>

        <a
          href="https://github.com/bishrimohammed"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={23} className="icon" />
        </a>
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()} Bishri Mohammed. All rights
        reserved.
      </p>
    </div>
  );
};

export default Footer;
