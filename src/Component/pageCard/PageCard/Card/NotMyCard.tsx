import React, { memo } from 'react';

import { Link } from 'react-router-dom';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';

type NotMyCardPropsType = {
  name: string;
  onClickLearnCard: (learnCard: true) => void;
  cardsCount: number;
  created: string;
  updated: string;
  _id: string;
};

export const NotMyCard = memo(
  ({ onClickLearnCard, cardsCount, created, updated, name, _id }: NotMyCardPropsType) => {
    const valueForDisabled = 0;
    const validLink = cardsCount > valueForDisabled ? `/card/${_id}` : '';
    return (
      <div className={style.card}>
        <div className={style.cardItem}>
          <Link to={validLink} className={style.name}>
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
            <div className={style.buttonEdit}>
              {/*     <GeneralButton
                type="button"
                onClickCallback={() => {}}
                disabled={false}
                value="Edit"
              /> */}

              <button className={style.button} disabled={false}>
                ✎{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
