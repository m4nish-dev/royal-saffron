import "./Reservation.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section
      className="reservation"
      id="reservation"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="gold">
        RESERVATION
      </span>

      <h2>
        Reserve Your Table
      </h2>

      <p className="reservation-subtitle">
        Reserve your seat for an unforgettable luxury dining experience.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          placeholder="Email"
          required
        />

        <input
          type="number"
          placeholder="Guests"
          required
        />

        <input
          type="date"
          required
        />

        <input
          type="time"
          required
        />

        <textarea
          placeholder="Special Request"
        ></textarea>

        <button
          type="submit"
          className="btn"
        >
          Reserve Table
        </button>
      </form>

      {submitted && (
        <div className="success-message">
          <h3>✅ Reservation Confirmed</h3>

          <p>
            Thank you for choosing Royal Saffron.
            Our team will contact you shortly.
          </p>
        </div>
      )}
    </motion.section>
  );
}

export default Reservation;