/* eslint-disable no-unused-vars */
import React from "react";

const PdfViewer = () => {
  const pdfUrl = "/20231115061930-Healt.pdf";

  return (
    <div>
      <center>
        <object
          data={pdfUrl}
          type="application/pdf"
          width="800"
          height="700"
        ></object>
      </center>
    </div>
  );
};

export default PdfViewer;
