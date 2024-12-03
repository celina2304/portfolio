import { FunctionalComponentProps } from "../../types/components";
import Button from "../ui/Button";
import PdfViewer from "../ui/PdfViewer";
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
      className="p-section-mobile md:p-section-xl 2xl:p-section-2xl relative text-green_yellow"
    >
      <div className="text-center bg-transparent font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 px-2 text-green_yellow">
        My RESUME
      </div>
      <br />
      <div className="md:px-section-xl flex flex-col lg:flex-row  lg:justify-center 2xl:mx-auto 2xl:w-[70%] gap-10">
        <div className="flex lg:block items-center justify-center">
          <PdfViewer />
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
