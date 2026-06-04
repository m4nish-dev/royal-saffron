import { useEffect } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow");

    const moveGlow = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveGlow);

    return () =>
      window.removeEventListener("mousemove", moveGlow);
  }, []);

  return <div className="cursor-glow"></div>;
}

export default CursorGlow;