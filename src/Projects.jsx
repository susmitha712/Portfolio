// Projects.jsx
import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiPlay } from "react-icons/fi";

const projects = [
  {
    id: 5,
    title: "Student Event Registration System",
    description: "Built a Student Event Management System to streamline event creation, registration, and management for college student chapters, enabling organizers to post event details and students to register seamlessly through an interactive web interface.",
    image: "./assets/calculator.jpg",
    github: "https://github.com/susmitha712/StudentEventRegistrationSystem",
    video: "./assets/stu.mp4",
    size: "large",
  },
  {
    id: 1,
    title: "Automatic Question Paper Generator",
    description: "This project allows the admin to manage the question database, while faculty can upload question papers. The admin can generate question papers instantly, streamlining exam preparation and reducing manual effort.",
    image: "./assets/qp.png",
    github: "https://github.com/susmitha712/miniproject",
    video: "",
    size: "medium", 
  },
  {
    id: 2,
    title: "Stop Watch",
    description: "Developed a responsive stopwatch application with start, pause, lap, and reset functionality, enabling accurate time tracking. Built using HTML, CSS, and JavaScript with an intuitive and interactive user interface.",
    image: "./assets/watch.jpg",
    github: "https://github.com/susmitha712/PRODIGY_WD_02",
    video: "./assets/stopwatch.mp4",
    size: "small",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Created a dynamic weather application using HTML and CSS integrating a Weather API to display real-time temperature, conditions, and location-based forecasts. Designed with a clean, responsive interface for an engaging user experience.",
    image: "./assets/weather.jpg",
    github: "https://github.com/susmitha712/PRODIGY-WD-05",
    video: "./assets/weatherapp.mp4",
    size: "small",
  },
  {
    id: 4,
    title: "Calculator",
    description: "Developed a fully functional calculator using HTML, CSS, and JavaScript, capable of performing basic arithmetic operations with an intuitive and responsive interface.",
    image: "./assets/calculator.jpg",
    github: "https://github.com/susmitha712/calculator",
    video: "./assets/CALC.mp4",
    size: "small",
  },
 {
    id: 6,
    title: "portfolio",
    description: "Designed and developed a personal portfolio website to showcase my skills, projects, and achievements, featuring an interactive UI, responsive design, and smooth animations for an engaging user experience.",
    image: "./assets/calculator.jpg",
    github: "https://github.com/susmitha712/calculator",
    video: "./assets/CALC.mp4",
    size: "medium",
  },
  
  
];

export default function Projects() {
  return (
    <section className="projects-section" aria-label="Projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <article
            key={p.id}
            className={`project-card ${p.size}`}
            tabIndex={0}
            aria-labelledby={`proj-title-${p.id}`}
            role="group"
          >
            <div className="card-scene">
              <div className="card-surface">
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${p.image})` }}
                  role="img"
                  aria-label={`${p.title} screenshot`}
                />
                <div className="card-body">
                  <h3 id={`proj-title-${p.id}`} className="card-title">
                    {p.title}
                  </h3>
                  <p className="card-desc">{p.description}</p>
                </div>
                <div className="card-footer">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={`Open ${p.title} on GitHub`}
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={p.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn"
                    aria-label={`View ${p.title} demo video`}
                  >
                    <FiPlay className="play-icon" />
                    <span>View</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
