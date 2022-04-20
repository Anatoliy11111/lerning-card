import React from 'react';

import { useDispatch } from 'react-redux';

import starDefault from '../../../../../assets/images/starDefault.png';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { changeCardTC, deleteCardTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

type CardItemType = {
  card: CardsType;
};
export const CardItem = ({ card }: CardItemType): any => {
  const { question, answer, updated, grade, cardsPack_id, _id } = card;
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onDeleteCardClick = (_id: string): void => {
    dispatch(deleteCardTC(cardsPack_id, _id));
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onChangeCardClick = (_id: string): void => {
    dispatch(changeCardTC(cardsPack_id, _id));
  };

  return (
    <div className={style.card}>
      <div className={style.cardItem}>
        <div className={style.count}>{question}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.count}>{answer}</div>
      </div>

      <div className={style.cardItem}>
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        <div className={style.date}>{updated.substring(0, 10)}</div>
      </div>
      <div className={style.cardItem}>{grade}</div>
      <div className={style.cardItem}>
        <div className={style.button}>
          <GeneralButton
            type="button"
            onClickCallback={() => onDeleteCardClick(_id)}
            disabled={false}
            value="delete"
          />
          <GeneralButton
            type="button"
            onClickCallback={() => onChangeCardClick(_id)}
            disabled={false}
            value="Edit"
          />
        </div>
      </div>
    </div>
  );
};
