import {
  GetPacksListCard,
  ResponseGetPacksList,
  StatusLoadingType,
} from 'api/auth-api/types';

export const setPacksListAC = (data: GetPacksListCard[]) =>
  ({ type: 'packsList/SET-PACKS-LIST', data } as const);
export const setMaxMinCardsCount = (max: number, min: number) =>
  ({ type: 'packsList/SET-MAX-MIN-CARDS-COUNT', max, min } as const);
export const sortNamePacksListAC = () =>
  ({ type: 'packsList/SET-SORT-NAME-PACKS-LIST' } as const);
export const sortCountCardPacksListAC = () =>
  ({ type: 'packsList/SET-SORT-COUNT-PACKS-LIST' } as const);
export const setPaginationAC = (data: Omit<ResponseGetPacksList, 'cardPacks'>) =>
  ({ type: 'packsList/SET-PAGINATION', data } as const);
export const sortUpdatedCardPacksListAC = () =>
  ({ type: 'packsList/SET-SORT-UPDATE-PACKS-LIST' } as const);
export const sortCreatedCardPacksListAC = () =>
  ({ type: 'packsList/SET-SORT-CREATED-PACKS-LIST' } as const);
export const setPacNameAC = (packName: string) =>
  ({ type: 'packsList/SET-NAME-PACK', packName } as const);

export const setStatusLoadingPacksListAC = (value: StatusLoadingType) =>
  ({ type: 'packsList/SET-STATUS-LOADING', value } as const);
export const setCurrentNumberPageAC = (page: number) =>
  ({ type: 'packsList/SET-CURRENT-NUMBER-PAGE', page } as const);

type SetPacksListACType = ReturnType<typeof setPacksListAC>;
type setMaxMinCardsCountType = ReturnType<typeof setMaxMinCardsCount>;
type SortNamePacksListACType = ReturnType<typeof sortNamePacksListAC>;
type SortCountCardPacksListAC = ReturnType<typeof sortCountCardPacksListAC>;
type SortUpdatedCardPacksListACType = ReturnType<typeof sortUpdatedCardPacksListAC>;
type SortCreatedCardPacksListACType = ReturnType<typeof sortCreatedCardPacksListAC>;
type SetStatusLoadingPacksListACType = ReturnType<typeof setStatusLoadingPacksListAC>;
type SetPackName = ReturnType<typeof setPacNameAC>;
type SetPagination = ReturnType<typeof setPaginationAC>;
type setCurrentNumberPage = ReturnType<typeof setCurrentNumberPageAC>;

export type PacksListActionType =
  | SetPacksListACType
  | setMaxMinCardsCountType
  | SortNamePacksListACType
  | SortCountCardPacksListAC
  | SortUpdatedCardPacksListACType
  | SortCreatedCardPacksListACType
  | setCurrentNumberPage
  | SetStatusLoadingPacksListACType
  | SetPackName
  | SetPagination;
