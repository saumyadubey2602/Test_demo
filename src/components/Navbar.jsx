import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={sticky ? "navbar active" : "navbar"}>
      <div className="logo">Saumya Dubey</div>

      <ul className={menu ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#home" onClick={() => setMenu(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenu(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={() => setMenu(false)}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenu(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#services" onClick={() => setMenu(false)}>
            Services
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenu(false)}>
            Contact
          </a>
        </li>
      </ul>

      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;