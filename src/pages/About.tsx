import pages from "../constants/pages";
import AboutHeroSection from "../components/About/AboutHeroSection";
import React from "react";
// import Skills from "../components/About/newSection";

const About: React.FC = () => {
  const sections = pages.find(page => page.title == "About")?.sections;

  return <>
    <AboutHeroSection id={sections?.[0].sectionId ?? "About-Hero-Section"} />
    {/* <Skills /> */}
  </>
}

export default About;
