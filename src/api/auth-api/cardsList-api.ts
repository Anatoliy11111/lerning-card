import { instance } from 'api/auth-api/auth-api';
import {
  ResponseAddAndDeletePacksListType,
  ResponseGetPacksList,
} from 'api/auth-api/types';

export const cardsListAPI = {
  getCardsList(params: any) {
    return instance.get('cards/card/', {
      params,
    });
  },

  deleteCard(idCard: string) {
    return instance.delete<ResponseAddAndDeletePacksListType>(`cards/card/?id=${idCard}`);
  },
  createCard() {
    return instance.post<ResponseAddAndDeletePacksListType>(`cards/card/`, {
      cardsPack: { name: 'x' },
    });
  },
};
