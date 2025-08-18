import React from 'react';
import './SkillIcons.css';

const categories = {
  "Programming Languages": [
    { name: 'C', icon: '/assets/c.png' },
    { name: 'Python', icon: '/assets/python.png' },
    { name: 'Java', icon: '/assets/java.png' },
  ],
  "Web Development": [
    { name: 'HTML', icon: '/assets/html.png' },
    { name: 'CSS', icon: '/assets/css.png' },
    { name: 'JavaScript', icon: '/assets/js.png' },
    { name: 'React', icon: '/assets/react.png' },
    { name: 'Angular', icon: '/assets/angular.png' },
    { name: 'Node.js', icon: '/assets/nodejs.png' },
  ],
  "Database": [
    { name: 'MySQL', icon: '/assets/mysql.png' },
    { name: 'Oracle', icon: '/assets/oracle.png' },
    { name: 'MongoDB', icon: '/assets/mongodb.png' },
  
  ],
  "Tools": [
    { name: 'Git', icon: '/assets/git.png' },
    { name: 'GitHub', icon: '/assets/github_3.png' },
    { name: 'Postman', icon: '/assets/postman.png' },
    { name: 'MSOffice', icon: '/assets/MSOffice.png' },

  ],
};

const SkillIcons = () => {
  return (
    <div className="skills-section" id="learnings">
      <h1>Learnings</h1>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} className="category-container">
          <h2 className="category-title">{category}</h2>
          <div className="skills-marquee">
            <div className="marquee-content">
              {[...skills, ...skills].map((skill, index) => (
                <div className="skill-icon-wrapper" key={index}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                    title={skill.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillIcons;
