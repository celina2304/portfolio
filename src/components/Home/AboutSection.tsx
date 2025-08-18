//types
import { FunctionalComponentProps } from "../../types/components";
import { motion } from "framer-motion";

const AboutSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="min-h-[50vh] relative 2xl:min-h-0 text-center"
    >
      <motion.h2 initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="heading">
        Building the web <span className="outline-dashed outline-primary-accent">from front to back</span> one line of code <span>at a time.</span>
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }} className="paragraph">
        I&apos;m a MERN stack developer passionate about building dynamic, scalable, and user-focused web applications. Skilled in React, Next.js, TypeScript, Vite, and Redux on the frontend, and experienced with Node.js, Express, REST APIs, and payment gateway integration on the backend. I focus on clean, efficient code and delivering seamless user experiences from start to finish.
      </motion.p>
    </section>
  );
};
export default AboutSection;
