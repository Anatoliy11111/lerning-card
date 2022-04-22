import { instance } from 'api/auth-api/auth-api';
import { UpdatedGrade } from 'api/auth-api/types';

export const cardsListAPI = {
  getCardsList(params: any) {
    return instance.get('cards/card/', {
      params,
    });
  },

  deleteCard(idCard: string) {
    return instance.delete(`cards/card/?id=${idCard}`);
  },
  createCard(idCard: string) {
    return instance.post(`cards/card/`, {
      card: { cardsPack_id: idCard },
    });
  },
  changeCard(idCard: string) {
    return instance.put(`cards/card/`, {
      card: { _id: idCard, question: 'Who is best team in the incubator?' },
    });
  },
  sendGrande(card_id: string, myGrade: number) {
    return instance.put<UpdatedGrade>(`cards/grade`, {
      card_id,
      grade: myGrade,
    });
  },
};
