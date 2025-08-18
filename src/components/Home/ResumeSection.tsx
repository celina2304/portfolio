import { pdfjs, Document, Page } from "react-pdf";

// types
import { FunctionalComponentProps } from "../../types/components";
import { motion } from "framer-motion";
// ui components
import Button from "../ui/Button";

// resume pdf file
import resume from "../../assets/pdfs/resume.pdf";


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

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
      className="p-section-mobile md:p-section-xl relative text-primary-accent"
    >
      <motion.h2 initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} className="heading">
        My RESUME
      </motion.h2>
      <div className="md:px-section-xl flex flex-col lg:justify-center gap-6 md:gap-8 lg:gap-10">
          {/* <PdfViewer pdf={resume} /> */}
        <div className="flex justify-center">
          <Document className={""} file={resume}>
            <Page
              className={""}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              pageNumber={1}
            />
          </Document>
        </div>
        <div className="flex justify-center">
          <Button className="" onClick={handleDownload} type="button" label="Download" />
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
