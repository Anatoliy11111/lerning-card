import { Dispatch } from 'redux';

import { instance } from 'api/auth-api/auth-api';
import { packsListAPI } from 'api/auth-api/packsList-api';
import { setPacksListAC, setPaginationAC } from 'redux/reducers';
import { RootState } from 'redux/store/Store';

export const getPacksListTC =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
    const { packName } = getState().packsListReducer;
    try {
      const promise = await packsListAPI.getPacksList(packName);
      dispatch(setPacksListAC(promise.data.cardPacks));
      dispatch(setPaginationAC(promise.data));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
    }
  };
export const getNewPageTC = (pageNumber: number) => async (dispatch: Dispatch) => {
  try {
    const promise = await packsListAPI.getNewPage(pageNumber);
    dispatch(setPacksListAC(promise.data.cardPacks));
    // dispatch(setPaginationAC(promise.data));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const createCardPacksListTC = () => async (dispatch: any) => {
  try {
    await packsListAPI.createCardPacksList();
    dispatch(getPacksListTC());
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};

export const deleteCardFromPacksListTC = (idCard: string) => async (dispatch: any) => {
  try {
    await packsListAPI.deleteCardFromPacksList(idCard);
    dispatch(getPacksListTC());
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};
