import "./Cuisine.css";

function Cuisine() {
  const cuisines = [
    {
      name: "Indian",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1000",
      desc: "Royal biryanis, aromatic spices and rich Indian flavours.",
    },

    {
      name: "Italian",
      image:
        "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=1000",
      desc: "Authentic pasta, gourmet pizzas and luxury dining classics.",
    },

    {
      name: "Japanese",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1000",
      desc: "Premium sushi, sashimi and Japanese culinary artistry.",
    },

    {
      name: "Chinese",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1000",
      desc: "Traditional recipes crafted with modern elegance.",
    },

    {
      name: "French",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1000",
      desc: "Classic French cuisine served with timeless sophistication.",
    },
  ];

  return (
    <section className="cuisine" id="cuisine">
      <span className="gold">
        WORLD CUISINES
      </span>

      <h2>
        Discover Global Flavours
      </h2>

      <p className="cuisine-subtitle">
        Experience carefully curated dishes inspired by the world's
        most celebrated culinary traditions.
      </p>

      <div className="cuisine-grid">
        {cuisines.map((item, index) => (
          <div className="cuisine-card" key={index}>
            <div className="cuisine-image">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className="cuisine-content">

              <span className="cuisine-number">
                0{index + 1}
              </span>

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <button className="explore-btn">
                Explore →
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cuisine;