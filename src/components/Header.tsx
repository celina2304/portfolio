// import { Link, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import pages from "../constants/pages";
import Button from "./ui/Button";
import { LINKS } from "../constants/links";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { easeInOut, motion } from "framer-motion";
import MobileNav from "./ui/MobileNav";
import logo from "../assets/images/logo/portfoliologo-black.svg"
import useScrollToSection from "../hooks/useScrollToSection";

export default function Header() {
  // const location = useLocation();
  const scrollToSection = useScrollToSection();
  const innerHeight = useSelector(
    (state: RootState) => state.dimensions.innerHeight
  );
  return (
    <header 
      id="header"
      className={`${
        window.scrollY <= innerHeight && window.location.pathname === "/"
          ? ""
          : "backdrop-blur-sm shadow-md"
        } sticky md:h-auto inset-0 z-[100] font-medium uppercase flex items-center justify-between md:p-2 2xl:p-10`}
    >
      <Link to="/" className="hidden md:block pl-5">
        <img
          loading="lazy"
          src={logo}
          alt="icon"
          className="h-[50px] w-auto"
        />
      </Link>
      <ul className="hidden md:flex items-center justify-between text-sm gap-5 lg:gap-10">
        {pages?.map((page, index) => {
          if(page.path === "/") return;
          return(
          <li
            key={`header-page${page.title}_${index}`}
            className="cursor-pointer"
          onClick={() => scrollToSection(page?.scroll || "")}
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
                className={`underline-animation underline-primary-accent 2xl:text-3xl relative`}
              >
                {page.title}
              </motion.div>
          </li>
        )})}
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
        className="hidden md:flex items-center justify-end gap-4"
      >
        <Link 
          to={LINKS.GITHUB} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <Button onClick={() => {}} type="button" label="GITHUB ->" />
        </Link>
      </motion.div>

      <MobileNav pages={pages || []} />
    </header>
  );
}
