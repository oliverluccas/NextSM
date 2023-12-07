import { getCardsOnList } from './trello-api.js';
import { createPDF } from './pdf-generator.js';
import { createWordDocument } from './exporters/word-generator.js';

const exportList = (listId, format) => {
  getCardsOnList(listId)
    .then(cards => {
      const cardData = cards.map(card => ({ title: card.name, description: card.desc }));

      if (format === 'pdf') {
        createPDF(cardData);
      } else if (format === 'word') {
        createWordDocument(cardData);
      } else {
        console.error('Formato não suportado:', format);
      }
    })
    .catch(error => console.error('Erro ao exportar lista:', error));
};

export { exportList };
