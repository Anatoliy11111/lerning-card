import { Dispatch } from 'redux';

import { cardsListAPI } from 'api/auth-api/cardsList-api';
import { setPaginationAC, setStatusLoadingPacksListAC } from 'redux/reducers';

// eslint-disable-next-line camelcase
export const getCardstTC = (cardsPack_id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));

    const promise = await cardsListAPI.getCardsList({
      // eslint-disable-next-line camelcase
      cardsPack_id,
    });
    dispatch(setStatusLoadingPacksListAC('succeeded'));
    //  dispatch(setCardsListAC(promise.data.cardPacks));
    dispatch(setPaginationAC(promise.data));
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
