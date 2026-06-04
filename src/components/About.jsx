import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&auto=format&fit=crop"
          alt="Luxury Restaurant"
        />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="gold">
          ABOUT ROYAL SAFFRON
        </span>

        <h2>
          A Legacy Of Luxury Dining
        </h2>

        <p>
          Inspired by royal palaces and world-class culinary
          traditions, Royal Saffron offers an unforgettable
          dining experience where elegance meets excellence.
        </p>

        <div className="features">
          <div>✓ Established 2008</div>
          <div>✓ Award Winning Chefs</div>
          <div>✓ Private Dining</div>
          <div>✓ Royal Hospitality</div>
        </div>
      </motion.div>

    </section>
  );
}

export default About;