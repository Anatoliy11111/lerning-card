import { AuthResponseType } from 'api/auth-api/types';

export type ProfileActionType =
  | ReturnType<typeof setNameAC>
  | ReturnType<typeof setFetchNameAC>
  | ReturnType<typeof setIdUserAC>
  | ReturnType<typeof setDataAC>;

export const setNameAC = (name: string) =>
  ({
    type: 'SET-NAME',
    name,
  } as const);
export const setIdUserAC = (_id: string) =>
  ({
    type: 'SET-ID',
    _id,
  } as const);
export const setDataAC = (data: AuthResponseType) =>
  ({
    type: 'SET-DATA',
    data,
  } as const);
export const setFetchNameAC = (value: boolean) =>
  ({
    type: 'SET-FETCH-NAME',
    value,
  } as const);
