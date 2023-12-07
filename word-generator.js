const officegen = require('officegen');
const fs = require('fs');

const createWordDocument = (cardData) => {
  let docx = officegen({
    type: 'docx',
    orientation: 'portrait',
    pageMargins: { top: 1000, right: 1000, bottom: 1000, left: 1000 }
  });

  docx.on('error', (err) => {
    console.error(err);
  });

  // Adicionando dados ao documento
  cardData.forEach(card => {
    let pObj = docx.createP();

    pObj.addText(card.title, { bold: true, font_face: 'Arial', font_size: 14 });
    pObj.addLineBreak();
    pObj.addText(card.description, { font_face: 'Arial', font_size: 12 });
    pObj.addLineBreak();
  });

  // Salvar o documento
  let out = fs.createWriteStream('output.docx');
  out.on('error', (err) => {
    console.error(err);
  });

  docx.generate(out);
};

module.exports = {
  createWordDocument
};
