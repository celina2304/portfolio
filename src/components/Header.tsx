import { Link } from "react-router-dom";
import icon from "../assets/react.svg";
import pages from "../constants/pages";
import Button from "./ui/Button";
import { LINKS } from "../constants/links";
// import Switch from "../components/ui/Switch";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 bg-blend-color-burn text-green_yellow">
      <nav className="bg-jet">
        <div className="flex items-center justify-between p-4 shadow-md">
          <Link to="/">
            <img src={icon} alt="icon" />
          </Link>
          <ul className="flex items-center justify-between gap-5">
            {pages.map((page, index) => {
              return (
                <li key={`header-page${page.title}_${index}`}>
                  <Link to={page.path}>
                    <div>{page.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-end gap-5">
            {/* dark mode vs light mode 
            <Switch /> */}
            <Link to={LINKS.GITHUB}>
              <Button onClick={() => {}} type="button" label="Github link" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
