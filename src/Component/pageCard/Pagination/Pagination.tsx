import React, { useState } from 'react';

import style from './pagination.module.scss';

import { pageMaker } from 'Component/pageCard/Pagination/pageMaker';
import { Numbers } from 'enum/enum';

type PaginationProps = {
  pagesCount: number;
  fetchPageCb: (num: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({ pagesCount, fetchPageCb }) => {
  const [currentPage, setCurrentPage] = useState(Numbers.One);
  const page: number[] = []; // Массив со страницами

  pageMaker(page, pagesCount, currentPage); // Функция Создания страниц

  const onClickHandler = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    fetchPageCb(pageNumber);
  };
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
};
