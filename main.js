import { initialize } from 'trello-power-up';

const POWER_UP_NAME = 'Exportação de Conteúdo Nextmark';

const exportListCallback = (trello) => {
  // Implementar lógica para exibir modal de seleção de lista
  // Coletar dados da lista selecionada
  // Chamar a função de exportação (PDF ou Word)
};

initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://your-icon-url.com/icon.png',
      text: 'Exportar Lista',
      callback: exportListCallback
    }];
  }
});

console.log(`${POWER_UP_NAME} inicializado!`);
