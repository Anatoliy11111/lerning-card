import React, { memo, useCallback, useState } from 'react';

import { useSelector } from 'react-redux';

import style from './pagination.module.scss';

import { pageMaker } from 'Component/pageCard/Pagination/pageMaker';
import { RootState } from 'redux/store/Store';

type PaginationProps = {
  pagesCount: number;
  fetchPageCb: (num: number) => void;
};

export const Pagination: React.FC<PaginationProps> = memo(
  ({ pagesCount, fetchPageCb }) => {
    const num = useSelector<RootState, number>(state => state.packsListReducer.page);
    const [currentPage, setCurrentPage] = useState(num);
    const page: number[] = []; // Массив со страницами

    pageMaker(page, pagesCount, currentPage); // Функция Создания страниц

    const onClickHandler = useCallback(
      (pageNumber: number): void => {
        setCurrentPage(pageNumber);
        fetchPageCb(pageNumber);
      },
      [pagesCount],
    );
    return (
      <div className={style.pages}>
        {page.map(el => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            role="button"
            tabIndex={0}
            onClick={() => onClickHandler(el)}
            className={currentPage === el ? style.current_page : style.page}
            key={`${el}_2`}
          >
            {el}
          </div>
        ))}
      </div>
    );
  },
);
