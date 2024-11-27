// import Button from "../ui/Button";
import React from "react";
import myImage from "../../assets/images/low-poly-grid-haikei.svg";
import { FunctionalComponentProps } from "../../types/components";
import useScrollToNextSection from "../../hooks/useScrollInsideSection";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const cardClassnames = {
  card: "border-2 border-green_yellow p-5 h-full font-medium text-sm",
  cardSubHeading:
    "font-semibold text-base 2xl:text-tusker-card-heading 2xl:pb-10",
  cardHeading:
    "font-tusker text-tusker-card-heading 2xl:text-tusker-heading uppercase",
  cardDescription: "mt-5 2xl:text-tusker-card-heading",
};

const ContactMeSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const { sections } = useSelector((state: RootState) => state.sectionScroll);
  const currentSection = sections.find((item) => item.sectionId === id);

  useScrollToNextSection({
    scrollStart: currentSection?.startPosition,
    scrollEnd:
      currentSection?.sectionHeight !== undefined
        ? currentSection?.sectionHeight / 3
        : undefined,
  });

  useScrollToNextSection({
    scrollStart: currentSection?.sectionHeight
      ? currentSection?.sectionHeight / 2
      : undefined,
    scrollEnd:
      currentSection?.sectionHeight !== undefined
        ? (currentSection?.sectionHeight * 2) / 3
        : undefined,
  });

  return (
    <section id={id} className="bg-transparent relative text-green_yellow">
      <div
        className="sticky top-0 h-[100vh] bg-cover -z-10"
        style={{ backgroundImage: `url(${myImage})` }}
      ></div>
      <div className="h-[100vh] bg-transparent flex items-start bg-cover justify-center font-tusker uppercase text-center text-tusker-subheading px-2 text-stroke2-green_yellow-DEFAULT 2xl:text-tusker-heading">
        NEED TO DROP A CALL?
      </div>
      <div className="h-[100vh] pb-section-xl bg-transparent m-auto px-section-xl 2xl:p-section-2xl grid grid-cols-1 md:grid-cols-none">
        <div className="border-2  border-green_yellow grid grid-cols-1 md:grid-cols-10 h-full bg-transparent">
          <div className="2xl:text-tusker-heading border-2 border-green_yellow col-span-1 md:col-span-4 flex items-center justify-center h-full font-tusker text-tusker-home-text-mobile md:text-tusker-subheading2 p-5 2xl:p-[100px]">
            Here's my contact info
          </div>
          <div className="col-span-1 md:col-span-6 grid grid-rows-4 md:grid-rows-none md:grid-cols-2">
            <div className={cardClassnames.card}>
              <div className={cardClassnames.cardSubHeading}>Have a doubt?</div>
              <div className="">
                <span className={cardClassnames.cardHeading}>EMAIL</span> me at
              </div>
              <div
                className={`${cardClassnames.cardDescription} cursor-pointer`}
                onClick={() => {
                  console.log("Replace this button with sending email");
                }}
              >
                celina23042001@gmail.com
              </div>
            </div>
            <div className={cardClassnames.card}>
              <div className={cardClassnames.cardSubHeading}>
                Need to contact?
              </div>
              <div className="">
                <span className={cardClassnames.cardHeading}>DROP A CALL</span>{" "}
                on
              </div>
              <div
                className={`${cardClassnames.cardDescription} cursor-pointer`}
                onClick={() => {
                  console.log("Replace this button with sending email");
                }}
              >
                +91 8708095735
              </div>
            </div>
            <div className={cardClassnames.card}>
              <div className={cardClassnames.cardSubHeading}>Add me on</div>
              <div className="">
                <span className={cardClassnames.cardHeading}>SOCIAL MEDIA</span>
              </div>
              <div className={`${cardClassnames.cardDescription}`}>
                <div className="flex gap-3">
                  <span>instg</span>
                  <span>discord</span>
                  <span>linkedin</span>
                </div>
              </div>
            </div>
            <div className={cardClassnames.card}>anything else</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMeSection;
