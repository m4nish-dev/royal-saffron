import "./Menu.css";
import menuData from "../data/menuData";
import { useState } from "react";

function Menu() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Indian",
    "Italian",
    "Japanese",
    "Dessert",
    "Seafood",
  ];

  const filteredMenu =
    category === "All"
      ? menuData
      : menuData.filter(
          (item) => item.category === category
        );

  return (
    <section className="menu" id="menu">
      <span className="gold">
        OUR MENU
      </span>

      <h2>
        Signature Dishes
      </h2>

      <div className="filter-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredMenu.map((item) => (
          <div className="food-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
            />

            <div className="food-content">
              <h3>{item.name}</h3>

              <p>{item.category}</p>

              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;