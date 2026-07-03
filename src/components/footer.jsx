import { FaArrowUp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h2>Saumya Dubey</h2>

      <p>
        Frontend Developer | React Developer | Web Designer
      </p>

      <div className="footer-social">

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

      <a href="#home" className="top-btn">
        <FaArrowUp />
      </a>

      <p className="copyright">
        © 2026 Saumya Dubey. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;