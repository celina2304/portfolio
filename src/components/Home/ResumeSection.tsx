
// types
import { FunctionalComponentProps } from "../../types/components";
import { motion } from "framer-motion";
// ui components
import Button from "../ui/Button";
import PdfViewer from "../ui/PdfViewer";

// resume pdf file
import resume from "../../assets/pdfs/resume.pdf";


const ResumeSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "celina-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id={id}
      className="p-section-mobile md:p-section-xl 2xl:  relative text-primary-accent"
    >
      <motion.h2  initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} className="heading">
        My RESUME
      </motion.h2>
      <br />
      <div className="md:px-section-xl flex flex-col lg:flex-row  lg:justify-center 2xl:mx-auto 2xl:w-[70%] gap-10">
        <div className="flex lg:block items-center justify-center">
          <PdfViewer pdf={resume} />
        </div>
        <div className="p-10">
          <div className="flex items-center justify-center">
            <Button onClick={handleDownload} type="button" label="Download" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
