import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';

type MyCardType = {
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
  setModalIsOpen: (setModalIsOpen: boolean) => void;
  onClickLearnCard: (learningCard: boolean) => void;
};

export const MyCard = memo(
  ({
    cardsCount,
    created,
    updated,
    setModalIsOpen,
    onClickLearnCard,
    name,
  }: MyCardType) => {
    const valueForDisabled = 0;
    return (
      <>
        <div className={style.cardItem}>
          <Link to="/cards" className={style.name}>
            {' '}
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
