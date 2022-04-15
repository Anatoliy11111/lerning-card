import { PacksListActionType } from './PacksListActionCreator';

import { ResponseGetPacksList } from 'api/auth-api/types';

const initialState = {
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
  maxCardsCount: 60,
  minCardsCount: 1,
  page: 0,
  pageCount: 8,
  token: '',
  tokenDeathTime: 1650119451390,
  maxCount: 100,
  minCount: 1,
  sortPacks: '0created',
  statusLoading: 'succeeded',
};

export const packsListReducer = (
  state: ResponseGetPacksList = initialState,
  action: PacksListActionType,
): ResponseGetPacksList => {
  switch (action.type) {
    case 'packsList/SET-PACKS-LIST': {
      return { ...state, cardPacks: action.data };
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
    case 'packsList/SET-SORT-NAME-PACKS-LIST': {
      return {
        ...state,
        sortPacks: '1name',
      };
    }
    case 'packsList/SET-SORT-COUNT-PACKS-LIST': {
      return {
        ...state,
        sortPacks: '0cardsCount',
      };
    }
    case 'packsList/SET-SORT-CREATED-PACKS-LIST': {
      return {
        ...state,
        sortPacks: '0created',
      };
    }
    case 'packsList/SET-SORT-UPDATE-PACKS-LIST': {
      return {
        ...state,
        sortPacks: '1updated',
      };
    }
    case 'packsList/SET-NAME-PACK': {
      return { ...state, packName: action.packName };
    }

    default:
      return state;
  }
};
