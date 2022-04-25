import { Dispatch } from 'redux';

import { packsListAPI } from 'api/auth-api/packsList-api';
import {
  setMaxMinInitialCountAC,
  setPacksListAC,
  setPaginationAC,
  setStatusLoadingPacksListAC,
} from 'redux/reducers';
import { setInitializeAC } from 'redux/reducers/appReducer/AppActionCreator';
import { store } from 'redux/store/Store';

export const getMaxMinCount = () => async (dispatch: Dispatch) => {
  const { data } = await packsListAPI.getPacksList({});
  const { maxCardsCount, minCardsCount } = data;
  dispatch(setMaxMinInitialCountAC(maxCardsCount, minCardsCount));
  dispatch(setInitializeAC(true));
};

export const getPacksListTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    const {
      sortPacks,
      page,
      pageCount,
      user_id,
      minCount: min,
      maxCount: max,
      packName,
    } = store.getState().packsListReducer;
    const promise = await packsListAPI.getPacksList({
      sortPacks,
      page,
      pageCount,
      min,
      max,
      packName,
      user_id,
    });
    dispatch(setStatusLoadingPacksListAC('succeeded'));
    dispatch(setPacksListAC(promise.data.cardPacks));
    dispatch(setPaginationAC(promise.data));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const createCardPacksListTC = (cardPackName: string) => async (dispatch: any) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    await packsListAPI.createCardPacksList(cardPackName);
    dispatch(getPacksListTC());
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const changeCardPacksListTC =
  (cardPackName: string, id: string) => async (dispatch: any) => {
    try {
      dispatch(setStatusLoadingPacksListAC('loading'));
      await packsListAPI.updateNameCardPacksList(cardPackName, id);
      dispatch(getPacksListTC());
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
    }
  };

export const deleteCardFromPacksListTC = (idCard: string) => async (dispatch: any) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    await packsListAPI.deleteCardFromPacksList(idCard);
    dispatch(getPacksListTC());
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};
