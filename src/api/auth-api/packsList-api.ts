import { instance } from 'api/auth-api/auth-api';
import { ResponseGetPacksList } from 'api/auth-api/types';

export const packsListAPI = {
  getPacksList(packName: string | undefined) {
    return instance.get<ResponseGetPacksList>('cards/pack/', {
      params: { packName, pageCount: 8 },
    });
  },
  getNewPage(pageNumber: number) {
    return instance.get<ResponseGetPacksList>('cards/pack/', {
      params: { pageCount: 8, page: pageNumber },
    });
  },
  deleteCardFromPacksList(idCard: string) {
    return instance.delete(`cards/pack/?id=${idCard}`);
  },
  createCardPacksList() {
    return instance.post(`cards/pack/`, { cardsPack: { name: 'x' } });
  },
  updateNameCardPacksList(name: string, id: string) {
    return instance.put(`cards/pack/`, { cardsPack: { name, id } });
  },
};
