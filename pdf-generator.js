const PDFDocument = require('pdfkit');
const fs = require('fs');

const createPDF = (cardData) => {
  const doc = new PDFDocument;
  const stream = fs.createWriteStream('output.pdf');
  doc.pipe(stream);

  doc.fontSize(12);
  
  cardData.forEach(card => {
    doc.fontSize(14).font('Helvetica-Bold').text(card.title, { underline: true });
    doc.fontSize(12).font('Helvetica').text(card.description);
    doc.moveDown();
  });

  doc.end();
};

module.exports = {
  createPDF
};
