import { motion, useScroll, useTransform } from "framer-motion";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
// import bg1 from "../../assets/images/waves1.svg";
// import bg2 from "../../assets/images/waves2.svg";
// import bg3 from "../../assets/images/waves3.svg";
// import bg4 from "../../assets/images/waves4.svg";
import useScrollTracking from "../../hooks/useScrollInsideSection";
import CircularPathText from "../ui/CircularPathText";
import { useState } from "react";

const baseClass = {
  font: "uppercase inline-block bg-transparent text-tusker-heading text-stroke2-green_yellow-DEFAULT font-tusker",
  base: "h-[100vh] w-[55vw] flex flex-col justify-center",
  left: "text-right pr-4 bor der-r-[10px]",
  right: "pl-4 bor der-l-[10px]",
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

const HeroSection: React.FC = () => {
  // for hero section animation
  useScrollTracking("hero");
  const { scrollY } = useScroll();
  const scroll = useSelector((state: RootState) => state.scroll.scrollY);
  const innerHeight = useSelector(
    (state: RootState) => state.dimensions.innerHeight
  );
  const [hoveringOnCircle, setHoveringOnCircle] = useState<boolean>(false);

  const textColor = useTransform(
    scrollY,
    [0, 400], // Scroll range (0px to 100px)
    ["#000000", "#b0fe76"] // Color range
  );

  const calculateTranslateVal = (type: string): string => {
    const baseScroll = 50;
    const effectiveScroll = Math.max(scroll - baseScroll, 0);
    const translateValue = type === "left" ? -effectiveScroll : effectiveScroll;

    return `translateX(${translateValue}px)`;
  };

  return (
    <section className="-mt-[75px] relative h-[300vh] w-full">
      {/* Sticky container */}
      <div className="sticky bg-transparent top-0 z-20 h-[100vh] overflow-hidden flex">
        <motion.div
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url('/images/waves3.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "left top",
            color: "black",
            borderColor: textColor,
            transform: calculateTranslateVal("left"),
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          // className={`${baseClass.base} ${baseClass.left}`}
          className="absolute h-[100vh] w-[50vw] top-0 -z-20 right-0"
        ></motion.div>
        <motion.div
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url('/images/waves4.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "right top",
            color: "black",
            borderColor: textColor,
            transform: calculateTranslateVal("right"),
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          // className={`${baseClass.base} ${baseClass.left}`}
          className="absolute h-[100vh] w-[50vw]  top-0 -z-20 left-0"
        ></motion.div>
        <motion.div
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url('/images/waves1.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            color: "black",
            borderColor: textColor,
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
            backgroundImage: `url('/images/waves2.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            zIndex: 20,
            color: "black",
            borderColor: textColor,
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
      <div className="h-[100vh]"></div>
      <div
        id="hero-description"
        className={`h-[100vh] relative ${
          scroll > innerHeight * 2 ? "z-30" : ""
        } p-section-xl flex items-center justify-center text-6xl text-green_yellow overflow-hidden`}
      >
        <div className="pt-16 font-tusker text-tusker-home-text leading-[90px]">
          A{" "}
          <motion.div
            initial={{
              color: "#b0fe76",
              backgroundColor: "#black",
              opacity: 0,
            }}
            whileInView={{
              color: "black",
              backgroundColor: "#b0fe76",
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={`font-tusker bg-green_yellow text-black text-tusker-home-text inline`}
          >
            Frontend developer
          </motion.div>{" "}
          specializing in{" "}
          <motion.div
            initial={{
              color: "#b0fe76",
              backgroundColor: "#black",
              opacity: 0,
            }}
            whileInView={{
              color: "black",
              backgroundColor: "#b0fe76",
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={`font-tusker bg-green_yellow text-black text-tusker-home-text inline`}
          >
            React, Next.js, Tailwind CSS.
          </motion.div>{" "}
          I build visually appealing and user-friendly web experiences.
        </div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-transparent">
          <div
            onMouseEnter={() => setHoveringOnCircle(true)}
            onMouseLeave={() => setHoveringOnCircle(false)}
            className="relative bg-transparent"
          >
            <div className="absolute top-0 left-0  w-[300px] h-[300px] bg-transparent">
              <CircularPathText
                text="FRONTEND >> BACKEND >> DEVOPS >>"
                cls="text-green_yellow"
                direction={hoveringOnCircle ? "right" : "left"}
              />
            </div>
            <div className="absolute top-[55px] left-[55px]  w-[190px] h-[190px] bg-transparent">
              <CircularPathText
                text="FRONTEND << BACKEND << DEVOPS <<"
                cls="text-green_yellow"
                direction={hoveringOnCircle ? "left" : "right"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
