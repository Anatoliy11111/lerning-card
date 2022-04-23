import React from 'react';

import { useDispatch } from 'react-redux';

import { Rating } from '../rating/Raiting';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';
import { Data } from 'enum/enum';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { changeCardTC, deleteCardTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

type CardItemType = {
  card: CardsType;
};
export const CardItem: React.FC<CardItemType> = ({ card }) => {
  const { question, answer, updated, grade, cardsPack_id, _id } = card;
  const dispatch = useDispatch();

  const onDeleteCardClick = (id: string): void => {
    dispatch(deleteCardTC(cardsPack_id, id));
  };

  const onChangeCardClick = (id: string): void => {
    dispatch(changeCardTC(cardsPack_id, id));
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
        <div className={style.date}>{updated.substring(Data.start, Data.finish)}</div>
      </div>
      <div className={style.cardItem}>
        <Rating activeStars={grade} />
      </div>
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
