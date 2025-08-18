// import React, { useState, useEffect } from 'react';
// import './WelcomeCard.css';


// const roles = ['web developer', 'full stack developer'];

// const WelcomeCard = () => {
//   const [roleIndex, setRoleIndex] = useState(0);
//   const [visibleLetters, setVisibleLetters] = useState([]);

//   useEffect(() => {
//     const current = roles[roleIndex].split('');
//     let index = 0;
//     setVisibleLetters([]);

//     const interval = setInterval(() => {
//       if (index < current.length) {
//         setVisibleLetters((prev) => [...prev, current[index]]);
//         index++;
//       } else {
//         clearInterval(interval);
//         setTimeout(() => {
//           setRoleIndex((prev) => (prev + 1) % roles.length);
//         }, 2000); // wait before switching word
//       }
//     }, 150); // typing speed

//     return () => clearInterval(interval);
//   }, [roleIndex]);

//   return (
//     <div className="welcome-card">
//       <div className="left">
//         <h2>This is</h2>
//         <h1>Susmitha</h1>
//         <div className="vertical-typing">
//           {visibleLetters.map((char, idx) => (
//             <span key={idx} style={{ animationDelay: `${idx * 0.05}s` }}>
//               {char}
//             </span>
//           ))}
//           <span className="cursor">|</span>
//         </div>
//       </div>
//       <div className="right">
//         <img src='./mine.jpg' alt="Profile" />
//       </div>
//     </div>
//   );
// };

// export default WelcomeCard;
import { useState, useEffect } from "react";
import "./WelcomeCard.css";

export default function WelcomeText() {
  const roles = ["FULLSTACK DEVELOPER", "WEB DEVELOPER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // switch every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="welcome-text">
      <div className="text-outline" data-text="THIS IS">THIS IS</div>
      <div className="text-outline" data-text="SUSMITHA">SUSMITHA</div>
      <div className="waterwave">{roles[index]}</div>
      <div className="right">
      <img src='./mine.jpg' alt="Profile" />
      </div>
    </div>
  );
}
