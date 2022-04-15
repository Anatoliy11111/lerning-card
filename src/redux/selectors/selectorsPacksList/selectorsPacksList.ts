import { GetPacksListCard } from 'api/auth-api/types';
import { RootState } from 'redux/store/Store';

export const getCards = (state: RootState): GetPacksListCard[] =>
  state.packsListReducer.cardPacks;
export const getCardPacksTotalCount = (state: RootState): number =>
  state.packsListReducer.cardPacksTotalCount;
export const getPageCount = (state: RootState): number =>
  state.packsListReducer.pageCount;
export const getPackName = (state: RootState): string | undefined =>
  state.packsListReducer.packName;
export const getMaxCount = (state: RootState): number =>
  state.packsListReducer.maxCardsCount;
export const getMinCount = (state: RootState): number =>
  state.packsListReducer.minCardsCount;

export const getStatusLoading = (state: RootState): string | undefined =>
  state.packsListReducer.statusLoading;

export const getSortPacks = (state: RootState): string | undefined =>
  state.packsListReducer.sortPacks;

export const getPage = (state: RootState): number => state.packsListReducer.page;
export const getMinCardCount = (state: RootState): number | undefined =>
  state.packsListReducer.minCount;
export const getMaxCardCount = (state: RootState): number | undefined =>
  state.packsListReducer.maxCount;
