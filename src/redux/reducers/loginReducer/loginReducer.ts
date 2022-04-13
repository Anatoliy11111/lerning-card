import { LoginActionType } from './LoginActionCreator';

type InitialStateType = {
  isLoginIn: boolean;
  errorLogin: string;
};
const initialState = {
  isLoginIn: false,
  errorLogin: '',
};

export const loginReducer = (
  state: InitialStateType = initialState,
  action: LoginActionType,
): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return { ...state, isLoginIn: action.value };
    case 'login/SET-ERROR-LOGIN':
      return { ...state, errorLogin: action.error };
    case 'LOG-OUT':
      return { ...state, isLoginIn: action.value };
    default:
      return state;
  }
};
