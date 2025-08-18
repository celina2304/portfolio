import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// types
import { FunctionalComponentProps } from "../../types/components";
import Button from "../ui/Button";
import { useHeaderHeight } from "../../context/HeaderHeightContext";
import { LINKS } from "../../constants/links";
import useScrollTo from "../../hooks/useScrollTo";

const transitionSettings = {
  duration: 0.7,
  type: "spring",
  stiffness: 300,
  damping: 25,
  mass: 0.8
}


const HeroSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { headerHeight } = useHeaderHeight();
  const scrollTo = useScrollTo();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const bgTransparentY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={heroRef}
      id={id}
      className="max-w-full p-0 md:p-0 h-screen inset-0 relative w-full overflow-hidden"
      style={{
        marginTop: `-${headerHeight ?? 0}px`
      }}
    >
      {/* Sticky container web */}
      <div id="hero-front-web" className="hidden md:flex h-screen relative w-full">
        <motion.div
          style={{
            y: bgY,
            backgroundPosition: "right",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full bg-[url(/waves/waves1.svg)] bg-cover transform scale-y-[-1] mix-blend-multiply"
        />
        <motion.div
          style={{
            y: bgY,
            backgroundPosition: "left",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full bg-[url(/waves/waves2.svg)] bg-cover transform scale-y-[-1] mix-blend-multiply"
        />

        <motion.div style={{
          y: bgTransparentY
        }} className="absolute bottom-0 h-1/5 w-screen bg-gradient-to-t from-background to-transparent z-10" />
      </div>

      {/* Sticky container web */}
      <div id="hero-front-mob" className="md:hidden h-screen w-screen flex items-center justify-center overflow-hidden relative">
        <img src="/waves/waves2-mob.svg" className="absolute inset-0 h-full w-full object-cover" />
        <img src="/waves/waves1-mob.svg" className="absolute inset-0 h-full w-full object-cover" />
        <motion.div className="absolute bottom-0 h-1/5 w-screen bg-gradient-to-t from-background to-transparent" />
      </div>
      <motion.div style={{ y: window.innerWidth <= 450 ? 0 : textY }} className="p-10 text-3xl md:text-5xl absolute inset-0 h-screen max-w-2xl text-center m-auto flex flex-col gap-3 items-center justify-center z-10">
        <motion.h1 initial={{
          y: 20,
          opacity: 0
        }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...transitionSettings }} className="">Hi I'm CELINA</motion.h1>
        <motion.h3 initial={{
          y: 20,
          opacity: 0
        }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ...transitionSettings,
            delay: 0.2,
            duration: 0.8
          }} className="text-lg italic">"I design and build friendly, functional websites."</motion.h3>
        <motion.p initial={{
          y: 20,
          opacity: 0
        }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ...transitionSettings,
            delay: 0.4,
            duration: 0.9
          }} className="text-base">From sleek portfolios to complex web apps - I turn ideas into smooth, scroll-worthy experiences.</motion.p>
        <div className="flex gap-3">
          <motion.div initial={{
            y: 20,
            opacity: 0
          }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ...transitionSettings,
              delay: 0.6,
              duration: 0.8,
            }} className="">
            <Button onClick={() => scrollTo("projects")} variant="secondary" label="Projects" />
          </motion.div>
          <motion.div initial={{
            y: 20,
            opacity: 0
          }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ...transitionSettings,
              delay: 0.7,
              duration: 0.8,
            }} className="">
            <Button onClick={() => scrollTo("resume")} variant="secondary" label="Resume" />
          </motion.div>
          <motion.div initial={{
            y: 20,
            opacity: 0
          }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              ...transitionSettings,
              delay: 0.8,
              duration: 0.8,
            }} className="">
            <Link to={LINKS.LINKEDIN} target="__blank">
              <Button variant="secondary" label="Linkedin" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
