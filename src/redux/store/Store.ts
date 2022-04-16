import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

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

/* export const store = createStore(reducerRoot, applyMiddleware(thunk)); */

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducerRoot,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export type RootState = ReturnType<typeof reducerRoot>;
