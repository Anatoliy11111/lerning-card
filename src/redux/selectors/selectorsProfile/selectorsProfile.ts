import { RootState } from 'redux/store/Store';

export const getProfileName = (state: RootState): string => state.ProfileReducer.name;
export const getProfileAvatar = (state: RootState): string => state.ProfileReducer.avatar;
export const getProfilePreloader = (state: RootState): boolean =>
  state.ProfileReducer.fetchName;
export const getProfileLoginStatus = (state: RootState): boolean =>
  state.loginReducer.isLoginIn;
// eslint-disable-next-line no-underscore-dangle
export const getMyId = (state: RootState): string => state.ProfileReducer._id;
