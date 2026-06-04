import "./Gallery.css";

function Gallery() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200",
  ];

  return (
    <section className="gallery" id="gallery">
      <span className="gold">
        GALLERY
      </span>

      <h2>
        Our Luxury Ambience
      </h2>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt="Restaurant" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;