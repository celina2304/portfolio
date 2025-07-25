// import { useState } from "react";
import { FunctionalComponentProps } from "../../types/components";

// constants
import skillSet from "../../constants/skills";

const SkillsSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  // const [activeSkill, setActiveSkill] = useState<number>(-1);

  return (
    <section
      id={id}
      className="p-section-mobile md:p-section-xl 2xl:p-section-2xl  md:h-[100vh] relative text-green_yellow"
    >
      <div className="text-center bg-transparent font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 2xl:text-tusker-heading 2xl:pb-10 px-2 text-green_yellow">
        Skills I have
      </div>
      <br />
      <div className="flex flex-wrap justify-center gap-10">
        {skillSet.map((skill, skillIndex) => {
          return (
            <img
              key={`${skillIndex}-skill-skills-section`}
              src={skill.dark}
              className="w-[100px] h-[100px] m-3 md:m-5"
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
