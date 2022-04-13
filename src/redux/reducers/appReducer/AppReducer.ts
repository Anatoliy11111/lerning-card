import { AppActionType } from './AppActionCreator';

type initialStateType = {
  isRegistration: boolean;
  errorRegistration: string;
  isSentNewPassword: string;
  isCreateNewPassword: boolean;
  errorCreateNewPassword: string;
};

const initialState: initialStateType = {
  isRegistration: false,
  errorRegistration: '',
  isSentNewPassword: '',
  isCreateNewPassword: false,
  errorCreateNewPassword: '',
};

export const AppReducer = (
  state = initialState,
  action: AppActionType,
): initialStateType => {
  switch (action.type) {
    case 'IS-REGISTRATION': {
      return { ...state, isRegistration: action.isRegistration };
    }
    case 'IS-ERROR-REGISTRATION-MESSAGE': {
      return { ...state, errorRegistration: action.errorRegistration };
    }
    case 'IS-ERROR-REGISTRATION': {
      return { ...state, isSentNewPassword: action.messageRestorePassword };
    }
    case 'IS-CREATE-NEW-PASSWORD': {
      return { ...state, isCreateNewPassword: action.isCreatePassword };
    }
    case 'ERROR-CREATE-NEW-PASSWORD': {
      return { ...state, errorCreateNewPassword: action.errorCreatePassword };
    }
    default:
      return state;
  }
};
