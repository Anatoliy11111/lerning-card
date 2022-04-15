import { instance } from 'api/auth-api/auth-api';
import { ResponseGetPacksList } from 'api/auth-api/types';

export const packsListAPI = {
  getPacksList(params: any) {
    return instance.get<ResponseGetPacksList>('cards/pack/', {
      params,
    });
  },
  getNewPage(pageNumber: number) {
    return instance.get<ResponseGetPacksList>('cards/pack/', {
      params: { pageCount: 8, page: pageNumber },
    });
  },
  deleteCardFromPacksList(idCard: string) {
    return instance.delete<ResponseAddAndDeletePacksListType>(`cards/pack/?id=${idCard}`);
  },
  createCardPacksList() {
    return instance.post<ResponseAddAndDeletePacksListType>(`cards/pack/`, {
      cardsPack: { name: 'x' },
    });
  },
  updateNameCardPacksList(name: string, id: string) {
    return instance.put(`cards/pack/`, { cardsPack: { name, id } });
  },
};
