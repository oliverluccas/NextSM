import { iframe } from 'trello-power-up';

const getListsOnBoard = () => {
  return iframe().board('all').then(board => board.lists);
};

const getCardsOnList = (listId) => {
  return iframe().cards('all').then(cards => cards.filter(card => card.idList === listId));
};

export { getListsOnBoard, getCardsOnList };
