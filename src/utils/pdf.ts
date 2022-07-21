import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";

export const reactToPdf = (fileName: string, reactComponent: any) => {
  const input = ReactDOMServer.renderToStaticMarkup(reactComponent);
  const pdf = new jsPDF();
  pdf.html(input, { callback: () => pdf.save(`${fileName}.pdf`) });
};
