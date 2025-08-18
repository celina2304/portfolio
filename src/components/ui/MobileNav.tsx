import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";
import { useEffect, useRef } from "react";

// hooks 
import useScrollTo from "../../hooks/useScrollTo";

// types and constants
import { PathProps } from "../../types/components/mobileNav";
import { LINKS } from "../../constants/links";
import navigation from "../../constants/navigation";

// ui components
import Button from "./Button";

const navigationVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
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
    backgroundColor: "var(--background)",
    // width: "250px",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(25px at 40px 40px)",
    backgroundColor: "var(--primary-accent)",
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

const Path: React.FC<PathProps> = (props) => (
  <motion.path strokeWidth="4" strokeLinecap="round" {...props} />
);

const MobileNav: React.FC = () => {
  const scrollTo = useScrollTo();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        toggleOpen();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleOpen]);

  const handleItemClick = (i: number) => {
    toggleOpen();
    const timer = setTimeout(() => {
      scrollTo(navigation[i].sectionId || "");
    }, 800);

    return () => clearTimeout(timer);
  };

  return (
    <motion.nav
      ref={navRef}
      className={`absolute sm:hidden inset-0 w-[250px] h-[80px]`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={window.innerHeight}
      data-mobile-nav
    >
      <motion.div
        className={`absolute inset-0 w-48 h-[100vh] border-r-[1.5px] border-primary-text`}
        variants={sidebarVariants}
      />
      <motion.ul
        className={`p-6 ${isOpen ? "pointer-events-auto" : "pointer-events-none"} absolute  flex flex-col gap-5 top-[50px] h-[100vh]`}
        variants={navigationVariants}
      >
        {navigation.map((i, pageIndex) => {
          return (
            <motion.li
              className="cursor-pointer "
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleItemClick(pageIndex)}
              key={`menu-item-mobile-${pageIndex}`}
            >
              <div
                className={``}
              >
                {i.sectionName}
              </div>
            </motion.li>
          );
        })}
        <motion.li
          className="cursor-pointer "
          variants={menuItemVariants}
          key={`menu-item-mobile-head-github-button`}
        >
          <Link to={LINKS.GITHUB} target="__blank" className="flex items-center ">
            <Button
              type="button"
              variant="primary"
              label="GITHUB ->"
            />
          </Link>
        </motion.li>
      </motion.ul>
      <button
        onClick={() => {
          toggleOpen();
          console.log("clicking");

        }}
        className="absolute z-50 cursor-pointer left-[40px] top-[40px] -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] rounded-full flex items-center justify-center"
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          className="text-center"
        >
          <Path
            variants={{
              closed: {
                d: "M 2 2.5 L 20 2.5",
              },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            stroke="var(--primary-text)"
          />
          <Path
            stroke="var(--primary-text)"
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
            stroke="var(--primary-text)"
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
