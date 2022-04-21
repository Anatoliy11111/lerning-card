import React, { memo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './card.module.scss';

import { GetPacksListCard } from 'api/auth-api/types';
import { DeleteModal } from 'Component/modals/DeleteModal/DeleteModal';
import { MyCard } from 'Component/pageCard/PageCard/Card/MyCard';
import { NotMyCard } from 'Component/pageCard/PageCard/Card/NotMyCard';
import { setPackName } from 'redux/reducers/cardsListReducer/CardsListActionCreator';
import { getMyId } from 'redux/selectors';
import { deleteCardFromPacksListTC } from 'redux/thunk';
import { getCardstTC, createCardTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

type CardType = {
  card: GetPacksListCard;
  setLearnCard: (learningCard: boolean) => void;
};
export const Card = memo(({ card, setLearnCard }: CardType) => {
  const { user_id, _id, name, cardsCount, created, updated } = card;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const myId = useSelector(getMyId);
  const dispatch = useDispatch();
  const onDeleteCardClick = (idCard: string): void => {
    dispatch(deleteCardFromPacksListTC(idCard));
    setModalIsOpen(false);
  };

  // const onAddCardClick = (_id: string): void => {
  //   dispatch(createCardTC(_id));
  // };

  const onClickLearnCard = (learningCard: boolean): void => {
    setLearnCard(learningCard);
    dispatch(getCardstTC(_id));
    dispatch(setPackName(name));
  };

  const onGetCarsListClick = (cardsId: string): void => {
    dispatch(getCardstTC(cardsId));
  };
  if (myId !== user_id) {
    return (
      <NotMyCard
        onClickLearnCard={onClickLearnCard}
        cardsCount={cardsCount}
        name={name}
        /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
        created={created.substring(0, 10)}
        /* eslint-disable-next-line @typescript-eslint/no-magic-numbers */
        updated={updated.substring(0, 10)}
        user_id={user_id}
        _id={_id}
      />
    );
  }

  return (
    <div className={style.card}>
      <MyCard
        name={name}
        cardsCount={cardsCount}
        created={created}
        updated={updated}
        setModalIsOpen={setModalIsOpen}
        onClickLearnCard={onClickLearnCard}
      />
      <div>
        <DeleteModal
          name={name}
          open={modalIsOpen}
          deleteCallback={() => onDeleteCardClick(_id)}
          closeModal={() => setModalIsOpen(false)}
        >
          {name}
        </DeleteModal>
      </div>
    </div>
  );
});
// <GeneralButton
//     onClickCallback={() => onAddCardClick(_id)}
//     type="button"
//     value="Add card"
// />