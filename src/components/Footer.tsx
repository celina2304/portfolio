import navigation from "../constants/navigation";
import useScrollTo from "../hooks/useScrollTo";
import { motion } from "framer-motion";

//images
import logoBlack from "../assets/images/logo/portfoliologo-black.svg";
import { Link } from "react-router-dom";
import { LINKS } from "../constants/links";
import {
  FaLinkedin,
  // FaDiscord,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollTo = useScrollTo();

  const socialLinks = [
    { icon: FaEnvelope, link: "mailto:celina23042001@gmail.com", label: "Email" },
    { icon: FaLinkedin, link: LINKS.LINKEDIN, label: "LinkedIn" },
    { icon: FaGithub, link: LINKS.GITHUB, label: "Github" },
    // { icon: FaDiscord, link: LINKS.DISCORD, label: "Discord" },
  ];

  return (
    <footer className="relative border-t-[1.5px] border-primary-accent overflow-y-visible overflow-x-hidden bg-background">
        <div className="p-section-mobile xl:p-section-xl pb-0 xl:pb-0 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-start"
          >
            <div className="cursor-pointer">
              <img
                loading="lazy"
                src={logoBlack}
                className="h-16 md:h-20 2xl:h-[3vw]"
                alt="Portfolio Logo"
              />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3 items-center"
          >
            {/* <h3 className="text-primary-text font-semibold text-sm uppercase tracking-wider mb-2">
              Navigation
            </h3> */}
            <div className="flex flex-col gap-2 items-center">
              {navigation.map((item, index) => {
                return (
                  <motion.div
                    key={`${item.sectionName}footer-item`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    onClick={() => scrollTo(item.sectionId || "")}
                    className="cursor-pointer text-xs 2xl:text-lg relative underline-animation underline-primary-accent text-primary-text font-medium hover:text-primary-accent transition-colors duration-300"
                  >
                    {item.sectionName}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-end gap-4"
          >
            <h3 className="text-primary-text font-semibold text-sm uppercase tracking-wider">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <Link
                    to={social.link}
                    target={social.link.startsWith('http') || social.link.startsWith('mailto') || social.link.startsWith('tel') ? "_blank" : "_self"}
                    aria-label={social.label}
                  >
                    <social.icon
                      className="h-6 w-6 md:h-6 md:w-6 2xl:h-12 2xl:w-12 text-primary-text hover:text-primary-accent transition-colors duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-section-mobile xl:p-section-xl mt-8 pt-6 border-t border-primary-accent/20 bg-primary-accent/40 text-center"
        >
          <p className="text-primary-text/70 text-xs md:text-sm">
            Built with React and Typescript.
          </p>
        </motion.div>
    </footer>
  );
};

export default Footer;
