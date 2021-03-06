import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { CardWithAnswer } from './CardWithAnswer/CardWithAnswer';
import { CardWithQuestion } from './CardWithQuestion/CardWithQuestion';

import { Preloader } from 'Component/01-common';
import { Learn } from 'enum/enum';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { getStatusLoading } from 'redux/selectors';
import { RootState } from 'redux/store/Store';

type LearnCardType = {
  setLearnCard: (isBack: boolean) => void;
};

const getCard = (cards: CardsType[]): any => {
  const sum = cards.reduce(
    (acc, card) =>
      acc + (Learn.numberSmart - card.grade) * (Learn.numberSmart - card.grade),
    Learn.acc,
  );
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      const newSum =
        acc.sum + (Learn.numberSmart - card.grade) * (Learn.numberSmart - card.grade);
      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 },
  );
  return cards[res.id + Learn.validValue];
};

export const LearnCard: React.FC<LearnCardType> = ({ setLearnCard }) => {
  const cards = useSelector<RootState, CardsType[]>(
    state => state.cardsListReducer.cards,
  );
  const startLearn = useSelector(getStatusLoading);
  const [question, setQuestion] = useState(true);
  const [card, setCard] = useState<CardsType>(cards[Learn.initialValue]);
  const packName = useSelector<RootState, string>(
    state => state.cardsListReducer.packName,
  );
  useEffect(() => {
    setCard(getCard(cards));
  }, [cards]);
  if (startLearn === 'loading') {
    return <Preloader />;
  }
  if (question) {
    return (
      <CardWithQuestion
        packName={packName}
        card={card}
        setQuestion={setQuestion}
        setLearnCard={setLearnCard}
      />
    );
  }
  return (
    <CardWithAnswer
      card={card}
      cards={cards}
      packName={packName}
      setLearnCard={setLearnCard}
      getCard={getCard}
      setCard={setCard}
      setQuestion={setQuestion}
    />
  );
};
