import { pdfjs, Document, Page } from "react-pdf";
import resume from "../../assets/pdfs/resume.pdf";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = () => {
  const innerWidth = useSelector(
    (state: RootState) => state.dimensions.innerWidth
  );
  return (
    <>
      {innerWidth && (
        <Document className={"bg-transparent"} file={resume}>
          <Page
            // width={
            //   innerWidth <= 450
            //     ? innerWidth <= 320
            //       ? innerWidth * 0.6
            //       : innerWidth * 0.7
            //     : 500
            // }
            width={innerWidth <= 450 ? innerWidth * 0.7 : 500}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={1}
          />
        </Document>
      )}
    </>
  );
};

export default PdfViewer;
