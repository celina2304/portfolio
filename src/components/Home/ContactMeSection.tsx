import { Link } from "react-router-dom";

// types and constants
import { FunctionalComponentProps } from "../../types/components";
import { LINKS } from "../../constants/links";

// components
// import Button from "../ui/Button";

//images
import myImage from "../../assets/images/bg/contact_me_bg.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import discord from "../../assets/icons/discord.svg";
import github from "../../assets/icons/github.svg";

const cardClassnames = {
  card: "border-2 border-green_yellow p-3 xs:p-5 h-full font-medium text-sm",
  cardSubHeading: "font-semibold text-base 2xl:text-tusker-contact-mobile ",
  cardHeading:
    "font-tusker text-tusker-contact-mobile xs:text-tusker-card-heading 2xl:text-tusker-subheading2 uppercase",
  cardDescription: "mt-5 2xl:text-tusker-card-heading",
};

const ContactMeSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  return (
    <section id={id} className="bg-transparent relative text-green_yellow">
      <div
        className="sticky top-0 h-[100vh] bg-cover -z-10"
        style={{ backgroundImage: `url(${myImage})` }}
      ></div>
      <div className="h-[50vh] xs:h-[100vh] bg-transparent flex items-start bg-cover justify-center font-tusker uppercase text-center text-tusker-card-heading xs:text-tusker-subheading px-2 text-stroke2-green_yellow-DEFAULT 2xl:text-tusker-heading">
        NEED TO DROP A CALL?
      </div>
      <div className="min-h-[100vh] pb-section-xl bg-transparent m-auto px-section-mobile md:px-section-xl 2xl:px-section-2xl grid grid-cols-1 md:grid-cols-none">
        <div className="h-full 2xl:h-[90vh] border-2 border-green_yellow grid grid-cols-1 lg:grid-cols-10 bg-transparent">
          <div className="2xl:text-tusker-heading border-2 border-green_yellow col-span-1 md:col-span-4 flex items-center justify-center h-full font-tusker text-tusker-contact-mobile xs:text-tusker-home-text-mobile md:text-tusker-subheading2 p-5 2xl:p-[100px]">
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
                <span className={cardClassnames.cardHeading}>DROP A TEXT</span>{" "}
                on
              </div>
              <Link to={LINKS.LINKEDIN} target="_blank">
                <div
                  className={`${cardClassnames.cardDescription} text-lg cursor-pointer flex items-center justify-start gap-1`}
                >
                  Linked
                  <img loading="lazy" src={linkedin} alt="" className="h-10 w-auto" />
                </div>
              </Link>
            </div>
            <div className={cardClassnames.card}>
              <div className={cardClassnames.cardSubHeading}>Add me on</div>
              <div className="">
                <span className={cardClassnames.cardHeading}>SOCIAL MEDIA</span>
              </div>
              <div className={`${cardClassnames.cardDescription}`}>
                <div className="flex gap-3">
                  <Link to={LINKS.INSTAGRAM} target="_blank">
                    <img loading="lazy" src={instagram} alt="" className="h-10 w-auto" />
                  </Link>
                  <Link to={LINKS.FACEBOOK} target="_blank">
                    <img loading="lazy" src={facebook} alt="" className="h-10 w-auto" />
                  </Link>
                  <Link to={LINKS.DISCORD} target="_blank">
                    <img loading="lazy" src={discord} alt="" className="h-10 w-auto" />
                  </Link>
                </div>
              </div>
            </div>
            <div className={cardClassnames.card}>
              <div className={cardClassnames.cardSubHeading}>Visit my</div>
              <div className="">
                <span className={cardClassnames.cardHeading}>
                  GITHUB PROFILE
                </span>
              </div>
              <div className={`${cardClassnames.cardDescription}`}>
                <Link to={LINKS.GITHUB} target="_blank">
                  <img loading="lazy" src={github} alt="" className="h-10 w-auto" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMeSection;
