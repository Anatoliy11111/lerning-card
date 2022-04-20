import { Dispatch } from 'redux';

import { cardsListAPI } from 'api/auth-api/cardsList-api';
import { setPaginationAC, setStatusLoadingPacksListAC } from 'redux/reducers';
import { setCardsListAC } from 'redux/reducers/cardsListReducer/CardsListActionCreator';
import { store } from 'redux/store/Store';

export const getCardstTC = (cardsPack_id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));

    const promise = await cardsListAPI.getCardsList({
      // eslint-disable-next-line camelcase
      cardsPack_id,
      pageCount: 100,
    });
    dispatch(setStatusLoadingPacksListAC('succeeded'));
    dispatch(setCardsListAC(promise.data.cards));

    dispatch(setPaginationAC(promise.data));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const createCardTC = (cardsPackId: string) => async (dispatch: any) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    await cardsListAPI.createCard(cardsPackId);
    dispatch(getCardstTC(cardsPackId));
    dispatch(setStatusLoadingPacksListAC('succeeded'));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const deleteCardTC =
  (cardsPack_id: string, idCard: string) => async (dispatch: any) => {
    try {
      dispatch(setStatusLoadingPacksListAC('loading'));
      await cardsListAPI.deleteCard(idCard);
      dispatch(getCardstTC(cardsPack_id));
      dispatch(setStatusLoadingPacksListAC('succeeded'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
    }
  };

export const changeCardTC =
  (cardsPack_id: string, idCard: string) => async (dispatch: any) => {
    try {
      dispatch(setStatusLoadingPacksListAC('loading'));
      await cardsListAPI.changeCard(idCard);
      dispatch(getCardstTC(cardsPack_id));
      dispatch(setStatusLoadingPacksListAC('succeeded'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
    }
  };
