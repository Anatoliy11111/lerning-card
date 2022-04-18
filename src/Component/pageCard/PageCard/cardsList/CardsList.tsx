import React, { ChangeEvent, useState } from 'react';

import { useSelector } from 'react-redux';

import { GeneralInput } from 'Component/01-common';
import style from 'Component/pageCard/PageCard/Card/card.module.scss';
import { Rating } from 'Component/pageCard/PageCard/cardsList/Rating/Rating';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { RootState } from 'redux/store/Store';

type CardItemType = {
  card: CardsType;
};
const CardItem = ({ card }: CardItemType): any => {
  const { question, answer, updated, grade } = card;
  const [ratingValue, setRatingValue] = useState(grade);
  return (
    <div className={style.card}>
      <div className={style.cardItem}>
        <div className={style.count}>{question}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.count}>{answer}</div>
      </div>

      <div className={style.cardItem}>
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        <div className={style.date}>{updated.substring(0, 10)}</div>
      </div>
      <div className={style.cardItem}>
        <Rating value={ratingValue} onClick={setRatingValue} />
      </div>
    </div>
  );
};

export const CardsList = (): any => {
  const cardsList = useSelector<RootState, CardsType[]>(
    state => state.cardsListReducer.cards,
  );

  const [value, setValue] = useState('');
  const onChangeSearching = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
  };
  return (
    <div>
      <h1>Packs Card</h1>
      <GeneralInput
        type="text"
        id="34"
        name="text"
        value={value}
        changeInputCallback={e => onChangeSearching(e)}
      />
      <GeneralInput
        type="text"
        id="34"
        name="text"
        value={value}
        changeInputCallback={e => onChangeSearching(e)}
      />
      {cardsList.map(card => (
        // eslint-disable-next-line no-underscore-dangle
        <CardItem key={card._id} card={card} />
      ))}
    </div>
  );
};
