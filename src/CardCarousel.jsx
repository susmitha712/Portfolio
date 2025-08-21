import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./CardCarousel.css";

const skills = [
  {
    id: 1,
    image: "/assets/web.jpg",
    title: "Web Developer",
  },
  {
    id: 2,
    image: "/assets/competitive.png",
    title: "Competitive Programming",
  },
  {
    id: 3,
    image: "/assets/reasoning.jpg",
    title: "Reasoning Skills",
  },
  {
    id: 4,
    image: "/assets/fullstack.jpg",
    title: "Full Stack Developer",
  },
  {
    id: 5,
    image: "/assets/prompting.jpeg",
    title: "Prompting Skills",
  },
  {
    id: 6,
    image: "/assets/photography.png",
    title: "Photography & Editing",
  },
  {
    id: 7,
    image: "/assets/drawing.jpg",
    title: "Drawing and Painting",
  },
  
];

const CardCarousel = () => {
  return (
    <div className="carousel-wrapper" id="skill">


      <div className="carousel-container" >
        <Swiper
          modules={[Navigation, Pagination, EffectCards, Autoplay]}
          effect="cards"
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {skills.map((skill) => (
            <SwiperSlide key={skill.id}>
              <div className="card-content">
                <h3 className="skill-title">{skill.title}</h3>
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="skill-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

        <div className="text-section">
        <h2>My Skills & Interests</h2>
        <p id="typing-paragraph">
          I’m a versatile developer with a passion 
          for blending creativity and technology. 
          Skilled in both Web and Full Stack Development, 
          I build responsive, user-friendly applications. 
          My background in Competitive Programming sharpens 
          my problem-solving abilities, while my Prompting 
          and Reasoning Skills enhance creativity and logical 
          thinking. Beyond coding, I enjoy Photography, Editing, 
          Drawing, and Painting, which fuel my visual storytelling 
          and artistic expression. Together, these skills reflect my 
          drive to create innovative and meaningful digital experiences.
        </p>
        <a href="https://www.linkedin.com/in/susmitha-pottipogu-b7256428b/" target="_blank" rel="noopener noreferrer">
          <button className="hire-button">Hire Me</button>
        </a>
      </div>
    </div>
  );
};

export default CardCarousel;