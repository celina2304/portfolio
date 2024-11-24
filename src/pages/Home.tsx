import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ProjectSection from "../components/Home/ProjectsSection";
import SkillsSection from "../components/Home/SkillsSection";
import ContactMeSection from "../components/Home/ContactMeSection";
// import Dummy from "../components/Home/dummy";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
      <ContactMeSection />
      {/* <Dummy /> */}
    </>
  );
}
