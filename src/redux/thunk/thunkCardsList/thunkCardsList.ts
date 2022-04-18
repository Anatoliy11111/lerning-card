import { Dispatch } from 'redux';

import { cardsListAPI } from 'api/auth-api/cardsList-api';
import { setStatusLoadingPacksListAC } from 'redux/reducers';
import { setCardsListAC } from 'redux/reducers/cardsListReducer/CardsListActionCreator';

export const getCardstTC = (cardsPack_id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));

    const promise = await cardsListAPI.getCardsList({
      // eslint-disable-next-line camelcase
      cardsPack_id,
      pageCount: 8,
    });
    dispatch(setStatusLoadingPacksListAC('succeeded'));
    dispatch(setCardsListAC(promise.data.cards));

    // dispatch(setPaginationAC(promise.data));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const createCardTC = () => async (dispatch: any) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    await cardsListAPI.createCard();
    // dispatch(getCardstTC());
    dispatch(setStatusLoadingPacksListAC('succeeded'));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const deleteCardTC = (idCard: string) => async (dispatch: any) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    await cardsListAPI.deleteCard(idCard);
    // dispatch(getCardstTC());
    dispatch(setStatusLoadingPacksListAC('succeeded'));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};
