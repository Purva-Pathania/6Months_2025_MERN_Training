import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import PDF from "./pdf";


const PDFComponent = ({ data }) => {
  return (
    <div>
      <h2>PDF Preview</h2>

      {/* Display PDF in browser */}
      <PDFViewer width="600" height="500">
        <PDF data={data} />
      </PDFViewer>

      {/* Download PDF Button */}
      <PDFDownloadLink document={<PDF data={data} />} fileName="restaurants.pdf">
        {({ loading }) => (loading ? "Loading PDF..." :
        <><br/> <button className="btn btn-dark">Download PDF</button></>)}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFComponent;