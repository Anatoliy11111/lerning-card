import React, { ChangeEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Card } from './Card/Card';
import style from './pageCard.module.scss';
import { SortItem } from './sortItem/SortItem';

import { GeneralButton, GeneralInput } from 'Component/01-common';
import { Pagination } from 'Component/pageCard/Pagination/Pagination';
import { SettingCardCount } from 'Component/pageCard/SettingCardCount/SettingCardCount';
import { useDebounce } from 'hooks/useDebounce';
import {
  sortCountCardPacksListAC,
  sortUpdatedCardPacksListAC,
  sortCreatedCardPacksListAC,
  sortNamePacksListAC,
  setPacNameAC,
} from 'redux/reducers';
import {
  getCardPacksTotalCount,
  getCards,
  getPackName,
  getPageCount,
} from 'redux/selectors/selectorsPacksList/selectorsPacksList';
import {
  createCardPacksListTC,
  getNewPageTC,
  getPacksListTC,
} from 'redux/thunk/thunkPacksList/thunkPacksList';

export const PageCard: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);
  const packName = useSelector(getPackName);
  const cardPacksTotalCount = useSelector(getCardPacksTotalCount);
  const pageCount = useSelector(getPageCount);
  const [value, setValue] = useState('');
  const pagesCount = Math.ceil(cardPacksTotalCount / pageCount);
  const setName = (): void => {
    dispatch(setPacNameAC(value));
  };
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const debouncedSearch = useDebounce(value, 750, setName);

  useEffect(() => {
    dispatch(getPacksListTC());
  }, [packName]);

  const onCreateCardClick = (): void => {
    dispatch(createCardPacksListTC());
  };
  const fetchPageCb = (num: number): void => {
    dispatch(getNewPageTC(num));
  };
  const onChangeSearching = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
    debouncedSearch();
  };
  const onSortNameCardClick = (): void => {
    dispatch(sortNamePacksListAC());
  };

  const onSortCountCardClick = (): void => {
    dispatch(sortCountCardPacksListAC());
  };
  const onSortUpdateCardClick = (): void => {
    dispatch(sortUpdatedCardPacksListAC());
  };
  const onSortCreatedCardClick = (): void => {
    dispatch(sortCreatedCardPacksListAC());
  };
  // const searchFn = (
  //   searchValue: string,
  //   itemsList: GetPacksListCard[],
  // ): GetPacksListCard[] => {
  //   if (!searchValue) {
  //     return itemsList;
  //   }
  //   return itemsList.filter(el => el.user_name.includes(searchValue));
  // };
  // const filteredValue = searchFn(debouncedSearch, cards);

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
            <SortItem callBackSort={onSortNameCardClick} title="Name" />
            <SortItem callBackSort={onSortCountCardClick} title="Cards" />
            <SortItem callBackSort={onSortUpdateCardClick} title="Last Updated" />
            <SortItem callBackSort={onSortCreatedCardClick} title="Created" />
            <div className={style.packsList__sortItem}>
              <div>Actions</div>
            </div>
          </div>
          <div className={style.cards}>
            {cards.map(card => (
              <Card /* eslint-disable-next-line no-underscore-dangle */
                key={card._id} /* eslint-disable-next-line no-underscore-dangle */
                _id={card._id}
                userId={card.user_id}
                /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
                created={card.created.substring(0, 10)}
                cardsCount={card.cardsCount}
                name={card.user_name}
                /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
                updated={card.updated.substring(0, 10)}
              />
            ))}
          </div>
          <div>
            <Pagination pagesCount={pagesCount} fetchPageCb={fetchPageCb} />
          </div>
        </div>
      </div>
    </div>
  );

  //   <div className={style.cards}>
  //     {filteredValue.map(card => (
  //       <Card /* eslint-disable-next-line no-underscore-dangle */
  //         key={card._id} /* eslint-disable-next-line no-underscore-dangle */
  //         _id={card._id}
  //         created={card.created}
  //         cardsCount={card.cardsCount}
  //         name={card.user_name}
  //         updated={card.updated}
  //       />
  //     ))}
  //   </div>
  //   <div>
  //     <Pagination pagesCount={pagesCount} fetchPageCb={fetchPageCb} />
  //   </div>
  // </div>
  // );
  // };
};
