import { instance } from 'api/auth-api/auth-api';

export const cardsListAPI = {
  getCardsList(params: any) {
    return instance.get('cards/card/', {
      params,
    });
  },

  deleteCard(idCard: string) {
    return instance.delete(`cards/card/?id=${idCard}`);
  },
  createCard(idCard: string, question: string, answer: string) {
    return instance.post(`cards/card/`, {
      card: { cardsPack_id: idCard, question, answer },
    });
  },
  changeCard(idCard: string) {
    return instance.put(`cards/card/`, {
      card: { _id: idCard, question: 'Who is best team in the incubator?' },
    });
  },
};
