import React from 'react';

import style from './CardWithQuestion.module.scss';

import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';

type cardWithQuestionType = {
  packName: string;
  cards: CardsType[];
  setQuestion: (answer: boolean) => void;
  setLearnCard: (isBack: boolean) => void;
};

export const CardWithQuestion: React.FC<cardWithQuestionType> = ({
  packName,
  cards,
  setQuestion,
  setLearnCard,
}) => {
  const onClickCancel = (): void => {
    setLearnCard(false);
  };
  return (
    <div className={style.questionCardContainer}>
      <div className={style.cardName}>Learn: {packName} </div>
      <div className={style.cardQuestion}>
        <h3>
          {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
          Question:<span>{cards[0].question}</span>
        </h3>
      </div>
      <div className={style.cardButton}>
        <button onClick={onClickCancel}>Cancel</button>
        <button onClick={() => setQuestion(false)}>Sow Answer</button>
      </div>
    </div>
  );
};
