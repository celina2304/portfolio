import { Page } from "../types/components";

const pages: Page[] = [
  {
    path: "/",
    scroll: "HOMEPAGE-HomeSection",
    title: "Home",
    description: "This is my main page",
    sections: [
      { sectionName: "hero", sectionId: "HOMEPAGE-HeroSection" },
      { sectionName: "about", sectionId: "HOMEPAGE-AboutSection" },
      { sectionName: "project", sectionId: "HOMEPAGE-ProjectsSection" },
      { sectionName: "skills", sectionId: "HOMEPAGE-SkillsSection" },
      { sectionName: "contact", sectionId: "HOMEPAGE-ContactMeSection" },
      { sectionName: "resume", sectionId: "HOMEPAGE-ResumeSection" },
    ]
  },
  {
    path: "/about",
    scroll: "HOMEPAGE-AboutSection",
    title: "About",
    description: "Learn more about me on this page",
    sections: [
      { sectionName: "about-hero", sectionId: "ABOUTPAGE-AboutHeroSection" },
    ]
  },
  {
    path: "/contact",
    scroll: "HOMEPAGE-ContactMeSection",
    title: "Contact",
    description: "Contact me here on this page",
    sections: []
  },
  {
    path: "/projects",
    scroll: "HOMEPAGE-ProjectsSection",
    title: "Projects",
    description: "Projects that I have made",
    sections: []
  },
  {
    path: "/resume",
    scroll: "HOMEPAGE-ResumeSection",
    title: "Resume",
    description: "View or Download my resume",
    sections: []
  },
];

export default pages;
