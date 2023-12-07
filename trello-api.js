const trello = window.TrelloPowerUp.iframe();

const getListsOnBoard = () => {
  return trello.board('all').then(board => board.lists);
};

const getCardsOnList = (listId) => {
  return trello.cards('all').then(cards => cards.filter(card => card.idList === listId));
};

module.exports = {
  getListsOnBoard,
  getCardsOnList
};
