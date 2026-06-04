import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Menu from "./components/Menu";
import Chefs from "./components/Chefs";
import Cuisine from "./components/Cuisine";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";

import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

import "./components/Loader.css";
import "./components/CursorGlow.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Stats />

      <Menu />

      <Chefs />

      <Cuisine />

      <Gallery />

      <Reviews />

      <Reservation />

      <BackToTop />

      <Footer />
    </>
  );
}

export default App;