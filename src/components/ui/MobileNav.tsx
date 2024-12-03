import { motion, useCycle, MotionProps } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Page } from "../../types/components";
import { Link } from "react-router-dom";
import { LINKS } from "../../constants/links";
import Button from "./Button";
import useScrollToSection from "../../hooks/useScrollToSection";

const navigationVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    // backgroundColor: "transparent",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      backgroundColor: { delay: 0.5 },
    },
  },
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface PathProps extends MotionProps {
  d?: string; // Optional `d` attribute for the path
  stroke?: string;
}

interface MobileNavProps {
  pages: Page[];
}

const Path: React.FC<PathProps> = (props) => (
  <motion.path strokeWidth="3" strokeLinecap="round" {...props} />
);

const MobileNav: React.FC<MobileNavProps> = ({ pages }) => {
  const scrollToSection = useScrollToSection();
  const { innerHeight } = useSelector((state: RootState) => state.dimensions);
  const { scrollY } = useSelector((state: RootState) => state.scroll);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const colorVal = scrollY <= innerHeight;

  const handleItemClick = (i: number) => {
    toggleOpen();
    const timer = setTimeout(() => {
      scrollToSection(pages[i].scroll || "");
    }, 800);

    return () => clearTimeout(timer);
  };

  return (
    <motion.nav
      className="absolute md:hidden top-0 left-0 bottom-0 bg-transparent w-[250px] h-[80px]"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={innerHeight}
    >
      <motion.div
        className={`absolute top-0 left-0 bottom-0 w-[250px] h-[100vh] ${
          scrollY <= innerHeight ? "bg-black" : "bg-green_yellow"
        } `}
        variants={sidebarVariants}
      />
      <motion.ul
        className={`p-6 absolute bg-transparent flex flex-col gap-5 top-[50px] w-[250px] h-[100vh]`}
        variants={navigationVariants}
      >
        <motion.li
          className="cursor-pointer bg-transparent"
          variants={menuItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          key={`menu-item-mobile-head-logo`}
        >
          <div
            className={`${
              colorVal ? "text-green_yellow" : "text-black"
            } font-tusker text-tusker-subheading2 bg-transparent `}
          >
            CELINA
          </div>
        </motion.li>
        {pages.map((i, pageIndex) => {
          return (
            <motion.li
              className="cursor-pointer bg-transparent"
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleItemClick(pageIndex)}
              key={`menu-item-mobile-${pageIndex}`}
            >
              <div
                className={`${
                  colorVal ? "text-green_yellow" : "text-black"
                } bg-transparent `}
              >
                {i.title}
              </div>
            </motion.li>
          );
        })}
        <motion.li
          className="cursor-pointer bg-transparent"
          variants={menuItemVariants}
          key={`menu-item-mobile-head-github-button`}
        >
          <Link to={LINKS.GITHUB} className="flex items-center bg-transparent">
            <Button
              onClick={() => {}}
              type="button"
              variant={`${colorVal ? "primary" : "light_primary"}`}
              label="GITHUB ->"
            />
          </Link>
        </motion.li>
      </motion.ul>
      <button
        onClick={() => toggleOpen()}
        className="absolute cursor-pointer top-[16px] left-[27px] w-[50px] h-[50px] bg-transparent rounded-[50%]"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          className="bg-transparent"
        >
          <Path
            variants={{
              closed: {
                d: "M 2 2.5 L 20 2.5",
              },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            stroke={colorVal ? "#b0fe76" : "#000000"}
          />
          <Path
            stroke={colorVal ? "#b0fe76" : "#000000"}
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: {
                opacity: 1,
              },
              open: {
                opacity: 0,
              },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            stroke={colorVal ? "#b0fe76" : "#000000"}
            variants={{
              closed: {
                d: "M 2 16.346 L 20 16.346",
              },
              open: {
                d: "M 3 2.5 L 17 16.346",
              },
            }}
          />
        </svg>
      </button>
    </motion.nav>
  );
};

export default MobileNav;
