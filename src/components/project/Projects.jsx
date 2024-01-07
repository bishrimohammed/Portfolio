import "./project.css";
import clinic from "../../assets/clinic.png";
import { Image } from "react-bootstrap";
const Projects = () => {
  return (
    <div className="project-section">
      <div className="project-text">
        <h2 className="section__title">Projects</h2>
        <p className="mb-5">
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </p>
      </div>

      <div className="project__container flex-lg-row flex-column">
        <div className="project__card ">
          {/* <img src={clinic} alt="Project 1" className="project__image" /> */}
          <Image src={clinic} fluid thumbnail />
          <div className="project__details">
            <h3 className="project__title">E-commerce Website</h3>
            <p className="project__description">
              Developed a fully functional e-commerce website from scratch using
              MERN stack.
            </p>
            <ul className="project__features">
              <li>User authentication and authorization using JWT</li>
              <li>Product catalog with search, filter, and sorting options</li>
              <li>Secure payment integration using Stripe</li>
            </ul>
            <a href="github_repo_link" className="project__btn">
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="project__card">
          <img src={clinic} alt="Project 2" className="project__image" />
          <div className="project__details">
            <h3 className="project__title">Social Media Platform</h3>
            <p className="project__description">
              Designed and implemented a social media platform where users can
              connect and share posts.
            </p>
            <ul className="project__features">
              <li>User registration and login with password hashing</li>
              <li>Friend request system and real-time notifications</li>
              <li>Like, comment, and share functionalities</li>
            </ul>
            <a href="github_repo_link" className="project__btn">
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="project__card">
          <img src={clinic} alt="Project 2" className="project__image" />
          <div className="project__details">
            <h3 className="project__title">Social Media Platform</h3>
            <p className="project__description">
              Designed and implemented a social media platform where users can
              connect and share posts.
            </p>
            <ul className="project__features">
              <li>User registration and login with password hashing</li>
              <li>Friend request system and real-time notifications</li>
              <li>Like, comment, and share functionalities</li>
            </ul>
            <a href="github_repo_link" className="project__btn">
              GitHub Repository
            </a>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
