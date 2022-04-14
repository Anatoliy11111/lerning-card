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
