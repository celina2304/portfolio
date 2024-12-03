import { Page } from "../types/components";

const pages: Page[] = [
  {
    path: "/about",
    scroll: "HOMEPAGE-AboutSection",
    title: "About",
    description: "Learn more about me on this page",
  },
  {
    path: "/contact",
    scroll: "HOMEPAGE-ContactMeSection",
    title: "Contact",
    description: "Contact me here on this page",
  },
  {
    path: "/projects",
    scroll: "HOMEPAGE-ProjectsSection",
    title: "Projects",
    description: "Projects that I have made",
  },
  {
    path: "/resume",
    scroll: "HOMEPAGE-ResumeSection",
    title: "Resume",
    description: "View or Download my resume",
  },
];

export default pages;
