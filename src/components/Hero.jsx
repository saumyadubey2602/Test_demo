import image2 from "../assets/images/image2.jpg";


import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hello">Hi, I'm</p>

        <h1>
          Saumya <span>Dubey</span>
        </h1>

        <h2>Frontend Developer</h2>

        <p className="hero-text">
          I create modern, responsive, and user-friendly websites using
          React, HTML, CSS, and JavaScript. I enjoy building clean
          interfaces with smooth animations and beautiful designs.
        </p>

        <div className="hero-buttons">
          <a href='#' className="btn">
           Download Resume
          </a>

          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </div>

        <div className="social-icons">
          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="image-circle">
          <img src={image2} alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;