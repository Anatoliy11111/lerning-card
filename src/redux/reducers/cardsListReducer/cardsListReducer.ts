import { ResponseGetPacksList } from 'api/auth-api/types';
import { PacksListActionType } from 'redux/reducers/cardsListReducer/CardsListActionCreator';

export type CardsType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  user_id: string;
  created: string;
  updated: string;
  _id: string;
};
type CardsInitialType = {
  cards: CardsType[];
  cardsTotalCount: number;
  maxGrade: number;
  minGrade: number;
  page: number;
  pageCount: number;
  packUserId: string;
};

const initialState: CardsInitialType = {
  cards: [
    {
      answer: '',
      question: '',
      cardsPack_id: '',
      grade: 1,
      shots: 1,
      user_id: '',
      created: '',
      updated: '',
      _id: '',
    },
  ],
  cardsTotalCount: 3,
  maxGrade: 4.987525071790364,
  minGrade: 2.0100984354076568,
  page: 1,
  pageCount: 4,
  packUserId: '',
};

export const cardsListReducer = (
  state: CardsInitialType = initialState,
  action: PacksListActionType,
): CardsInitialType => {
  switch (action.type) {
    case 'cardsList/SET-CARDS-LIST': {
      return { ...state, cards: action.data };
    }
    /*    case 'packsList/MAX-MIN-INITIAL-COUNT-CARD': {
      return {
        ...state,
        maxCount: action.max,
        minCount: action.min,
        maxCardsCount: action.max,
        minCardsCount: action.min,
      };
    } */
    /*  case 'packsList/SET-SELECT-CARD': {
      return { ...state, user_id: action.userId };
    } */
    /*    case 'packsList/SET-PAGINATION': {
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
    } */
    /*    case 'packsList/SET-SORT-PACKS-LIST': {
      return {
        ...state,
        sortPacks: action.value,
      };
    } */

    /*  case 'packsList/SET-NAME-PACK': {
      return { ...state, packName: action.packName };
    } */

    default:
      return state;
  }
};
