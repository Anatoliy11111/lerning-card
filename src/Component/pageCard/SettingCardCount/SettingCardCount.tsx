import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DoubleRange, onChangeCountRangeType } from '../DoubleRange/DoubleRange';

import style from './SettingCardCount.module.scss';

import { GeneralButton } from 'Component/01-common';
import { setMaxMinCardsCount, setSelectCardAC } from 'redux/reducers';
import { getMaxCount, getMinCount, getMyId } from 'redux/selectors';

export const SettingCardCount: React.FC = () => {
  const myID = useSelector(getMyId);

  const dispatch = useDispatch();
  const minCard = useSelector(getMinCount);
  const maxCard = useSelector(getMaxCount);
  const [minCardCount, setMinCardCount] = useState<number>(minCard);
  const [maxCardCount, setMaxCardCount] = useState<number>(maxCard);
  const onClickButton = (id: string): void => {
    dispatch(setSelectCardAC(id));
  };

  const changeCardCount = ({ min, max }: onChangeCountRangeType): void => {
    setMinCardCount(min);
    setMaxCardCount(max);
  };
  const postSettingCardCount = (): void => {
    dispatch(setMaxMinCardsCount(maxCardCount, minCardCount));
  };

  return (
    <div className={style.containerCardCount}>
      <h2>Show packs cards</h2>
      <div className={style.buttonFilter}>
        <GeneralButton
          type="button"
          value="My"
          onClickCallback={() => {
            onClickButton(myID);
          }}
        />
        <GeneralButton
          type="button"
          value="All"
          onClickCallback={() => {
            onClickButton('');
          }}
        />
      </div>
      <h2> Number of cards</h2>
      <div role="button" onBlur={() => {}} tabIndex={0} onMouseOut={postSettingCardCount}>
        <DoubleRange min={minCard} max={maxCard} onChange={changeCardCount} />
      </div>
    </div>
  );
};
