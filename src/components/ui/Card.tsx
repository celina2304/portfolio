import { motion } from "framer-motion";
import { projectCardProps } from "../../types/components/projectCard";

export const Card: React.FC<projectCardProps> = (props) => {
  const { projectDetails, index = 1 } = props;

  return (
    <motion.div
      key={`project-card${index}`}
      initial={{
        y: 50,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      whileHover={{
        y: -8,
        // scale: 1.01,
        transition: {
          type: "spring",
          stiffness: 1000,
          damping: 60,
          mass: 0.2
        }
      }}
      className="h-full flex items-center justify-center"
    >
      <div className="cursor-pointer rounded-lg duration-200 ease-in-out hover:shadow-projectCard relative h-full max-w-sm 2xl:max-w-screen-2xl border-[1.5px] border-primary-text flex flex-col"
      onClick={() => {
        window.open(projectDetails.link, "_blank");
      }}>
        <img 
          loading="lazy"
          className="w-full h-40 object-cover border-b-[1.5px] border-primary-text rounded-t-lg flex-shrink-0"
          src={projectDetails.images[0]}
          alt="Sunset in the mountains"
        />
        <div className="p-2 flex flex-col flex-1">
          <h4
            className={`font-semibold uppercase text-lg border-primary-text relative z-30 flex-shrink-0`}
          >
            {projectDetails.heading}
          </h4>
          <p
            className={`relative z-20 text-xs 2xl:text-base flex-1`}
          >
            {projectDetails.description}
          </p>
        </div>
        <div className="p-3 flex rounded-b-lg gap-1 items-center flex-wrap justify-start flex-shrink-0">
          {projectDetails.skills.map((skill, skillIndex) => (
            <span
              key={`project-card${index}-skill${skillIndex}`}
              className="border-primary-accent border-2 rounded-md px-1 py-[0.05rem] text-xs 2xl:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
