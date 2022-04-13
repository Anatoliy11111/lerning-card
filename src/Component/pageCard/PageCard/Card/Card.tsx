import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './card.module.scss';

import { GeneralButton } from 'Component/01-common';
import { getMyId } from 'redux/selectors';
import { deleteCardFromPacksListTC } from 'redux/thunk';

type CardType = {
  _id: string;
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
  userId: string;
};

export const Card = memo(
  ({ userId, _id, name, cardsCount, created, updated }: CardType) => {
    const dispatch = useDispatch();

    const onDeleteCardClick = (idCard: string): void => {
      dispatch(deleteCardFromPacksListTC(idCard));
    };

    const myId = useSelector(getMyId);

    return (
      <div className={style.card}>
        <div className={style.cardItem}>
          <div className={style.name}> {name}</div>
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
              onClickCallback={e => onDeleteCardClick(_id)}
              disabled={myId !== userId}
              value="delete"
            />
            <GeneralButton
              type="button"
              onClickCallback={() => {}}
              disabled={myId !== userId}
              value="Edit"
            />
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
  },
);