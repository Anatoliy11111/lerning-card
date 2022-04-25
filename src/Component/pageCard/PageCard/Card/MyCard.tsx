import React, { memo } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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

    const valueForDisabled = 0;
    const validLink = cardsCount > valueForDisabled ? `/card/${id}` : '';

    const onAddCardClick = (_id: string): void => {
      dispatch(createCardTC(_id));
    };
    return (
      <>
        <div className={`${style.cardItem} ${style.cardItemName}`}>
          <Link to={validLink} className={style.name}>
            {name}
          </Link>
        </div>
        <div className={`${style.cardItem} ${style.cardItemCount}`}>
          <div className={style.count}>{cardsCount}</div>
        </div>
        <div className={`${style.cardItem} ${style.cardItemDate}`}>
          <div className={style.date}>{created}</div>
        </div>
        <div className={`${style.cardItem} ${style.cardItemDate}`}>
          <div className={style.date}>{updated}</div>
        </div>
        <div className={`${style.cardItem} ${style.cardItemActions}`}>
          <div className={style.button}>
            <div className={style.buttonDelete}>
              <button
                className={style.button}
                onClick={() => setModalIsOpen(true)}
                disabled={false}
              >
                ✘{' '}
              </button>
            </div>

            <div className={style.buttonEdit}>
              <button className={style.button} disabled={false}>
                ✎{' '}
              </button>
            </div>

            <div className={style.buttonLearn}>
              <button
                className={style.button}
                onClick={() => onClickLearnCard(true)}
                disabled={cardsCount === valueForDisabled}
              >
                🕮{' '}
              </button>
            </div>

            <div className={style.buttonAdd}>
              <button
                className={style.button}
                onClick={() => {
                  onAddCardClick(id);
                }}
                disabled={false}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </>
    );
  },
);
