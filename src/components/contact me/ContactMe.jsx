import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contactme.css";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b65ljz8",
        "template_zmrhi1e",
        form.current,
        "O-Pb3B5Ft0BhbXUI9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-section">
      <div className="contact-text mb-3">
        <h2 className="contact__title">Contact Me</h2>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
      </div>
      <div className="contact-box d-flex justify-content-center">
        <div className="contact-content">
          <h2 className="fw-bold">Email Me</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              id=""
              required
            />
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              id=""
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id=""
              required
            />
            <textarea name="message" placeholder="Message" id=""></textarea>
            <button type="submit" className="mt-md-1 mt-2">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
