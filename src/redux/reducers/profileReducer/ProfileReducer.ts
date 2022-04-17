import { ProfileActionType } from './ProfileActionCreator';

import { AuthResponseType } from 'api/auth-api/types';

export type ProfileType = AuthResponseType;

const initState: ProfileType = {
  _id: '',
  name: '',
  avatar: 'https://i.redd.it/6laa05xm17j31.jpg',
  publicCardPacksCount: 0,
  created: '',
  email: '',
  updated: '',
  isAdmin: false,
  verified: false,
  rememberMe: false,
  error: '',
};

export const ProfileReducer = (
  state: ProfileType = initState,
  action: ProfileActionType,
): ProfileType => {
  switch (action.type) {
    case 'SET-NAME':
      return { ...state, name: action.name };
    case 'SET-DATA':
      return { ...state, ...action.data };
    case 'SET-ID':
      // eslint-disable-next-line no-underscore-dangle
      return { ...state, _id: action._id };
    default:
      return state;
  }
};
