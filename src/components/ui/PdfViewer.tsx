import { pdfjs, Document, Page } from "react-pdf";

// types
import { PdfProps } from "../../types/components/resume";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer: React.FC<PdfProps> = (props) => {
  return (
    <Document className={"max-w-min pdf-container"} file={props.pdf}>
      <Page
        renderAnnotationLayer={false}
        renderTextLayer={false}
        pageNumber={1}
      />
    </Document>
  );
};

export default PdfViewer;
