const { getCardsOnList } = require('./trello-api.js');
const wordGenerator = require('./word-generator.js');
// Supondo que o pdf-generator.js também esteja atualizado
const pdfGenerator = require('./pdf-generator.js');

const exportList = (listId, format) => {
  getCardsOnList(listId)
    .then(cards => {
      const cardData = cards.map(card => ({ title: card.name, description: card.desc }));

      if (format === 'pdf') {
        pdfGenerator.createPDF(cardData);
      } else if (format === 'word') {
        wordGenerator.createWordDocument(cardData);
      } else {
        console.error('Formato não suportado:', format);
      }
    })
    .catch(error => console.error('Erro ao exportar lista:', error));
};

module.exports = {
  exportList
};
