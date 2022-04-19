import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import { CardWithAnswer } from 'Component/pageCard/LearnCard/CardWithAnswer/CardWithAnswer';
import { CardWithQuestion } from 'Component/pageCard/LearnCard/CardWithQuestion/CardWithQuestion';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { RootState } from 'redux/store/Store';

type LearnCardType = {
  setLearnCard: (isBack: boolean) => void;
};

export const LearnCard: React.FC<LearnCardType> = ({ setLearnCard }) => {
  const [question, setQuestion] = useState(true);
  const cards = useSelector<RootState, CardsType[]>(
    state => state.cardsListReducer.cards,
  );
  const packName = useSelector<RootState, string>(
    state => state.cardsListReducer.packName,
  );
  if (question) {
    return (
      <CardWithQuestion
        packName={packName}
        cards={cards}
        setQuestion={setQuestion}
        setLearnCard={setLearnCard}
      />
    );
  }
  return <CardWithAnswer cards={cards} packName={packName} setLearnCard={setLearnCard} />;
};
