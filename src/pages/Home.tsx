import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ProjectSection from "../components/Home/ProjectsSection";
import SkillsSection from "../components/Home/SkillsSection";
import ContactMeSection from "../components/Home/ContactMeSection";
import ResumeSection from "../components/Home/ResumeSection";
import useTrackSectionDetails from "../hooks/useTrackSectionStart";

export default function Home() {
  const sections = {
    hero: "HOMEPAGE-HeroSection",
    about: "HOMEPAGE-AboutSection",
    project: "HOMEPAGE-ProjectsSection",
    skills: "HOMEPAGE-SkillsSection",
    contact: "HOMEPAGE-ContactMeSection",
    resume: "HOMEPAGE-ResumeSection",
  };
  useTrackSectionDetails(sections.hero);
  useTrackSectionDetails(sections.about);
  useTrackSectionDetails(sections.project);
  useTrackSectionDetails(sections.skills);
  useTrackSectionDetails(sections.contact);
  useTrackSectionDetails(sections.resume);

  return (
    <>
      <HeroSection id={sections.hero} />
      <AboutSection id={sections.about} />
      <ProjectSection id={sections.project} />
      <SkillsSection id={sections.skills} />
      <ContactMeSection id={sections.contact} />
      <ResumeSection id={sections.resume} />
    </>
  );
}
