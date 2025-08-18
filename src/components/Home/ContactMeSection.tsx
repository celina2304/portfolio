import { motion, useScroll, useTransform } from "framer-motion";

// types and constants
import { FunctionalComponentProps } from "../../types/components";

import contact from "../../assets/images/blob-contact.svg";
import { useRef } from "react";
import ContactForm from "../ui/ContactForm";

const ContactMeSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const contactY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section ref={contactRef} id={id} className="relative overflow-x-clip">
      <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="z-20 relative" style={{
          y: contactY
        }}>
        <h2 className="heading">CONTACT ME</h2>
        <ContactForm />
      </motion.div>
      <motion.img initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        src={contact}
        className="absolute z-0 inset-0 object-contain w-full h-full"
        style={{
          objectPosition: 'center',
          transform: 'rotate(70deg)',
          y: backgroundY
        }}
      />
    </section>
  );
};

export default ContactMeSection;
