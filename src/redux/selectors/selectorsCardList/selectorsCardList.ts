import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { RootState } from 'redux/store/Store';

export const getCardsList = (state: RootState): CardsType[] =>
  state.cardsListReducer.cards;
export const getCardsTotalCount = (state: RootState): number =>
  state.cardsListReducer.cardsTotalCount;
export const getCardsPageCount = (state: RootState): number =>
  state.cardsListReducer.pageCount;
