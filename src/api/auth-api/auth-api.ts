import axios from 'axios';

import {
  AuthRequestType,
  AuthResponseType,
  CreateNewPassword,
  CreateNewPasswordResponse,
  ProfileInfoType,
  RegistrationResponseType,
  ResponseRestorePasswordType,
  RestorePasswordType,
} from './types';

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
  withCredentials: true,
});

export const authAPI = {
  login(data: AuthRequestType) {
    return instance.post<AuthResponseType>('auth/login', data);
  },
  logOut() {
    return instance.delete('/auth/me');
  },
  registration(data: AuthRequestType) {
    return instance.post<RegistrationResponseType>('auth/register', data);
  },
  auth() {
    return instance.post('auth/me', {});
  },
  changeProfileInfo(data: ProfileInfoType) {
    return instance.put('auth/me', data);
  },
  changePassword(data: RestorePasswordType) {
    return instance.post<ResponseRestorePasswordType>('auth/forgot', data);
  },
  createNewPassword(data: CreateNewPassword) {
    return instance.post<CreateNewPasswordResponse>('auth/set-new-password', data);
  },
  getCardsPack() {
    return instance.get('cards/pack?pageCount=20');
  },
};
