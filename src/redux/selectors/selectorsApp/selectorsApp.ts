import { RootState } from 'redux/store/Store';

export const getErrorRegistration = (state: RootState): string =>
  state.AppReducer.errorRegistration;
export const getIsRegistration = (state: RootState): boolean =>
  state.AppReducer.isRegistration;
export const getMessageNewPassword = (state: RootState): string =>
  state.AppReducer.isSentNewPassword;
export const createNewPassword = (state: RootState): boolean =>
  state.AppReducer.isCreateNewPassword;
export const errorCreateNewPassword = (state: RootState): string =>
  state.AppReducer.errorCreateNewPassword;
export const getIsinitiolazed = (state: RootState): boolean =>
  state.AppReducer.isInitialize;
export const setIdCard = (state: RootState): string => state.AppReducer.idCard;
