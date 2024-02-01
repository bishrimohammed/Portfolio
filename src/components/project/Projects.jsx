import "./project.css";
import clinic from "../../assets/clinic.png";
import chat from "../../assets/chat.png";
import { Fragment } from "react";
const Projects = () => {
  return (
    <div className="project-section ">
      <div className="project-text">
        <h2 className="section__title">Projects</h2>
        <p className="mb-5">
          I have worked on a wide range of projects. From static web to full
          stack apps. Here are some of my projects.
        </p>
      </div>

      <div className="project__container px-lg-5 flex-lg-row flex-column">
        <div className=" animate__animated animate__slideInLeft animate__slow">
          <div className="project__card">
            <img
              src={clinic}
              alt="Project 2"
              className="project__image img-fluid"
            />
            <div className="project__details">
              <h3 className="project__title">Clinic Management App</h3>
              <p className="project__description mb-2">
                Designed and implemented a Clinic Management App with various
                functionalities to streamline workflow and improve efficiency
              </p>
              <span className="mb-3">Key Functionalities:</span>
              <p className="mt-1 mb-1">Cashier :</p>
              <ul className="project__features ">
                <li>
                  Cashiers: Can register, update, and admit patients, as well as
                  generate bills and process payments.
                </li>
                <li>
                  Doctors: Can view patient information, prescribe medication,
                  and order lab/imaging tests
                </li>
                <li>
                  Lab Technicians: Perform and record lab/imaging tests ordered
                  by doctors.
                </li>
                <li>
                  Administrative: Control user access and configure the system
                  settings
                </li>
              </ul>
              <div className="mt-2">
                <a
                  href="https://clinic.bishrimohammed.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="project__btn ms-3"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="  animate__animated animate__slideInRight animate__slow">
          <div className="project__card">
            <img
              src={chat}
              alt="Project 2"
              className="project__image img-fluid"
            />
            <div className="project__details">
              <h3 className="project__title">Chat Application</h3>
              <p className="project__description">
                Designed and implemented a chat application where users can
                connect and communicate with each other.
              </p>
              <ul className="project__features">
                <li>
                  User Registration and Login:Implemented secure user
                  registration and login with password hashing for enhanced
                  credential protection.
                </li>
                <li>
                  Real-time Chat: Developed a real-time chat system that enables
                  users to send and receive messages instantly.
                </li>
                <li>
                  User-to-User Communication: Designed a user-friendly interface
                  that allows users to search for other users and initiate
                  private conversations.
                </li>
              </ul>
              <a
                href="https://github.com/bishrimohammed"
                target="_blank"
                rel="noreferrer"
                className="project__btn ms-3"
              >
                View Repo
              </a>
            </div>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
