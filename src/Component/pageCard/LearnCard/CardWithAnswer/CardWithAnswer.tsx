import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import style from './CardWithAnswer.module.scss';

import { Numbers } from 'enum/enum';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { sendGradeTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

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
  const [myGrade, setMyGrade] = useState(Numbers.One);
  const dispatch = useDispatch();
  const onClickCancel = (): void => {
    setLearnCard(false);
  };
  const onNext = (): void => {
    setCard(getCard(cards));
    setQuestion(true);
    dispatch(sendGradeTC(card._id, myGrade));
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
        {grade.map((g, i) => (
          <div key={g}>
            {' '}
            <input
              type="radio"
              name="grade"
              value={g}
              onClick={() => setMyGrade(i + Numbers.One)}
            />
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
