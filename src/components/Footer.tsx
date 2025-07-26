import pages from "../constants/pages";
import useScrollToSection from "../hooks/useScrollToSection";

//images
import steps1 from "../assets/images/bg/layered-steps-haikei.svg";
import stepsMob2 from "../assets/images/bg/layered-steps-haikei-mob.svg";
import logoBlack from "../assets/images/logo/portfoliologo-black.svg";

const Footer: React.FC = () => {
  const scrollToSection = useScrollToSection();
  return (
    <footer className="relative bg-transparent overflow-y-visible overflow-x-hidden">
      <img
        src={steps1}
        loading="lazy"
        className="w-full bottom-0 absolute hidden md:block -z-10"
      />
      <img
        loading="lazy"
        src={stepsMob2}
        className="w-full bottom-0 absolute md:hidden -z-10"
      />
      <div className="p-section-mobile xl:p-section-xl 2xl:p-section-2xl flex items-center justify-between bg-transparent">
        <div className="cursor-pointer font-tusker 2xl:p-section-2xl uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 bg-transparent text-black">
          <img
            loading="lazy"
            src={logoBlack}
            className="bg-transparent h-16 md:h-20 2xl:h-[5vw]"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-3 items-center justify-center bg-transparent">
          {pages.map((item) => (
            <div
              key={`${item.title}footer-item`}
              onClick={() => scrollToSection(item.scroll || "")}
              className="w-full text-right cursor-pointer text-xs 2xl:text-2xl relative underline-animation underline-black bg-transparent text-black font-semibold"
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
