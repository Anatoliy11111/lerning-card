import { AppActionType } from 'redux/reducers/appReducer/AppActionCreator';
import { CardListActionType } from 'redux/reducers/cardsListReducer/CardsListActionCreator';
import { LoginActionType } from 'redux/reducers/loginReducer/LoginActionCreator';
import { PacksListActionType } from 'redux/reducers/packsListReducer/PacksListActionCreator';
import { ProfileActionType } from 'redux/reducers/profileReducer/ProfileActionCreator';

export type AllActionCreatorsType =
  | AppActionType
  | PacksListActionType
  | ProfileActionType
  | LoginActionType
  | CardListActionType;
