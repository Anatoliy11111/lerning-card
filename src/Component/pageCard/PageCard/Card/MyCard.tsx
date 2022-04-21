import React, { memo } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';
import { createCardTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

type MyCardType = {
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
  setModalIsOpen: (setModalIsOpen: boolean) => void;
  onClickLearnCard: (learningCard: boolean) => void;
  id: string;
};

export const MyCard = memo(
  ({
    cardsCount,
    created,
    updated,
    setModalIsOpen,
    onClickLearnCard,
    name,
    id,
  }: MyCardType) => {
    const dispatch = useDispatch();
    const onAddCardClick = (_id: string): void => {
      dispatch(createCardTC(_id));
    };
    const valueForDisabled = 0;
    const validLink = cardsCount > valueForDisabled ? `/card/${id}` : '';
    return (
      <>
        <div className={style.cardItem}>
          <Link to={validLink} className={style.name}>
            {name}
          </Link>
        </div>
        <div className={style.cardItem}>
          <div className={style.count}>{cardsCount}</div>
          <span>
            <GeneralButton
              onClickCallback={() => onAddCardClick(id)}
              type="button"
              value="+"
            />
          </span>
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
              onClickCallback={() => setModalIsOpen(true)}
              disabled={false}
              value="delete"
            />
            <GeneralButton
              type="button"
              onClickCallback={() => {}}
              disabled={false}
              value="Edit"
            />
            <GeneralButton
              type="button"
              onClickCallback={() => onClickLearnCard(true)}
              disabled={cardsCount === valueForDisabled}
              value="Learn"
            />
          </div>
        </div>
      </>
    );
  },
);
