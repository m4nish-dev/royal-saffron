import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-top">

        <div className="footer-brand">
          <h2>ROYAL SAFFRON</h2>

          <p>
            Experience luxury dining where royal heritage
            meets modern culinary excellence. Every meal is
            crafted to deliver unforgettable memories.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaYoutube />
            </a>

          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#chefs">Chefs</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>contact@royalsaffron.com</p>
          <p>+91 98765 43210</p>
          <p>New Delhi, India</p>
        </div>

        <div className="footer-hours">
          <h4>Opening Hours</h4>

          <p>Monday - Friday</p>
          <p>11:00 AM - 11:00 PM</p>

          <br />

          <p>Saturday - Sunday</p>
          <p>10:00 AM - 12:00 AM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Royal Saffron. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;