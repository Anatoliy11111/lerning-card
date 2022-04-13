import { RootState } from 'redux/store/Store';

export const getErrorLogin = (state: RootState): string => state.loginReducer.errorLogin;

export const getIsLoginIn = (state: RootState): boolean => state.loginReducer.isLoginIn;
