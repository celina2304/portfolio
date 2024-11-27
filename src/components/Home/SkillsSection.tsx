import { useState } from "react";
import { FunctionalComponentProps } from "../../types/components";
// import Button from "../ui/Button";

const skills = ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"];

const skillSet = [
  {
    skill: "React",
    dark: "/images/skills/react.svg",
    light: "/images/skills/react.svg",
  },
  {
    skill: "CSS",
    dark: "/images/skills/css.svg",
    light: "/images/skills/css.svg",
  },
  {
    skill: "Git",
    dark: "/images/skills/git.svg",
    light: "/images/skills/git.svg",
  },
  {
    skill: "GitHub",
    dark: "/images/skills/github.svg",
    light: "/images/skills/github.svg",
  },
  {
    skill: "HTML",
    dark: "/images/skills/html.svg",
    light: "/images/skills/html.svg",
  },
  {
    skill: "Javascript",
    dark: "/images/skills/javascript.svg",
    light: "/images/skills/javascript.svg",
  },
  {
    skill: "MongoDB",
    dark: "/images/skills/mongodb.svg",
    light: "/images/skills/mongodb.svg",
  },
  {
    skill: "NodeJS",
    dark: "/images/skills/nodejs.svg",
    light: "/images/skills/nodejs.svg",
  },
  {
    skill: "Tailwind Css",
    dark: "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500",
    light:
      "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500",
  },
];

const SkillsSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const [activeSkill, setActiveSkill] = useState<number>(-1);

  return (
    <section
      id={id}
      className="p-section-mobile md:p-section-xl 2xl:p-section-2xl  md:h-[100vh] relative text-green_yellow"
    >
      <div className="text-center bg-transparent font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 2xl:text-tusker-heading 2xl:pb-10 px-2 text-green_yellow">
        Skills I have
      </div>
      <br />
      <div className="flex flex-wrap gap-10">
        {skillSet.map((skill, skillIndex) => {
          return (
            <img
              key={`${skillIndex}-skill-skills-section`}
              src={skill.dark}
              className="h-[100px] w-auto m-5"
            />
            // <img src={skill.light} className="h-[80px] w-auto bg-green-100" />
          );
        })}
      </div>
      {/* <div className="pt-10 flex items-center justify-center">
        <Button
          onClick={() => {
            // navigate("/projects")
          }}
          type="button"
          label="View more"
        />
      </div> */}
    </section>
  );
};

export default SkillsSection;
