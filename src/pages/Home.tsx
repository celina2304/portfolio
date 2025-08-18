import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ProjectSection from "../components/Home/ProjectsSection";
import SkillsSection from "../components/Home/SkillsSection";
import ContactMeSection from "../components/Home/ContactMeSection";
import ResumeSection from "../components/Home/ResumeSection";

// constants
import sections from "../constants/sections"

const Home: React.FC = () => {
  return (
    sections && <>
      <HeroSection id="hero" />
      <AboutSection id="about" />
      <ProjectSection id="projects" />
      <SkillsSection id="skills" />
      <ContactMeSection id="contact" />
      <ResumeSection id="resume" />
    </>
  );
}

export default Home;
