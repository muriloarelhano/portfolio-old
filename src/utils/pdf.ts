import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

export const reactToPdf = (fileName: string, reactComponent: any) => {
  const input = ReactDOMServer.renderToString(reactComponent);
  console.log(input);
  const pdf = new jsPDF("portrait", "px", "a4", false);
  pdf.addPage();
  pdf.html(input, { callback: () => pdf.save(`${fileName}.pdf`) });
};
