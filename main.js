const trelloPowerUp = require('trello-power-up');

const POWER_UP_NAME = 'Exportação de Conteúdo Nextmark';

const exportListCallback = (trello) => {
  // Implementar lógica para exibir modal de seleção de lista
  // Coletar dados da lista selecionada
  // Chamar a função de exportação (PDF ou Word)
};

trelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fbr%2Ficone-gratis%2Fexportar_724827&psig=AOvVaw2sISSOrY16FAusC5SZDQTs&ust=1702046827841000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKCz9NXI_YIDFQAAAAAdAAAAABAW',
      text: 'Exportar Lista',
      callback: exportListCallback
    }];
  }
});

console.log(`${POWER_UP_NAME} inicializado!`);
