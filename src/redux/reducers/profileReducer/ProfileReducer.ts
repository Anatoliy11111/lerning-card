import { ProfileActionType } from './ProfileActionCreator';

export type ProfileType = {
  _id: string;
  name: string;
  avatar: string;
  fetchName: boolean;
  isLoggedIn: boolean;
};

const initState = {
  _id: '',
  name: '',
  avatar: 'https://i.redd.it/6laa05xm17j31.jpg',
  fetchName: true,
  isLoggedIn: true,
};

export const ProfileReducer = (
  state: ProfileType = initState,
  action: ProfileActionType,
): ProfileType => {
  switch (action.type) {
    case 'SET-NAME':
      return { ...state, name: action.name };
    case 'SET-ID':
      // eslint-disable-next-line no-underscore-dangle
      return { ...state, _id: action._id };
    case 'SET-FETCH-NAME':
      return { ...state, fetchName: action.value };
    default:
      return state;
  }
};
