import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';

type MyCardType = {
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
  setDeleteModalIsOpen: (setModalIsOpen: boolean) => void;
  setEditModalIsOpen: (value: boolean) => void;
  setAddCardModalIsOpen: (value: boolean) => void;
  onClickLearnCard: (learningCard: boolean) => void;
  id: string;
};

export const MyCard = memo(
  ({
    cardsCount,
    created,
    updated,
    setDeleteModalIsOpen,
    setEditModalIsOpen,
    setAddCardModalIsOpen,
    onClickLearnCard,
    name,
    id,
  }: MyCardType) => {
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
              onClickCallback={() => setAddCardModalIsOpen(true)}
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
              onClickCallback={() => setDeleteModalIsOpen(true)}
              disabled={false}
              value="delete"
            />
            <GeneralButton
              type="button"
              onClickCallback={() => setEditModalIsOpen(true)}
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
