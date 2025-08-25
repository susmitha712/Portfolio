// ParticlesBackground.jsx
import React from "react";
import "./Particles.css";

const ParticlesBackground = () => {
  const particles = Array.from({ length: 50 }); // number of particles

  return (
    <div className="particles-bg">
      {particles.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${5 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
