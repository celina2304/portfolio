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
    <Document className={"bg-transparent"} file={resume}>
      {innerWidth && (
        <Page
          width={innerWidth <= 400 ? innerWidth * 0.8 : 500}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          pageNumber={1}
        />
      )}
    </Document>
  );
};

export default PdfViewer;
