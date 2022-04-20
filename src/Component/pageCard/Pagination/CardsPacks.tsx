import React, { useEffect, useState } from 'react';

import { authAPI } from 'api/auth-api/auth-api';
import { Search } from 'Component/pageCard/Search/Search';
import { Numbers } from 'enum/enum';

type CardType = {
  cardsCount: number;
  created: string;
  deckCover?: null;
  grade: number;
  more_id: string;
  name: string;
  path: string;
  private: boolean;
  rating: number;
  shots: number;
  type: string;
  updated: string;
  user_id: string;
  user_name: string;
  __v: number;
  _id: string;
};

export const CardsPacks: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([
    {
      cardsCount: 0,
      created: '2022-04-06T08:39:14.757Z',
      grade: 0,
      more_id: '621dd8ae562c8400044cfd40',
      name: 'no Name',
      path: '/def',
      private: false,
      rating: 0,
      shots: 0,
      type: 'pack',
      updated: '2022-04-06T08:39:14.757Z',
      user_id: '621dd8ae562c8400044cfd40',
      user_name: 'pates1993@mail.ru',
      __v: 0,
      _id: '624d51b2b86201000437914b',
    },
  ]);
  const [pageContentCount, setPageContentCount] = useState(Numbers.Zero);
  const [cardPacksTotalCount, setCardPacksTotalCount] = useState(Numbers.Zero);
  // const pagesCount = Math.ceil(cardPacksTotalCount / pageContentCount);

  useEffect(() => {
    authAPI.getCardsPack().then(res => {
      setCards(res.data.cardPacks);
      setPageContentCount(res.data.pageCount);
      setCardPacksTotalCount(res.data.cardPacksTotalCount);
    });
  }, []); // При монтировании компоненты сетает в стейт паки карточек,
  // количество выводимых паков на страницу, и общее количество паков на сервере.

  return (
    <div>
      <Search />{' '}
      {cards &&
        cards.map(el => <div key={`${el}_${el.user_id}_${el.created}`}>{el.name}</div>)}
      {/* <Pagination pagesCount={pagesCount} /> */}
    </div>
  );
};
