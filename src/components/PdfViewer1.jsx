/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const MyDocument = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    // Read the contents of the PDF file using FileReader
    const reader = new FileReader();
    reader.onload = (e) => {
      setPdfFile(e.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept=".pdf" />
      {pdfFile && (
        <Document>
          <Page size="A4">
            <View style={styles.section}>
              <Text>{pdfFile}</Text>
            </View>
          </Page>
        </Document>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default MyDocument;
