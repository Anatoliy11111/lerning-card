import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { AppReducer } from 'redux/reducers';
import { loginReducer } from 'redux/reducers/loginReducer/loginReducer';
import { packsListReducer } from 'redux/reducers/packsListReducer/packsListReducer';
import { ProfileReducer } from 'redux/reducers/profileReducer/ProfileReducer';

export const reducerRoot = combineReducers({
  AppReducer,
  loginReducer,
  ProfileReducer,
  packsListReducer,
});

export const store = createStore(reducerRoot, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducerRoot>;
