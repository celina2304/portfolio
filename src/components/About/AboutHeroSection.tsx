import { FunctionalComponentProps } from "../../types/components";
import Button from "../ui/Button";
import ColorSwitchText from "../ui/ColorSwitchText";

import myImg from "../../assets/images/avatar.svg"

const AboutHeroSection: React.FC<FunctionalComponentProps> = ({ id }) => {
    return (
        <section
            id={id}
            className="md:-mt-[85px] 2xl:-mt-[140px] relative w-full p-section-mobile md:p-section-xl 2xl:  2xl:w-[70%] 2xl:mx-auto flex flex-col gap-10text-primary-accent overflow-hidden"
        >
            <div>
                <ColorSwitchText text="BACKGROUND" cls="px-2 text-primary-accent" />
            </div>
            <div className="md:px-section-xl flex flex-col lg:flex-row justify-center items-center 2xl:mx-auto 2xl:w-[70%] gap-10">
                <div className="w-2/5 rounded-full">
                    <img src={myImg} className="w-full h-auto rounded-full border-4 border-primary-accent" />
                </div>
                <div className="w-3/5">
                    <div className="flex flex-col gap-7 items-center justify-center">
                        <div className="font-poppins">
                            I&apos;m a Full Stack MERN Developer with 1.5+ years of experience building clean, responsive, and interactive web applications. I specialize in delivering high-performance, user-friendly solutions with a strong focus on UI/UX and smooth animations. My expertise includes React, Node.js, Express, and MongoDB, and I have hands-on experience with Next.js, TypeScript, and Tailwind CSS for modern, scalable applications.
                        </div>
                        <Button onClick={() => { }} type="button" label="Download" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutHeroSection;