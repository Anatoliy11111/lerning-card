import { Dispatch } from 'redux';

import { authAPI } from 'api/auth-api/auth-api';
import { setNameAC } from 'redux/reducers';
import { setIsLoggedInAC } from 'redux/reducers/loginReducer/LoginActionCreator';
import { setIdUserAC } from 'redux/reducers/profileReducer/ProfileActionCreator';

export const setNameTC = () => (dispatch: Dispatch) => {
  authAPI.auth().then(res => {
    dispatch(setIsLoggedInAC(true));
    dispatch(setNameAC(res.data.name));
    // eslint-disable-next-line no-underscore-dangle
    dispatch(setIdUserAC(res.data._id));
  });
};
export const setChangeProfileInfoTC =
  (data: { name: string }) => (dispatch: Dispatch) => {
    authAPI.changeProfileInfo(data).then(res => {
      dispatch(setNameAC(res.data.updatedUser.name));
    });
  };
