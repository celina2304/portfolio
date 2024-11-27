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
      <img
        src={"./images/layered-steps-haikei.svg"}
        className="w-full bottom-0 hidden md:absolute -z-10"
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
        <div className="cursor-pointer md:w-1/2 font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 bg-transparent text-black">
          celina <br /> portfolio
        </div>
        <div className="flex flex-col gap-2 md:gap-3 items-center justify-center bg-transparent">
          {footerList.map((item) => (
            <div
              key={`${item.heading}footer-item`}
              className="w-full text-right cursor-pointer text-xs md:text-base relative underline-animation underline-black bg-transparent text-black font-semibold"
            >
              {item.heading}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
