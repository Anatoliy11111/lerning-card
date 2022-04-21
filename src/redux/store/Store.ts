import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { AppReducer } from 'redux/reducers';
import { cardsListReducer } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { loginReducer } from 'redux/reducers/loginReducer/loginReducer';
import { packsListReducer } from 'redux/reducers/packsListReducer/packsListReducer';
import { ProfileReducer } from 'redux/reducers/profileReducer/ProfileReducer';

export const reducerRoot = combineReducers({
  AppReducer,
  loginReducer,
  ProfileReducer,
  packsListReducer,
  cardsListReducer,
});

/* export const store = createStore(reducerRoot, applyMiddleware(thunk)); */

// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducerRoot,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export type RootState = ReturnType<typeof reducerRoot>;
