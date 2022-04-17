import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Card } from './Card/Card';
import style from './pageCard.module.scss';
import { SortItem } from './sortItem/SortItem';

import { SortPacksType } from 'api/auth-api/types';
import { GeneralButton, GeneralInput } from 'Component/01-common';
import { Preloader } from 'Component/01-common/preloader/Preloader';
import { Pagination } from 'Component/pageCard/Pagination/Pagination';
import { SettingCardCount } from 'Component/pageCard/SettingCardCount/SettingCardCount';
import { useDebounce } from 'hooks/useDebounce';
import { setCurrentNumberPageAC, setPacNameAC, sortPacksListAC } from 'redux/reducers';
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
import { setNameTC } from 'redux/thunk';
import {
  createCardPacksListTC,
  getPacksListTC,
} from 'redux/thunk/thunkPacksList/thunkPacksList';

export const PageCard: React.FC = () => {
  const [value, setValue] = useState('');
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

  const setName = (): void => {
    dispatch(setPacNameAC(value));
  };

  useEffect(() => {
    dispatch(getPacksListTC());
  }, [packName, sortPacks, page, pageCount, minCardCount, maxCardCount, isMyCard]);

  const onCreateCardClick = (): void => {
    dispatch(createCardPacksListTC());
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
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const debouncedSearch = useDebounce(value, 750, setName);
  const onChangeSearching = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
    debouncedSearch();
  };

  if (!isLoginIn) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={style.packsList}>
      <div className={style.cardCount}>
        <SettingCardCount />
      </div>
      <div className={style.packListContainer}>
        <h1 className={style.title}>PacksList</h1>
        <div className={style.form}>
          <GeneralInput
            type="text"
            id="34"
            name="text"
            value={value}
            changeInputCallback={e => onChangeSearching(e)}
          />
          <GeneralButton
            onClickCallback={onCreateCardClick}
            type="button"
            value="Add pack"
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
              // eslint-disable-next-line no-underscore-dangle
              cards.map(card => <Card key={card._id} card={card} />)
            )}
          </div>
        </div>
        <div>
          <Pagination pagesCount={pagesCount} fetchPageCb={fetchPageCb} />
        </div>
      </div>
    </div>
  );
  // filteredValue
};
