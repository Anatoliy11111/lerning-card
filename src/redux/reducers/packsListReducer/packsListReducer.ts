import { PacksListActionType } from './PacksListActionCreator';

import { ResponseGetPacksList } from 'api/auth-api/types';
import { ResultMethodeSort } from 'enum/enum';

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
  cardPacksTotalCount: 0,
  maxCardsCount: 60,
  minCardsCount: 1,
  page: 0,
  pageCount: 0,
  token: '',
  tokenDeathTime: 1650119451390,
  maxCount: 100,
  minCount: 1,
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
    /*    case 'packsList/DELETE-CARD': {
          return {
            ...state,
            // eslint-disable-next-line no-underscore-dangle
            cardPacks: state.cardPacks.filter(card => card._id !== action.idCard),
          };
        } */
    case 'packsList/SET-SORT-NAME-PACKS-LIST': {
      return {
        ...state,
        cardPacks: [...state.cardPacks].sort((a, b): any => {
          if (a.user_name > b.user_name) return ResultMethodeSort.Ascending;
          if (a.user_name < b.user_name) return ResultMethodeSort.Descending;
          return ResultMethodeSort.Default;
        }),
      };
    }
    case 'packsList/SET-SORT-COUNT-PACKS-LIST': {
      return {
        ...state,
        cardPacks: [...state.cardPacks].sort((a, b) => b.cardsCount - a.cardsCount),
      };
    }
    case 'packsList/SET-SORT-CREATED-PACKS-LIST': {
      return {
        ...state,
        cardPacks: [...state.cardPacks].sort((a, b): any => {
          if (a.created < b.created) return ResultMethodeSort.Ascending;
          if (a.created > b.created) return ResultMethodeSort.Descending;
          return ResultMethodeSort.Default;
        }),
      };
    }
    case 'packsList/SET-SORT-UPDATE-PACKS-LIST': {
      return {
        ...state,
        cardPacks: [...state.cardPacks].sort((a, b) => {
          if (a.updated < b.updated) return ResultMethodeSort.Ascending;
          if (a.updated > b.updated) return ResultMethodeSort.Descending;
          return ResultMethodeSort.Default;
        }),
      };
    }

    default:
      return state;
  }
};
