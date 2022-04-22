import { CardListActionType } from 'redux/reducers/cardsListReducer/CardsListActionCreator';

export type CardsType = {
  answer: string;
  question: string;
  cardsPack_id: string;
  grade: number;
  shots: number;
  card_id: string;
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
  packName: string;
};

const initialState: CardsInitialType = {
  cards: [
    {
      answer: '',
      question: '',
      cardsPack_id: '',
      grade: 1,
      card_id: '',
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
  packName: '',
};

export const cardsListReducer = (
  state: CardsInitialType = initialState,
  action: CardListActionType,
): CardsInitialType => {
  switch (action.type) {
    case 'cardsList/SET-CARDS-LIST': {
      return { ...state, cards: action.data };
    }
    case 'cardsList/SET-PACK-NAME': {
      return { ...state, packName: action.name };
    }
    case 'cardsList/SET-NEW-GRADE': {
      return {
        ...state,
        cards: state.cards.map(card =>
          card._id === action.id ? { ...card, grade: action.grade } : card,
        ),
      };
    }

    default:
      return state;
  }
};
