// import { Link, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import navigation from "../constants/navigation";
import Button from "./ui/Button";
import { LINKS } from "../constants/links";
import { easeInOut, motion } from "framer-motion";
import MobileNav from "./ui/MobileNav";
import logo from "../assets/images/logo/portfoliologo-black.svg"
import useScrollTo from "../hooks/useScrollTo";
import { useHeaderHeight } from "../context/HeaderHeightContext";
import { useEffect, useReducer } from "react";

export default function Header() {
  const scrollToSection = useScrollTo();
  const { headerHeight, setHeaderHeight } = useHeaderHeight();

  // dummy reducer to force re-render
  const [, forceRender] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const header = document.getElementById("header");

    // initial height
    setHeaderHeight(header?.offsetHeight ?? 0);

    // observe height changes
    const observer = new ResizeObserver(() => {
      setHeaderHeight(header?.offsetHeight ?? 0);
    });
    if (header) observer.observe(header);

    // scroll listener to force re-render
    const handleScroll = () => forceRender();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
    id="header"
    className={`sticky top-0 z-[100] transition-all duration-300 ease-in-out ${
      (window.scrollY > headerHeight) ? "bg-background/50 backdrop-blur-sm shadow-sm" : ""
    }`}
    >
      <nav className={`hidden h-auto sm:flex font-medium uppercase items-center justify-between sm:px-4 sm:py-2 2xl:p-8 transition-all duration-300 ease-in-out`}>
        <Link to="/" className="">
          <img
            loading="lazy"
            src={logo}
            alt="icon"
            className="h-10 md:h-12 2xl:h-[3vw]"
          />
        </Link>
        <ul className="flex items-center justify-between text-sm gap-5 lg:gap-10">
          {navigation?.map((page, index) => {
            return (
              <li
                key={`header-page${page.sectionName}_${index}`}
                className="cursor-pointer"
                onClick={() => scrollToSection(page.sectionId || "")}
              >
                {/* <Link to={page.path}>
            </Link> */}
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
                    duration: 0.7 + 0.1 * index,
                    ease: easeInOut,
                  }}
                  className={`underline-animation underline-primary-accent 2xl:text-xl relative`}
                >
                  {page.sectionName}
                </motion.div>
              </li>
            )
          })}
        </ul>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            ease: easeInOut,
          }}
          className="flex items-center justify-end"
        >
          <Link
            to={LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <Button type="button" label="GITHUB ->" />
          </Link>
        </motion.div>
      </nav>
      <MobileNav />
    </header>
  )
}
