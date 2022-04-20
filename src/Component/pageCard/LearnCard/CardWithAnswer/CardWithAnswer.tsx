import React from 'react';

import style from './CardWithAnswer.module.scss';

import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';

type CardWithAnswerType = {
  packName: string;
  card: CardsType;
  cards: CardsType[];
  setLearnCard: (isBAck: boolean) => void;
  setCard: (card: CardsType) => void;
  getCard: (cards: CardsType[]) => CardsType;
  setQuestion: (answer: boolean) => void;
};
const grade = [
  'Did not know',
  'Forgot',
  'A lot of thought',
  'Сonfused',
  'Knew the answer',
];

export const CardWithAnswer: React.FC<CardWithAnswerType> = ({
  packName,
  card,
  setLearnCard,
  setCard,
  cards,
  getCard,
  setQuestion,
}) => {
  const onClickCancel = (): void => {
    setLearnCard(false);
  };
  const onNext = (): void => {
    setCard(getCard(cards));
    setQuestion(true);
  };
  return (
    <div className={style.answerContainer}>
      <div className={style.packName}>Learn: {packName}</div>
      <div className={style.question}>
        Question: <span>{card.question}</span>
      </div>
      <div className={style.answer}>
        Answer:<span>{card.answer}</span>{' '}
      </div>
      <div className={style.radio}>
        <h3>Rate yourself: </h3>
        {grade.map(g => (
          <div key={g}>
            {' '}
            <input type="radio" value={g} />
            <span>{g}</span>
          </div>
        ))}
      </div>
      <div className={style.cardButton}>
        <button onClick={onClickCancel}>Cancel</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};
