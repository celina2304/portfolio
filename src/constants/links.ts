export const LINKS = {
  GITHUB: "https://github.com/celina2304",
  LINKEDIN: "https://www.linkedin.com/in/celina-a3bb18190/",
  INSTAGRAM: "https://www.instagram.com/celiinna__/",
  FACEBOOK: "",
  DISCORD: "",
  PERSONAL_WEBSITE: "https://celina-portfolio.netlify.app/",
  VERCEL: "https://vercel.com/celina2304s-projects",
  PROJECTS: {
    TASKY: "",
  }
} as const;

export type LinkKeys = keyof typeof LINKS;
