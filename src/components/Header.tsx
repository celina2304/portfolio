import icon from "../assets/react.svg";
import pages from "../constants/pages";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="flex items-center justify-between p-5">
          <img src={icon} alt="icon" />
          <ul className="flex items-center justify-between gap-2">
            {pages.map((item, index) => {
              return (
                <li key={`header-item${item.title}_${index}`}>
                  <a href={item.path}>
                    <div>{item.title}</div>
                  </a>
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
