import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { authAPI } from 'api/auth-api/auth-api';
import { setNameAC } from 'redux/reducers';
import { AllActionCreatorsType } from 'redux/reducers/allActionCreatorsType';
import { setInitializeAC } from 'redux/reducers/appReducer/AppActionCreator';
import { setIsLoggedInAC } from 'redux/reducers/loginReducer/LoginActionCreator';
import { setDataAC } from 'redux/reducers/profileReducer/ProfileActionCreator';
import { RootState } from 'redux/store/Store';
import { getMaxMinCount } from 'redux/thunk/thunkPacksList/thunkPacksList';

export const setAuthInitialTC =
  () => (dispatch: ThunkDispatch<RootState, unknown, AllActionCreatorsType>) => {
    authAPI
      .auth()
      .then(res => {
        dispatch(setDataAC(res.data));
        dispatch(setIsLoggedInAC(true));
        dispatch(getMaxMinCount());
      })
      .catch(() => {
        dispatch(setInitializeAC(true));
      });
  };
export const setChangeProfileInfoTC =
  (data: { name: string }) => (dispatch: Dispatch) => {
    authAPI.changeProfileInfo(data).then(res => {
      dispatch(setNameAC(res.data.updatedUser.name));
    });
  };
