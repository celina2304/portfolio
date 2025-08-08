import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ProjectSection from "../components/Home/ProjectsSection";
import SkillsSection from "../components/Home/SkillsSection";
import ContactMeSection from "../components/Home/ContactMeSection";
import ResumeSection from "../components/Home/ResumeSection";

// hooks
import useTrackSectionDetails from "../hooks/useTrackSectionStart";

// constants;
// import sections from "../constants/sections";
import pages from "../constants/pages";

const Home: React.FC = () => {
  const sections = pages.find((page) => page.title == "Home")?.sections ?? null;
  sections?.forEach((section) => useTrackSectionDetails(section.sectionId));
  

  return (
    <>
      <HeroSection id={sections?.[0]?.sectionId ?? "hero-section-home"} />
      <AboutSection id={sections?.[1]?.sectionId ?? "about-section-home"} />
      <ProjectSection id={sections?.[2]?.sectionId ?? "project-section-home"} />
      <SkillsSection id={sections?.[3]?.sectionId ?? "skills-section-home"} />
      <ContactMeSection id={sections?.[4]?.sectionId ?? "contactme-section-home"} />
      <ResumeSection id={sections?.[5]?.sectionId ?? "resume-section-home"} />
    </>
  );
}

export default Home;
