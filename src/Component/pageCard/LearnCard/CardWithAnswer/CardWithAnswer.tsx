import React from 'react';

import style from './CardWithAnswer.module.scss';

import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';

type CardWithAnswerType = {
  packName: string;
  cards: CardsType[];
  setLearnCard: (isBAck: boolean) => void;
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
  cards,
  setLearnCard,
}) => {
  const onClickCancel = (): void => {
    setLearnCard(false);
  };

  return (
    <div className={style.answerContainer}>
      <div className={style.packName}>Learn: {packName}</div>
      <div className={style.question}>
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        Question: <span>{cards[0].answer}</span>
      </div>
      <div className={style.answer}>
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        Answer:<span>{cards[0].answer}</span>{' '}
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
        <button>Next</button>
      </div>
    </div>
  );
};
