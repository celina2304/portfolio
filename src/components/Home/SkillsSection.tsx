import { FunctionalComponentProps } from "../../types/components";
import Button from "../ui/Button";

const skills = ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"];

const SkillsSection: React.FC<FunctionalComponentProps> = ({ id }) => {
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
        {skills.map((skill, skillIndex) => {
          return (
            <div
              key={`skill-${skillIndex}-${skill}`}
              className="hover:scale-[1.05] hover:transition-transform hover:ease-in-out duration-100 cursor-pointer hover:text-black border hover:bg-green_yellow border-green_yellow p-5 flex flex-wrap items-center justify-center md:text-2xl 2xl:text-tusker-card-heading font-semibold"
            >
              {skill}
            </div>
          );
        })}
      </div>
      <div className="pt-10 flex items-center justify-center">
        <Button
          onClick={() => {
            // navigate("/projects")
          }}
          type="button"
          label="View more"
        />
      </div>
    </section>
  );
};

export default SkillsSection;
