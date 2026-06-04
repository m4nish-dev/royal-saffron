import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="overlay"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-line"></div>

        <span className="hero-subtitle">
          EST. 2008 • ROYAL FINE DINING
        </span>

        <h1>
          A Royal Journey
          <br />
          Through Fine Dining
        </h1>

        <p>
          Indulge in an extraordinary fine-dining experience,
          crafted by master chefs and inspired by timeless
          royal traditions, luxury interiors, and exceptional hospitality.
        </p>

        <div className="buttons">
          <a href="#menu">
            <button className="btn">
              Explore Menu
            </button>
          </a>

          <a href="#reservation">
            <button className="outline-btn">
              Reserve Table
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;