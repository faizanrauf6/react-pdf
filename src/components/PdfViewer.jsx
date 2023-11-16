/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <Document
        file="/20231115061930-Healt.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={handlePrevPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default PdfViewer;
