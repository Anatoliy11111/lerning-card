import { RootState } from 'redux/store/Store';

export const getProfileName = (state: RootState): string => state.ProfileReducer.name;
export const getProfileAvatar = (state: RootState): string | undefined =>
  state.ProfileReducer.avatar;

export const getProfileLoginStatus = (state: RootState): boolean =>
  state.loginReducer.isLoginIn;
// eslint-disable-next-line no-underscore-dangle
export const getMyId = (state: RootState): string => state.ProfileReducer._id;
