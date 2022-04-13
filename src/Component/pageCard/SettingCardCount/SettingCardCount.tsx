import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DoubleRange, onChangeCountRangeType } from '../DoubleRange/DoubleRange';

import style from './SettingCardCount.module.scss';

import { ResponseGetPacksList } from 'api/auth-api/types';
import { GeneralButton } from 'Component/01-common';
import { setMaxMinCardsCount } from 'redux/reducers';
import { RootState } from 'redux/store/Store';

export const SettingCardCount: React.FC = () => {
  const dispatch = useDispatch();
  const minCard = useSelector<RootState, number>(
    state => state.packsListReducer.minCardsCount,
  );
  const maxCard = useSelector<RootState, number>(
    state => state.packsListReducer.maxCardsCount,
  );
  // const obj = useSelector<RootState, ResponseGetPacksList>(
  //   state => state.packsListReducer,
  // );
  const postSettingCardCount = (): void => {};
  const changeCardCount = ({ min, max }: onChangeCountRangeType): void => {
    dispatch(setMaxMinCardsCount(max, min));
  };
  // console.log(obj);
  return (
    <div className={style.containerCardCount}>
      <h2>Show packs cards</h2>
      <div className={style.buttonFilter}>
        <GeneralButton type="button" value="My" />
        <GeneralButton type="button" value="All" />
      </div>
      <h2> Number of cards</h2>
      <div role="button" tabIndex={0} onMouseUp={postSettingCardCount}>
        <DoubleRange min={minCard} max={maxCard} onChange={changeCardCount} />
      </div>
    </div>
  );
};
