import Button from "../ui/Button";
import myImage from "../../assets/images/low-poly-grid-haikei.svg";

const ContactMeSection = () => {
  const cardClassnames = {
    card: "border-2 border-green_yellow p-5 h-full font-medium text-sm",
    cardSubHeading: "font-semibold text-base",
    cardHeading: "font-tusker text-tusker-card-heading uppercase",
    cardDescription: "mt-5",
  };
  return (
    <section className="py-section-xl relative text-green_yellow">
      <div
        className="h-[100vh] flex items-center bg-cover justify-center font-tusker uppercase text-tusker-subheading px-2 text-stroke2-green_yellow-DEFAULT"
        style={{ backgroundImage: `url(${myImage})` }}
      >
        NEED TO DROP A CALL?
      </div>
      <div className="px-section-xl grid grid-cols-1">
        <div className="border-2  border-green_yellow grid grid-cols-10 h-[100vh]">
          <div className="border-2 border-green_yellow col-span-4 flex items-center justify-center h-full font-tusker text-tusker-subheading2 p-5">
            Here's my contact info
          </div>
          <div className="col-span-6 grid grid-cols-2">
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
        <div className="pt-10 flex items-center justify-center">
          <Button
            onClick={() => {
              // navigate("/projects")
            }}
            type="button"
            label="View more"
          />
        </div>
      </div>
    </section>
  );
};
export default ContactMeSection;
