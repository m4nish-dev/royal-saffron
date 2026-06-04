import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Royal Saffron Logo" />
        <h2>ROYAL SAFFRON</h2>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#menu" onClick={() => setMenuOpen(false)}>
            Menu
          </a>
        </li>

        <li>
          <a href="#chefs" onClick={() => setMenuOpen(false)}>
            Chefs
          </a>
        </li>

        <li>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <button className="reserve-btn">
        Reserve Table
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;