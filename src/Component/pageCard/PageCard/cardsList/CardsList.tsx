import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styles from './cardsList.module.scss';

import { CardItem } from 'Component/pageCard/PageCard/cardsList/cardItem/CardItem';
import { Pagination } from 'Component/pageCard/Pagination/Pagination';
import { setCurrentNumberPageAC } from 'redux/reducers';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { RootState } from 'redux/store/Store';

export const CardsList = (): any => {
  const dispatch = useDispatch();

  const cardsList = useSelector<RootState, CardsType[]>(
    state => state.cardsListReducer.cards,
  );
  const cardsTotalCount = useSelector<RootState, number>(
    state => state.cardsListReducer.cardsTotalCount,
  );
  const pageCount = useSelector<RootState, number>(
    state => state.cardsListReducer.pageCount,
  );
  const pagesCount = Math.ceil(cardsTotalCount / pageCount);

  const fetchPageCb = useCallback(
    (num: number): void => {
      dispatch(setCurrentNumberPageAC(num));
    },
    [dispatch],
  );

  if (!cardsList.length) {
    return (
      <div
        style={{
          textAlign: 'center',
          fontSize: '4rem',
          fontWeight: '700',
          paddingTop: '3rem',
        }}
      >
        нет карточек :(
      </div>
    );
  }
  return (
    <div className={styles.cardsList}>
      <h1>Packs Card</h1>

      <div className={styles.cardsBlock}>
        <div className={styles.titleBlock}>
          <div className={styles.titleBlock__item}>
            <div>Question</div>
          </div>{' '}
          <div className={styles.titleBlock__item}>
            <div>Answer</div>
          </div>{' '}
          <div className={styles.titleBlock__item}>
            <div>Last Updated</div>
          </div>
          <div className={styles.titleBlock__item}>
            <div>Grade</div>
          </div>
          <div className={styles.titleBlock__item}>
            <div>Actions</div>
          </div>
        </div>
        {cardsList.map(card => (
          // eslint-disable-next-line no-underscore-dangle
          <CardItem key={card._id} card={card} />
        ))}
      </div>

      <Pagination pagesCount={pagesCount} fetchPageCb={fetchPageCb} />
    </div>
  );
};
