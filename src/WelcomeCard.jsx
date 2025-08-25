
import { useState, useEffect } from "react";
import "./WelcomeCard.css";

export default function WelcomeText() {
  const roles = ["FULLSTACK DEVELOPER", "WEB DEVELOPER"];
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = deleting ? 50 : 120;

    if (!deleting && charIndex === currentRole.length) typingSpeed = 1500;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setDeleting(true);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <div className="welcome-text" >
  <div className="left-text">
    <div className="text-outline" data-text="THIS IS">THIS IS</div>
    <div className="text-outline" data-text="SUSMITHA">SUSMITHA</div>
    <div className="typing-neon">{displayedText}</div>
  </div>

  <div className="right">
    <img src="./mine.jpg" alt="Profile" />
  </div>
</div>

  );
}
