import { Link } from "react-router-dom";
// import icon from "../assets/react.svg";
import pages from "../constants/pages";
import Button from "./ui/Button";
import { LINKS } from "../constants/links";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { easeInOut, motion } from "framer-motion";
import MobileNav from "./ui/MobileNav";
import useScrollToSection from "../hooks/useScrollToSection";
// import Switch from "../components/ui/Switch";
import logo from "../assets/images/logo/portfoliologo.png"

export default function Header() {
  const scrollToSection = useScrollToSection();
  const scroll = useSelector((state: RootState) => state.scroll.scrollY);
  const innerHeight = useSelector(
    (state: RootState) => state.dimensions.innerHeight
  );
  return (
    <header
      className={`${
        scroll <= innerHeight
          ? ""
          : "backdrop-blur-sm md:border-b md:border-green_yellow"
      } bg-transparent sticky md:h-auto top-0 left-0 z-[100] font-medium uppercase flex items-center justify-between md:p-2 2xl:p-10`}
    >
      <Link to="/" className="hidden md:block bg-transparent pl-5">
        <img
          src={logo}
          alt="icon"
          className="h-[50px] w-auto bg-transparent"
        />
      </Link>
      <ul className="hidden md:flex bg-transparent items-center justify-between gap-5">
        {pages?.map((page, index) => (
          <li
            key={`header-page${page.title}_${index}`}
            className="bg-transparent cursor-pointer"
            onClick={() => scrollToSection(page.scroll || "")}
          >
            {/* <Link to={page.path}> */}
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
              className={`underline-animation ${
                scroll <= innerHeight * 1.5
                  ? "text-black underline-black"
                  : "text-green_yellow underline-green_yellow"
              } bg-transparent 2xl:text-3xl relative`}
            >
              {page.title}
            </motion.div>
            {/* </Link> */}
          </li>
        ))}
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
        className="hidden md:flex bg-transparent shadow-lg items-center justify-end gap-5 text-sm"
      >
        {/* dark mode vs light mode 
            <Switch /> */}
        <Link to={LINKS.GITHUB} className="bg-transparent" >
          <Button onClick={() => {}} type="button" label="GITHUB ->" />
        </Link>
      </motion.div>

      <MobileNav pages={pages || []} />
    </header>
  );
}
