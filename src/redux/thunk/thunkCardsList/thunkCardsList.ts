import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { cardsListAPI } from 'api/auth-api/cardsList-api';
import { setPaginationAC, setStatusLoadingPacksListAC } from 'redux/reducers';
import { AllActionCreatorsType } from 'redux/reducers/allActionCreatorsType';
import { setCardsListAC } from 'redux/reducers/cardsListReducer/CardsListActionCreator';
import { RootState } from 'redux/store/Store';
import { getPacksListTC } from 'redux/thunk/thunkPacksList/thunkPacksList';

export const getCardsTC = (cardsPack_id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));

    const promise = await cardsListAPI.getCardsList({
      cardsPack_id,
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

export const createCardTC =
  (cardsPackId: string) =>
  async (dispatch: ThunkDispatch<RootState, unknown, AllActionCreatorsType>) => {
    try {
      dispatch(setStatusLoadingPacksListAC('loading'));
      await cardsListAPI.createCard(cardsPackId);
      dispatch(getPacksListTC());
      dispatch(setStatusLoadingPacksListAC('succeeded'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
    }
  };

export const deleteCardTC =
  (cardsPack_id: string, idCard: string) =>
  async (dispatch: ThunkDispatch<RootState, unknown, AllActionCreatorsType>) => {
    try {
      dispatch(setStatusLoadingPacksListAC('loading'));
      await cardsListAPI.deleteCard(idCard);
      dispatch(getCardsTC(cardsPack_id));
      dispatch(setStatusLoadingPacksListAC('succeeded'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
    }
  };

export const changeCardTC =
  (cardsPack_id: string, idCard: string) =>
  async (dispatch: ThunkDispatch<RootState, unknown, AllActionCreatorsType>) => {
    try {
      dispatch(setStatusLoadingPacksListAC('loading'));
      await cardsListAPI.changeCard(idCard);
      dispatch(getCardsTC(cardsPack_id));
      dispatch(setStatusLoadingPacksListAC('succeeded'));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
    }
  };
