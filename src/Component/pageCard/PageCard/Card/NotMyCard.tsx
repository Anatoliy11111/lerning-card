import React from 'react';

import { Link } from 'react-router-dom';

import { GeneralButton } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';

type NotMyCardPropsType = {
  name: string;
  cardsCount: number;
  created: string;
  updated: string;
};

export const NotMyCard = ({
  cardsCount,
  created,
  updated,
  name,
}: NotMyCardPropsType): any => (
  <div className={style.card}>
    <div className={style.cardItem}>
      <Link to="/selectCard" className={style.name}>
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
          onClickCallback={() => {}}
          disabled={false}
          value="Learn"
        />
      </div>
    </div>
  </div>
);
