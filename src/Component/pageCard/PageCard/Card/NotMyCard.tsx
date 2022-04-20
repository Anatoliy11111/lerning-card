import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';
import { createCardTC, getCardstTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

type NotMyCardPropsType = {
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
  user_id: string;
  _id: string;
};

export const NotMyCard = ({
  cardsCount,
  created,
  updated,
  name,
  user_id,
  _id,
}: NotMyCardPropsType): any => {
  const dispatch = useDispatch();

  const onGetCarsListClick = (cardsId: string): void => {
    dispatch(getCardstTC(cardsId));
  };

  return (
    <div className={style.card}>
      <div className={style.cardItem}>
        <Link
          to={`/card/id=${user_id}`}
          onClick={() => onGetCarsListClick(_id)}
          className={style.name}
        >
          {name}
        </Link>
      </div>
      <div className={style.cardItem}>
        <div className={style.count}>{cardsCount}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.date}>{created}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.date}>{updated}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.button}>
          <GeneralButton
            type="button"
            onClickCallback={() => {}}
            disabled={false}
            value="Learn"
          />
        </div>
      </div>
    </div>
  );
};
