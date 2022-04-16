import { PacksListActionType } from './PacksListActionCreator';

import { ResponseGetPacksList } from 'api/auth-api/types';

const initialState: ResponseGetPacksList = {
  cardPacks: [
    {
      _id: '',
      user_id: '',
      name: '',
      user_name: '',
      cardsCount: 0,
      created: '',
      updated: '',
    },
  ],
  packName: '',
  cardPacksTotalCount: 0,
  maxCardsCount: 1,
  minCardsCount: 0,
  page: 1,
  pageCount: 8,
  token: '',
  tokenDeathTime: 1650119451390,
  maxCount: 103,
  minCount: 0,
  sortPacks: '0created',
  statusLoading: 'succeeded',
  user_id: '',
};

export const packsListReducer = (
  state: ResponseGetPacksList = initialState,
  action: PacksListActionType,
): ResponseGetPacksList => {
  switch (action.type) {
    case 'packsList/SET-PACKS-LIST': {
      return { ...state, cardPacks: action.data };
    }
    case 'packsList/MAX-MIN-INITIAL-COUNT-CARD': {
      return {
        ...state,
        maxCount: action.max,
        minCount: action.min,
        maxCardsCount: action.max,
        minCardsCount: action.min,
      };
    }
    case 'packsList/SET-SELECT-CARD': {
      return { ...state, user_id: action.userId };
    }
    case 'packsList/SET-PAGINATION': {
      return { ...state, ...action.data };
    }
    case 'packsList/SET-MAX-MIN-CARDS-COUNT': {
      return { ...state, maxCount: action.max, minCount: action.min };
    }
    case 'packsList/SET-STATUS-LOADING': {
      return { ...state, statusLoading: action.value };
    }
    case 'packsList/SET-CURRENT-NUMBER-PAGE': {
      return { ...state, page: action.page };
    }
    case 'packsList/SET-SORT-PACKS-LIST': {
      return {
        ...state,
        sortPacks: action.value,
      };
    }

    case 'packsList/SET-NAME-PACK': {
      return { ...state, packName: action.packName };
    }

    default:
      return state;
  }
};
