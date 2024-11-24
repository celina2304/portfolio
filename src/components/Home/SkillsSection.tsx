import Button from "../ui/Button";

const skills = ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js"];

export default function SkillsSection() {
  return (
    <section className="p-section-xl relative text-green_yellow">
      <div className="text-center font-tusker uppercase text-tusker-subheading2 px-2 text-green_yellow">
        Skills I have
      </div>
      <br />
      <div className="grid grid-cols-4 gap-10">
        {skills.map((skill, skillIndex) => {
          return (
            <div
              key={`skill-${skillIndex}-${skill}`}
              className="hover:scale-[1.05] hover:transition-transform hover:ease-in-out duration-100 cursor-pointer hover:text-black border hover:bg-green_yellow border-green_yellow p-5 flex items-center justify-center text-2xl font-semibold"
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
}
