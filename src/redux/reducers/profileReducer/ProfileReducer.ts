import { ProfileActionType } from './ProfileActionCreator';

export type ProfileType = {
  _id: string;
  name: string;
  avatar: string;
  fetchName: boolean;
  isLoggedIn: boolean;
};

// avatar: null
// created: "2022-04-03T12:08:46.884Z"
// email: "canatolij@list.ru"
// isAdmin: false
// name: "сосиска-бориска"
// publicCardPacksCount: 3
// rememberMe: true
// token: "e0c1a050-bbea-11ec-9bd0-ad312a505023"
// tokenDeathTime: 1650542600917
// updated: "2022-04-14T12:03:20.917Z"
// verified: true
// __v: 0
// _id: "62498e4e4290fe2becd03da0"

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
