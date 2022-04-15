import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DoubleRange, onChangeCountRangeType } from '../DoubleRange/DoubleRange';

import style from './SettingCardCount.module.scss';

import { GeneralButton } from 'Component/01-common';
import { setMaxMinCardsCount } from 'redux/reducers';
import { getMaxCount, getMinCount } from 'redux/selectors';

export const SettingCardCount: React.FC = () => {
  const [valueSelectCard, setValueSelectCard] = useState(false);

  const dispatch = useDispatch();
  const minCard = useSelector(getMinCount);
  const maxCard = useSelector(getMaxCount);

  const [minCardCount, setMinCardCount] = useState<number>(minCard);
  const [maxCardCount, setMaxCardCount] = useState<number>(maxCard);

  const onClickButton = (value: boolean): void => {
    setValueSelectCard(value);
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
            onClickButton(true);
          }}
        />
        <GeneralButton
          type="button"
          value="All"
          onClickCallback={() => {
            onClickButton(false);
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
