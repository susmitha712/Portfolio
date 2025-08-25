
// import React, { useState, useEffect } from "react";

// const TypewriterParagraph = ({ text, speed = 40 }) => {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text.charAt(i));
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return (
//     <p id="typewriter" style={{ 
//         color: "white", 
//         fontSize: "18px", 
//         lineHeight: "1.6", 
//         maxWidth: "800px", 
//         whiteSpace: "normal",
//         borderRight: "none"  
//     }}>
//       {displayedText}
  
//     </p>
//   );
// };

// export default TypewriterParagraph;
// TypewriterParagraph.jsx
import React, { useState, useEffect, useRef } from "react";

const TypewriterParagraph = ({ text, speed = 40 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setDisplayedText(""); // reset when out of view
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);

  return (
    <p
      ref={ref}
      id="typewriter"
      style={{
        color: "white",
        fontSize: "18px",
        lineHeight: "1.6",
        maxWidth: "800px",
        whiteSpace: "normal",
        borderRight: "none",
      }}
    >
      {displayedText}
    </p>
  );
};

export default TypewriterParagraph;
