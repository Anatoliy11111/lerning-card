import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { authAPI } from 'api/auth-api/auth-api';
import {
  AuthRequestType,
  CreateNewPassword,
  RestorePasswordType,
} from 'api/auth-api/types';
import { registrationAC, setErrorRegistrationMessage } from 'redux/reducers';
import { AllActionCreatorsType } from 'redux/reducers/allActionCreatorsType';
import {
  ErrorCreateNewPassword,
  isCreateNewPassword,
  setInitializeAC,
  setMessageRestorePassword,
} from 'redux/reducers/appReducer/AppActionCreator';
import {
  logOutAC,
  setErrorLoginAC,
  setIsLoggedInAC,
} from 'redux/reducers/loginReducer/LoginActionCreator';
import { setDataAC } from 'redux/reducers/profileReducer/ProfileActionCreator';
import { RootState } from 'redux/store/Store';

export const isRegistrationTC = (data: AuthRequestType) => async (dispatch: Dispatch) => {
  try {
    await authAPI.registration(data);
    dispatch(registrationAC(true));
  } catch (error: any) {
    dispatch(setErrorRegistrationMessage(error.response.data.error));
  }
};
export const changePasswordTC =
  (data: RestorePasswordType) => async (dispatch: Dispatch) => {
    try {
      const promise = await authAPI.changePassword(data);
      dispatch(setMessageRestorePassword(promise.data.info));
    } catch (error: any) {
      dispatch(setMessageRestorePassword(error.response.data.error));
    }
  };
export const CreateNewPasswordPasswordTC =
  (data: CreateNewPassword) => async (dispatch: Dispatch) => {
    try {
      await authAPI.createNewPassword(data);
      dispatch(isCreateNewPassword(true));
    } catch (error: any) {
      dispatch(ErrorCreateNewPassword(error.response.data.error));
    }
  };

export const loginTC =
  (data: AuthRequestType) =>
  async (dispatch: ThunkDispatch<RootState, unknown, AllActionCreatorsType>) => {
    try {
      const promise = await authAPI.login(data);
      dispatch(setDataAC(promise.data));
      dispatch(setIsLoggedInAC(true));
    } catch (e: any) {
      const error = e.response
        ? e.response.data.error
        : `${e.message}, more details in the console`;
      dispatch(setErrorLoginAC(error));
    } finally {
      dispatch(setInitializeAC(true));
    }
  };

export const logOutTC = () => async (dispatch: Dispatch) => {
  try {
    await authAPI.logOut();
    dispatch(logOutAC(false));
  } catch (e: any) {
    const error = e.response
      ? e.response.data.error
      : `${e.message}, more details in the console`;
  }
};
