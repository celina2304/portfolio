import { Link } from "react-router-dom";
import icon from "../assets/react.svg";
import pages from "../constants/pages";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex items-center justify-between p-5">
          <img src={icon} alt="icon" />
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
          <div>github link</div>
        </div>
      </nav>
    </header>
  );
}
