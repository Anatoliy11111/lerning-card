import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Card } from './Card/Card';
import style from './pageCard.module.scss';
import { SortItem } from './sortItem/SortItem';

import { SortPacksType } from 'api/auth-api/types';
import { GeneralButton } from 'Component/01-common';
import { Preloader } from 'Component/01-common/preloader/Preloader';
import { AddCardPackModal } from 'Component/modals/AddCardPackModal/AddCardPackModal';
import { LearnCard } from 'Component/pageCard/LearnCard/LearnCard';
import { Pagination } from 'Component/pageCard/Pagination/Pagination';
import { UniversalSearch } from 'Component/pageCard/Search/UniversalSearch';
import { SettingCardCount } from 'Component/pageCard/SettingCardCount/SettingCardCount';
import { setCurrentNumberPageAC, sortPacksListAC } from 'redux/reducers';
import { getIsLoginIn } from 'redux/selectors';
import {
  getCardPacksTotalCount,
  getCards,
  getIsMyCard,
  getMaxCardCount,
  getMinCardCount,
  getPackName,
  getPage,
  getPageCount,
  getSortPacks,
  getStatusLoading,
} from 'redux/selectors/selectorsPacksList/selectorsPacksList';
import {
  createCardPacksListTC,
  getPacksListTC,
} from 'redux/thunk/thunkPacksList/thunkPacksList';

export const PageCard: React.FC = () => {
  const [value, setValue] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [learnCard, setLearnCard] = useState(false);
  const dispatch = useDispatch();

  const cards = useSelector(getCards);
  const packName = useSelector(getPackName);
  const cardPacksTotalCount = useSelector(getCardPacksTotalCount);
  const pageCount = useSelector(getPageCount);
  const statusLoading = useSelector(getStatusLoading);
  const sortPacks = useSelector(getSortPacks);
  const page = useSelector(getPage);
  const minCardCount = useSelector(getMinCardCount);
  const maxCardCount = useSelector(getMaxCardCount);
  const isMyCard = useSelector(getIsMyCard);
  const isLoginIn = useSelector(getIsLoginIn);
  const pagesCount = Math.ceil(cardPacksTotalCount / pageCount);

  useEffect(() => {
    dispatch(getPacksListTC());
  }, [packName, sortPacks, page, pageCount, minCardCount, maxCardCount, isMyCard]);
  const onCreateCardClick = (cardPackName: string): void => {
    dispatch(createCardPacksListTC(cardPackName));
    setModalIsOpen(false);
  };
  const fetchPageCb = useCallback(
    (num: number): void => {
      dispatch(setCurrentNumberPageAC(num));
    },
    [dispatch],
  );

  const onSortCardClick = (sortValue: SortPacksType): void => {
    dispatch(sortPacksListAC(sortValue));
  };

  if (!isLoginIn) {
    return <Navigate to="/login" />;
  }

  if (learnCard) {
    return (
      <div className={style.LearnCardContainer}>
        <LearnCard setLearnCard={setLearnCard} />
      </div>
    );
  }
  return (
    <div className={style.packsList}>
      <div className={style.cardCount}>
        <SettingCardCount />
      </div>
      <div className={style.packListContainer}>
        <h1 className={style.title}>PacksList</h1>
        <div className={style.form}>
          <UniversalSearch value={value} setValue={setValue} />
          <GeneralButton
            onClickCallback={() => setModalIsOpen(true)}
            type="button"
            value="Add pack"
          />
        </div>
        <div>
          <AddCardPackModal
            saveCallback={cardPackName => onCreateCardClick(cardPackName)}
            open={modalIsOpen}
            closeModal={() => setModalIsOpen(false)}
          />
        </div>

        <div className={style.packsList__cards}>
          <div className={style.packsList__sort}>
            <SortItem callBackSort={() => onSortCardClick('0name')} title="Name" />
            <SortItem callBackSort={() => onSortCardClick('0cardsCount')} title="Cards" />
            <SortItem
              callBackSort={() => onSortCardClick('0updated')}
              title="Last Updated"
            />
            <SortItem callBackSort={() => onSortCardClick('0created')} title="Created" />
            <div className={style.packsList__sortItem}>
              <div>Actions</div>
            </div>
          </div>
          <div className={style.cards}>
            {statusLoading === 'loading' ? (
              <Preloader />
            ) : (
              cards.map(card => (
                // eslint-disable-next-line no-underscore-dangle
                <Card key={card._id} card={card} setLearnCard={setLearnCard} />
              ))
            )}
          </div>
        </div>
        <div>
          <Pagination pagesCount={pagesCount} fetchPageCb={fetchPageCb} />
        </div>
      </div>
    </div>
  );
};
