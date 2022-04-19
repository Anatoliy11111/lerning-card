import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';

import style from 'Component/pageCard/LearnCard/LearnCard.module.scss';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';

type cardWithQuestionType = {
  packName: string;
  cards: CardsType[];
  setQuestion: (answer: boolean) => void;
};

export const CardWithQuestion: React.FC<cardWithQuestionType> = ({
  packName,
  cards,
  setQuestion,
}) => {
  const [isBack, setIsBack] = useState(false);
  const onClickCancel = (): void => {
    setIsBack(true);
  };
  if (isBack) {
    return <Navigate to="/profile" />;
  }
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
