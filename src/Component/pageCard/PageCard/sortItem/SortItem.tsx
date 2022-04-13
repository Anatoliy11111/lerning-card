import React from 'react';

import style from 'Component/pageCard/PageCard/pageCard.module.scss';

type SortItemType = {
  title: string;
  callBackSort: () => void;
};
export const SortItem = ({ title, callBackSort }: SortItemType): any => {
  const onSortCardNameCardClick = (): void => {
    callBackSort();
  };
  return (
    <div className={style.packsList__sortItem}>
      <div
        onKeyPress={() => {}}
        tabIndex={0}
        role="button"
        onClick={onSortCardNameCardClick}
      >
        {title}
      </div>
    </div>
  );
};
