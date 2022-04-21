import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import styles from './cardsList.module.scss';

import { Preloader } from 'Component/01-common';
import { CardItem } from 'Component/pageCard/PageCard/cardsList/cardItem/CardItem';
import { Pagination } from 'Component/pageCard/Pagination/Pagination';
import { UniversalSearch } from 'Component/pageCard/Search/UniversalSearch';
import { setCurrentNumberPageAC, setPackName } from 'redux/reducers';
import {
  getCardsList,
  getCardsPageCount,
  getCardsTotalCount,
  getPackNameCards,
  getStatusLoading,
} from 'redux/selectors';
import { getCardsTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

export const CardsList: React.FC = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const [valueQuest, setValueQuest] = useState('');
  const [valueAnswer, setValueAnswer] = useState('');
  const cardsList = useSelector(getCardsList);
  const cardsTotalCount = useSelector(getCardsTotalCount);
  const pageCount = useSelector(getCardsPageCount);
  const preloader = useSelector(getStatusLoading);
  const packName = useSelector(getPackNameCards);

  useEffect(() => {
    dispatch(getCardsTC(id));
  }, []);

  const pagesCount = Math.ceil(cardsTotalCount / pageCount);

  const fetchPageCb = useCallback(
    (num: number): void => {
      dispatch(setCurrentNumberPageAC(num));
    },
    [dispatch],
  );

  if (preloader === 'loading') {
    return <Preloader />;
  }
  return (
    <div className={styles.cardsList}>
      <div className={styles.searchBlock}>
        <div className={styles.searchBlockItem}>
          <label htmlFor="" className={styles.searchBlockLabel}>
            Search questsion
          </label>
          <UniversalSearch value={valueQuest} AC={setPackName} setValue={setValueQuest} />
        </div>
        <div className={styles.searchBlockItem}>
          <label htmlFor="" className={styles.searchBlockLabel}>
            Search answer{' '}
          </label>
          <UniversalSearch
            value={valueAnswer}
            AC={setPackName}
            setValue={setValueAnswer}
          />
        </div>
      </div>

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
          <CardItem key={card._id} card={card} />
        ))}
      </div>

      <Pagination pagesCount={pagesCount} fetchPageCb={fetchPageCb} />
    </div>
  );
};
