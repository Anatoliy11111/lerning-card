import { Dispatch } from 'redux';

import { authAPI } from 'api/auth-api/auth-api';
import { setFetchNameAC, setNameAC } from 'redux/reducers';
import { setIdUserAC } from 'redux/reducers/profileReducer/ProfileActionCreator';

export const setNameTC = (data: any) => (dispatch: Dispatch) => {
  dispatch(setFetchNameAC(true));
  authAPI.changeProfileInfo(data).then(() => {
    debugger;
    dispatch(setNameAC(data.name));
    // eslint-disable-next-line no-underscore-dangle
    dispatch(setIdUserAC(data._id));

    dispatch(setFetchNameAC(false));
  });
};
