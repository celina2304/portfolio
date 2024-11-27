import { FunctionalComponentProps } from "../../types/components";
import Button from "../ui/Button";
import PdfViewer from "../ui/PdfViewer";

const ResumeSection: React.FC<FunctionalComponentProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="p-section-mobile md:p-section-xl relative text-green_yellow"
    >
      <div className="text-center bg-transparent font-tusker uppercase text-tusker-home-text-mobile md:text-tusker-subheading2 px-2 text-green_yellow">
        My RESUME
      </div>
      <br />
      <div className="md:px-section-xl flex flex-col md:flex-row gap-10">
        <div className="flex items-center justify-center">
          <PdfViewer />
        </div>
        <div className="p-10">
          <div className="flex items-center justify-center">
            <Button
              onClick={() => {
                // navigate("/projects")
              }}
              type="button"
              label="View more"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
