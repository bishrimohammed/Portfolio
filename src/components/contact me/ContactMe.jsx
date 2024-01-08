import "./contactme.css";

const ContactMe = () => {
  return (
    <div className="contact-section">
      <div className="contact-text mb-3">
        <h2 className="contact__title">Contact Me</h2>
        <p>Feel free to reach out to me for any questions or opportunities!</p>
      </div>
      <div className="contact-box d-flex justify-content-center">
        <div className="contact-content">
          <h2 className="fw-bold">Email Me</h2>
          <form action="#">
            <input type="email" placeholder="Your Email" name="email" id="" />
            <input type="text" placeholder="Your Name" name="name" id="" />
            <input type="text" placeholder="Subject" name="subject" id="" />
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
