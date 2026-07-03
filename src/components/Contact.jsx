import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">

        <div className="contact-form glass">
          <form>
            <input type="text" placeholder="your Name" />

            <input type="email" placeholder="Your Email" />

            <input type="text" placeholder="Subject" />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button className="btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info">

          <div className="info-card glass">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>dubeysaumya2726@gmail.com</p>
          </div>

          <div className="info-card glass">
            <FaPhone className="info-icon" />
            <h3>Phone</h3>
            <p>+91 8957557392</p>
          </div>

          <div className="info-card glass">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>Lucknow, India</p>
          </div>

          <div className="contact-social">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;