import "./Reviews.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "An unforgettable dining experience with exceptional hospitality.",
    },

    {
      name: "Priya Mehta",
      review:
        "The ambience feels truly royal and the food is world-class.",
    },

    {
      name: "Arjun Kapoor",
      review:
        "One of the finest luxury restaurants I have visited.",
    },

    {
      name: "Sneha Verma",
      review:
        "Outstanding service, premium interiors and delicious cuisine.",
    },
  ];

  return (
    <section className="reviews" id="reviews">

      <span className="gold">
        TESTIMONIALS
      </span>

      <h2>
        What Our Guests Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">

              <div className="stars">
                ★★★★★
              </div>

              <p>{item.review}</p>

              <h4>{item.name}</h4>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Reviews;