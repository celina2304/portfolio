// const footerList = [
//   {
//     heading: "About",
//   },
//   {
//     heading: "Contact",
//   },
//   {
//     heading: "Resume",
//   },
//   {
//     heading: "Projects",
//   },
//   {
//     heading: "Hobbies",
//   },
// ];

import pages from "../constants/pages";
import useScrollToSection from "../hooks/useScrollToSection";

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();
  return (
    <footer className="relative bg-transparent overflow-y-visible overflow-x-hidden">
      <img
        src={"./images/layered-steps-haikei1.svg"}
        className="w-full bottom-0 absolute hidden md:block -z-10"
      />
      {/* <img
        src={"./images/layered-steps-haikei-mob.svg"}
        className="w-full bottom-0 absolute md:hidden -z-10"
      /> */}
      <img
        src={"./images/layered-steps-haikei-mob-2.svg"}
        className="w-full bottom-0 absolute md:hidden -z-10"
      />
      <div className="p-section-mobile py-section-xl md:p-section-xl flex items-center justify-between  bg-transparent">
        <div className="cursor-pointer font-tusker 2xl:p-section-xl uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 bg-transparent text-black">
          <img
            src="/images/portfoliologo-black.svg"
            className="bg-transparent h-[15vw] 2xl:h-[5vw]"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-3 items-center justify-center bg-transparent">
          {pages.map((item) => (
            <div
              key={`${item.title}footer-item`}
              onClick={() => scrollToSection(item.scroll || "")}
              className="w-full text-right cursor-pointer text-xs md:text-base 2xl:text-3xl relative underline-animation underline-black bg-transparent text-black font-semibold"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
