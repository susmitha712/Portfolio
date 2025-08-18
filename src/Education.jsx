import React, { useEffect, useRef, useState } from "react";
import "./Education.css";

const educationData = [
  { 
    institution: "T.M.RAO HIGH SCHOOL",
    title: "Bhattiprolu 2020 - X Class(9.8 CGPA)",
    
  },
  {
    
    institution: "K.S.K GIRLS Jr COLLEGE",
    title: "Bhattiprolu 2020-2022 - Intermediate(86%)",
    
  },
  {
   
    institution: "GMR INSTITUTE OF TECHNOLOGY",
    title: "RZM 2022-2026 - BTech(CSE) - CGPA(8.5)",
    
  },
  { 
    institution: "ACM STUDENT CHAPTER(GMRIT)",
    title: "WEB LEAD & EVENT MANAGER - 2024-2025 ",
  },
];

const Education = () => {
  const [progressHeight, setProgressHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
  const handleScroll = () => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const elementTop = containerRef.current.offsetTop;
    const elementHeight = containerRef.current.offsetHeight;

    // How much we've scrolled through the container
    let progress =
      ((scrollY + windowHeight / 2 - elementTop) / elementHeight) * 100;

    // Clamp between 0 and 100
    progress = Math.max(0, Math.min(progress, 100));
    setProgressHeight(progress);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll(".timeline-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="edu" id="Education">
      <h1>Educational Journey</h1>
    <div className="education-container" ref={containerRef}>
    
       
      <div className="timeline-line">
        <div
          className="timeline-progress"
          style={{ height: `${progressHeight}%` }}
        ></div>
      </div>

      {educationData.map((edu, index) => (
        <div
          key={index}
          className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`}
        >
           
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            
            <h2>{edu.institution}</h2>
            <span className="timeline-year">{edu.year}</span>
            <h3>{edu.title}</h3>
            
            {/* <p>{edu.description}</p> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Education;
