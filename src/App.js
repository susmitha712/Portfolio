import './App.css';
import Navbar from './Navbar';
import WelcomeCard from './WelcomeCard';
// import Starfield from './Starfield';
import CardCarousel from './CardCarousel';
import SkillIcons from './SkillIcons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Certificates from './Certificates';
import Education from './Education';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      {/* Welcome section (no starfield behind it) */}
      <WelcomeCard />

      {/* Global starfield, stays fixed behind all sections */}
     

      {/* Overlayed content on top of starfield */}
      <div className="overlay">
        <CardCarousel />
        <SkillIcons />
        <Education />
        <Projects />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
}

export default App;
