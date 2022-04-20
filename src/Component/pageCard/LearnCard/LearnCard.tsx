import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { Preloader } from 'Component/01-common/preloader/Preloader';
import { CardWithAnswer } from 'Component/pageCard/LearnCard/CardWithAnswer/CardWithAnswer';
import { CardWithQuestion } from 'Component/pageCard/LearnCard/CardWithQuestion/CardWithQuestion';
import { Lern } from 'enum/enum';
import { CardsType } from 'redux/reducers/cardsListReducer/cardsListReducer';
import { getStatusLoading } from 'redux/selectors';
import { RootState } from 'redux/store/Store';

type LearnCardType = {
  setLearnCard: (isBack: boolean) => void;
};

const getCard = (cards: CardsType[]): any => {
  const sum = cards.reduce(
    (acc, card) =>
      acc + (Lern.numberSmart - card.grade) * (Lern.numberSmart - card.grade),
    Lern.acc,
  );
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      const newSum =
        acc.sum + (Lern.numberSmart - card.grade) * (Lern.numberSmart - card.grade);
      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 },
  );
  return cards[res.id + Lern.validValue];
};

export const LearnCard: React.FC<LearnCardType> = ({ setLearnCard }) => {
  const cards = useSelector<RootState, CardsType[]>(
    state => state.cardsListReducer.cards,
  );
  const startLearn = useSelector(getStatusLoading);
  const [question, setQuestion] = useState(true);
  const [card, setCard] = useState<CardsType>(cards[Lern.initialValue]);
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
