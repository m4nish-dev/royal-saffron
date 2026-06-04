import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "50K+",
      title: "Happy Guests",
    },
    {
      number: "25+",
      title: "Award Winning Dishes",
    },
    {
      number: "12",
      title: "Master Chefs",
    },
  ];

  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div
            className="stat-card"
            key={index}
          >
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;