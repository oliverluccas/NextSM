const trello = window.TrelloPowerUp.iframe();

// Função para abrir o modal de seleção de lista e formato de exportação
const openExportModal = () => {
  trello.modal({
    // O título do modal
    title: 'Exportar Lista',
    // URL do conteúdo do modal, pode ser um arquivo HTML ou uma rota em seu servidor
    url: './export-modal.html', // Certifique-se de que este caminho esteja correto
    // Dimensões do modal
    height: 360,
    width: 480
  });
};

// Adicione mais lógica aqui conforme necessário

module.exports = {
  openExportModal
};
