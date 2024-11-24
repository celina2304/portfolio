import bg from "../assets/images/layered-steps-haikei.svg";
import bg1 from "../assets/images/layered-steps-haikei1.svg";

const footerList = [
  {
    heading: "About",
  },
  {
    heading: "Contact",
  },
  {
    heading: "Resume",
  },
  {
    heading: "Projects",
  },
  {
    heading: "Hobbies",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-transparent overflow-y-visible overflow-x-hidden">
      <img src={bg} className="w-full bottom-0 absolute -z-10" />
      <div className="p-section-xl flex bg-transparent">
        <div className="w-[40%] bg-transparent">
          <div className="font-tusker uppercase text-tusker-subheading2 bg-transparent text-black">
            celina portfolio
          </div>
        </div>
        <div className="w-[60%] bg-transparent flex gap-10">
          <ul className="flex w-1/2 flex-col items-center justify-center bg-transparent">
            {footerList.map((item) => (
              <li
                key={`${item.heading}footer-item`}
                className="bg-transparent text-black font-semibold"
              >
                {item.heading}
              </li>
            ))}
          </ul>
          <ul className="flex w-1/2 flex-col items-center justify-center bg-transparent">
            {footerList.map((item) => (
              <li
                key={`${item.heading}footer-item`}
                className="bg-transparent text-black font-semibold"
              >
                {item.heading}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
