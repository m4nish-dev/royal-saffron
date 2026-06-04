import "./Chefs.css";

function Chefs() {
  const chefs = [
    {
      name: "Chef Alexander",
      role: "Executive Chef",
      image:
        "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&auto=format&fit=crop",
    },

    {
      name: "Chef Isabella",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&auto=format&fit=crop",
    },

    {
      name: "Chef Hiroshi",
      role: "Japanese Master Chef",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="chefs" id="chefs">
      <span className="gold">OUR CHEFS</span>

      <h2>Meet Our Master Chefs</h2>

      <div className="chef-grid">
        {chefs.map((chef, index) => (
          <div className="chef-card" key={index}>
            <img src={chef.image} alt={chef.name} />

            <div className="chef-info">
              <h3>{chef.name}</h3>
              <p>{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Chefs;