import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';

export const setCardsListAC = (data: CardsType[]) =>
  ({ type: 'cardsList/SET-CARDS-LIST', data } as const);
export const setPackName = (name: string) =>
  ({ type: 'cardsList/SET-PACK-NAME', name } as const);

type SetPacksListACType = ReturnType<typeof setCardsListAC>;
type setPackNameType = ReturnType<typeof setPackName>;
export type CardListActionType = SetPacksListACType | setPackNameType;
