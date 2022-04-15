import { Dispatch } from 'redux';

import { packsListAPI } from 'api/auth-api/packsList-api';
import {
  setMaxMinInitialCountAC,
  setPacksListAC,
  setPaginationAC,
  setStatusLoadingPacksListAC,
} from 'redux/reducers';
import { store } from 'redux/store/Store';

export const getMaxMinCount = () => async (dispatch: Dispatch) => {
  const { data } = await packsListAPI.getPacksList({});
  const { maxCardsCount, minCardsCount } = data;
  dispatch(setMaxMinInitialCountAC(maxCardsCount, minCardsCount));
};
export const getPacksListTC = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    const {
      sortPacks,
      page,
      pageCount,
      // eslint-disable-next-line camelcase
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
      // eslint-disable-next-line camelcase
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

export const createCardPacksListTC = () => async (dispatch: any) => {
  try {
    dispatch(setStatusLoadingPacksListAC('loading'));
    await packsListAPI.createCardPacksList();
    dispatch(getPacksListTC());
    dispatch(setStatusLoadingPacksListAC('succeeded'));
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
    dispatch(setStatusLoadingPacksListAC('succeeded'));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};
