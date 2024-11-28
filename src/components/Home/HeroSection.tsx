import { motion } from "framer-motion";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import useScrollToNextSection from "../../hooks/useScrollInsideSection";
import CircularPathText from "../ui/CircularPathText";
import { FunctionalComponentProps } from "../../types/components";

const baseClass = {
  font: "uppercase inline-block bg-transparent text-tusker-heading-mobile md:text-tusker-heading text-black font-tusker",
  base: "h-[100vh] w-[55vw] flex flex-col justify-center",
  left: "text-right pr-2 md:pr-4",
  right: "pl-2 md:pl-4",
};

interface MainMotionTextProps {
  delay: number;
  text: string;
}

const MainMotionText: React.FC<MainMotionTextProps> = (props) => {
  return (
    <motion.div
      initial={{
        y: 150,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: props.delay,
      }}
      className={`${baseClass.font}`}
    >
      {props.text}
    </motion.div>
  );
};

const HeroSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  // for hero section animation
  const { scrollY, scrollDirection } = useSelector(
    (state: RootState) => state.scroll
  );
  const { innerHeight, innerWidth } = useSelector(
    (state: RootState) => state.dimensions
  );
  const sectionDetails = useSelector(
    (state: RootState) => state.sectionScroll.sections
  );
  const currentSection = sectionDetails.find((item) => item.sectionId === id);
  useScrollToNextSection({
    scrollStart: currentSection?.startPosition,
    scrollEnd:
      currentSection?.sectionHeight !== undefined
        ? innerHeight * 2 - 50
        : undefined,
  });

  const calculateTranslateVal = (type: string): string => {
    const baseScroll = 50;
    const effectiveScroll = Math.max(scrollY - baseScroll, 0);
    const translateValue = type === "left" ? -effectiveScroll : effectiveScroll;

    return `translateX(${translateValue}px)`;
  };

  return (
    <section
      id={id}
      className="-mt-[85px] 2xl:-mt-[140px] relative h-[310vh] w-full"
    >
      {/* Sticky container */}
      <div className="sticky bg-transparent top-0 z-20 h-[100vh] overflow-hidden flex">
        <motion.div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              innerWidth <= 450
                ? `url('/images/waves3-mob.svg')`
                : `url('/images/waves3.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "left top",
            color: "#000000",
            transform: calculateTranslateVal("left"),
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          // className={`${baseClass.base} ${baseClass.left}`}
          className="absolute h-[100vh] w-[50vw] top-0 -z-20 right-2"
        ></motion.div>
        <motion.div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              innerWidth <= 450
                ? `url('/images/waves4-mob.svg')`
                : `url('/images/waves4.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "right top",
            color: "#000000",
            transform: calculateTranslateVal("right"),
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          // className={`${baseClass.base} ${baseClass.left}`}
          className="absolute h-[100vh] w-[50vw] top-0 -z-20 left-2"
        ></motion.div>
        <motion.div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              innerWidth <= 450
                ? `url('/images/waves1-mob.svg')`
                : `url('/images/waves1.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            color: "#000000",
            transform: calculateTranslateVal("left"),
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`${baseClass.base} ${baseClass.left}`}
        >
          <MainMotionText text="HI" delay={0.1} />
          <br />
          <MainMotionText text="THERE!" delay={0.2} />
        </motion.div>
        <motion.div
          style={{
            backgroundColor: "transparent",
            backgroundImage:
              innerWidth <= 450
                ? `url('/images/waves2-mob.svg')`
                : `url('/images/waves2.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            zIndex: 20,
            color: "#000000",
            transform: calculateTranslateVal("right"),
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`${baseClass.base} ${baseClass.right}`}
        >
          <MainMotionText text="I'M" delay={0.15} />
          <br />
          <MainMotionText text="CELINA" delay={0.25} />
        </motion.div>
      </div>
      <div className="h-[100vh] "></div>
      <div
        id="hero-description"
        className={`h-[110vh] md:h-[100vh] relative ${
          scrollY > innerHeight * 2 ? "z-30" : ""
        } p-section-mobile md:p-section-xl 2xl:p-section-2xl 2xl:w-[70%] 2xl:mx-auto flex items-center justify-center text-6xl text-green_yellow overflow-hidden`}
      >
        <div className="md:pt-16 font-tusker text-tusker-home-text-mobile md:text-tusker-home-text md:leading-[90px]">
          A{" "}
          <motion.div
            initial={{
              color: "var(--color-green_yellow-DEFAULT)",
              backgroundColor: "#000000",
              opacity: 0,
            }}
            whileInView={{
              color: "#000000",
              backgroundColor: "var(--color-green_yellow-DEFAULT)",
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={`font-tusker bg-green_yellow text-black text-tusker-home-text-mobile md:text-tusker-home-text inline`}
          >
            Frontend developer
          </motion.div>{" "}
          specializing in{" "}
          <motion.div
            initial={{
              color: "var(--color-green_yellow-DEFAULT)",
              backgroundColor: "#000000",
              opacity: 0,
            }}
            whileInView={{
              color: "#000000",
              backgroundColor: "var(--color-green_yellow-DEFAULT)",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={`font-tusker  text-black text-tusker-home-text-mobile md:text-tusker-home-text inline`}
          >
            React, Next.js, Tailwind CSS.
          </motion.div>{" "}
          I build visually appealing and user-friendly web experiences.
        </div>
        <div className="absolute -bottom-[70px] -right-[35px] md:-bottom-5 md:right-0 w-[300px] h-[300px] bg-transparent">
          <div className="absolute top-0 left-0  w-[300px] h-[300px] bg-transparent">
            <CircularPathText
              text="FRONTEND >> BACKEND >> DEVOPS >>"
              cls="text-green_yellow"
              direction={scrollDirection === "up" ? "right" : "left"}
            />
          </div>
          <div className="absolute top-[55px] left-[55px]  w-[190px] h-[190px] bg-transparent">
            <CircularPathText
              text="FRONTEND << BACKEND << DEVOPS <<"
              cls="text-green_yellow"
              direction={scrollDirection === "up" ? "left" : "right"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
