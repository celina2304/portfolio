// const mainText = "I'm a frontend developer with hands-on experience in React.js, Next.js, and TypeScript. My skill set extends to backend development, including Node.js, Express, API integration, and payment gateway solutions. I'm passionate about building seamless, dynamic web experiences that bridge the gap between frontend and backend, with a focus on clean, efficient code and user-centered design. Whether it's crafting intuitive UIs or implementing robust server-side functionality, I always aim to create projects that stand out."

import Chevron from "../ui/Chevron";

const AboutSection: React.FC = () => {
  return (
    <section className="text-center p-section-xl border-2 border-green_yellow relative">
      <div className="font-tusker font-medium text-tusker-subheading uppercase text-green_yellow">
        Building the web{" "}
        <span className="font-tusker bg-transparent text-stroke-green_yellow-DEFAULT">
          from front to back,
        </span>{" "}
        one line of code{" "}
        <span className="font-tusker bg-transparent text-stroke-green_yellow-DEFAULT">
          at a time.
        </span>
      </div>
      <div className="text-green_yellow w-[70%] mx-auto py-5">
        My skill set extends to backend development, including Node.js, Express,
        API integration, and payment gateway solutions. I'm passionate about
        building seamless, dynamic web experiences that bridge the gap between
        frontend and backend, with a focus on clean, efficient code and
        user-centered design.
      </div>
      <div className="absolute bg-transparent top-0 left-0 w-[400px]">
        <Chevron cls="bg-transparent" stroke="#b0fe76" strokeWidth="6" />
      </div>
      <div className="absolute bg-transparent top-0 right-0 w-[400px]">
        <Chevron cls="bg-transparent" stroke="#b0fe76" strokeWidth="6" />
      </div>
      {/* <div className="absolute bg-transparent bottom-0 left-0 w-[400px]">
        <Chevron cls="bg-transparent" fill="#b0fe76" />
      </div> */}
    </section>
  );
};
export default AboutSection;
