import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';

export const setCardsListAC = (data: CardsType[]) =>
  ({ type: 'cardsList/SET-CARDS-LIST', data } as const);
/* export const setMaxMinCardsCount = (max: number, min: number) =>
  ({ type: 'packsList/SET-MAX-MIN-CARDS-COUNT', max, min } as const);
export const sortPacksListAC = (value: SortPacksType) =>
  ({ type: 'packsList/SET-SORT-PACKS-LIST', value } as const);

export const setPaginationAC = (data: Omit<ResponseGetPacksList, 'cardPacks'>) =>
  ({ type: 'packsList/SET-PAGINATION', data } as const);

export const setPacNameAC = (packName: string) =>
  ({ type: 'packsList/SET-NAME-PACK', packName } as const);

export const setStatusLoadingPacksListAC = (value: StatusLoadingType) =>
  ({ type: 'packsList/SET-STATUS-LOADING', value } as const);
export const setCurrentNumberPageAC = (page: number) =>
  ({ type: 'packsList/SET-CURRENT-NUMBER-PAGE', page } as const);
export const setSelectCardAC = (userId: string) =>
  ({ type: 'packsList/SET-SELECT-CARD', userId } as const);
export const setMaxMinInitialCountAC = (max: number, min: number) =>
  ({ type: 'packsList/MAX-MIN-INITIAL-COUNT-CARD', max, min } as const); */

type SetPacksListACType = ReturnType<typeof setCardsListAC>;
/* type setMaxMinCardsCountType = ReturnType<typeof setMaxMinCardsCount>;
type SortNamePacksListACType = ReturnType<typeof sortPacksListAC>;

type SetStatusLoadingPacksListACType = ReturnType<typeof setStatusLoadingPacksListAC>;
type SetPackName = ReturnType<typeof setPacNameAC>;
type SetPagination = ReturnType<typeof setPaginationAC>;
type setCurrentNumberPage = ReturnType<typeof setCurrentNumberPageAC>;
type setSelectCard = ReturnType<typeof setSelectCardAC>;
type setMaxMinInitialCount = ReturnType<typeof setMaxMinInitialCountAC>; */

export type CardListActionType = SetPacksListACType;
/*  | setMaxMinCardsCountType
  | SortNamePacksListACType
  | setCurrentNumberPage
  | SetStatusLoadingPacksListACType
  | SetPackName
  | setMaxMinInitialCount
  | setSelectCard
  | SetPagination; */
