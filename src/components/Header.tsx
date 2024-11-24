import { Link } from "react-router-dom";
import icon from "../assets/react.svg";
import pages from "../constants/pages";
import Button from "./ui/Button";
import { LINKS } from "../constants/links";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { easeInOut, motion } from "framer-motion";
// import Switch from "../components/ui/Switch";

export default function Header() {
  const scroll = useSelector((state: RootState) => state.scroll.scrollY);
  const innerHeight = useSelector(
    (state: RootState) => state.dimensions.innerHeight
  );
  return (
    <header
      className={`${
        scroll <= innerHeight
          ? ""
          : "backdrop-blur-sm border-b border-green_yellow"
      } bg-transparent sticky top-0 left-0 z-50 font-medium uppercase flex items-center justify-between p-4`}
    >
      <Link to="/">
        <img src={icon} alt="icon" />
      </Link>
      <ul className="bg-transparent  flex items-center justify-between gap-5">
        {pages.map((page, index) => {
          return (
            <li
              key={`header-page${page.title}_${index}`}
              className="bg-transparent"
            >
              <Link to={page.path}>
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
                  className={`${
                    scroll <= innerHeight * 1.5
                      ? "text-black"
                      : "text-green_yellow bg-transp arent"
                  } bg-transparent`}
                >
                  {page.title}
                </motion.div>
              </Link>
            </li>
          );
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
        className="flex items-center justify-end gap-5 text-sm"
      >
        {/* dark mode vs light mode 
            <Switch /> */}
        <Link to={LINKS.GITHUB}>
          <Button onClick={() => {}} type="button" label="GITHUB ->" />
        </Link>
      </motion.div>
    </header>
  );
}
