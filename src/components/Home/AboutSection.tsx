// const mainText = "I'm a frontend developer with hands-on experience in React.js, Next.js, and TypeScript. My skill set extends to backend development, including Node.js, Express, API integration, and payment gateway solutions. I'm passionate about building seamless, dynamic web experiences that bridge the gap between frontend and backend, with a focus on clean, efficient code and user-centered design. Whether it's crafting intuitive UIs or implementing robust server-side functionality, I always aim to create projects that stand out."

import { motion } from "framer-motion";

interface MotionTextProps {
  delay: number;
  text: string;
  type: "solid" | "outline";
}

const GreenText: React.FC<MotionTextProps> = (props) => {
  return (
    <motion.span
      initial={{
        color: props.type === "solid" ? "black" : "#b0fe76",
        y: 120,
        // backgroundColor: "#black",
        opacity: 0,
      }}
      whileInView={{
        color: props.type === "solid" ? "" : "black",
        y: 0,
        // backgroundColor: "#b0fe76",
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay: props.delay,
      }}
      viewport={{ once: false, amount: 0.5 }}
      className={` ${
        props.type === "solid"
          ? " text-green_yellow"
          : "text-stroke-green_yellow-DEFAULT"
      } font-tusker bg-transparent font-medium text-tusker-subheading uppercase`}
    >
      {props.text}
    </motion.span>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section className="relative text-center p-section-xl">
      <motion.div className="bg-transparent font-tusker font-medium text-tusker-subheading uppercase text-green_yellow">
        <GreenText text="Building the web" type="solid" delay={0.1} />{" "}
        <GreenText text="from front to back" type="outline" delay={0.1} />{" "}
        <GreenText text="one line of code" type="solid" delay={0.1} />{" "}
        <GreenText text="at a time." type="outline" delay={0.1} />{" "}
      </motion.div>
      <div className="text-green_yellow w-[70%] mx-auto py-5">
        My skill set extends to backend development, including Node.js, Express,
        API integration, and payment gateway solutions. I'm passionate about
        building seamless, dynamic web experiences that bridge the gap between
        frontend and backend, with a focus on clean, efficient code and
        user-centered design.
      </div>
    </section>
  );
};
export default AboutSection;
