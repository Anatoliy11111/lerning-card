import React, { memo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './card.module.scss';

import { GetPacksListCard } from 'api/auth-api/types';
import { DeleteModal } from 'Component/modals/DeleteModal/DeleteModal';
import { EditModal } from 'Component/modals/EditModal/EditModal';
import { MyCard } from 'Component/pageCard/PageCard/Card/MyCard';
import { NotMyCard } from 'Component/pageCard/PageCard/Card/NotMyCard';
import { Data } from 'enum/enum';
import { setPackName } from 'redux/reducers/cardsListReducer/CardsListActionCreator';
import { getMyId } from 'redux/selectors';
import { deleteCardFromPacksListTC } from 'redux/thunk';
import { getCardsTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

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
  const createdCard = created.substring(Data.start, Data.finish);
  const updatedCard = updated.substring(Data.start, Data.finish);
  const onClickLearnCard = (learningCard: boolean): void => {
    setLearnCard(learningCard);
    dispatch(getCardsTC(_id));
    dispatch(setPackName(name));
  };

  if (myId !== user_id) {
    return (
      <NotMyCard
        onClickLearnCard={onClickLearnCard}
        cardsCount={cardsCount}
        name={name}
        created={createdCard}
        updated={updatedCard}
        _id={_id}
      />
    );
  }

  return (
    /*    <div className={style.card}>
      <MyCard
        name={name}
        cardsCount={cardsCount}
        created={createdCard}
        updated={updatedCard}
        setModalIsOpen={setModalIsOpen}
        onClickLearnCard={onClickLearnCard}
        id={_id}
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
    </div> */
    /*   <div className={style.card}>
      <MyCard
        name={name}
        cardsCount={cardsCount}
        created={createdCard}
        updated={updatedCard}
        setDeleteModalIsOpen={setDeleteModalIsOpen}
        setEditModalIsOpen={setEditModalIsOpen}
        setAddCardModalIsOpen={setAddCardModalIsOpen}
        onClickLearnCard={onClickLearnCard}
        id={_id}
      />
      <div>
        <DeleteModal
          name={name}
          open={deleteModalIsOpen}
          deleteCallback={() => onDeleteCardClick(_id)}
          closeModal={() => setDeleteModalIsOpen(false)}
        >
          {name}
        </DeleteModal>
        <EditModal
          open={editModalIsOpen}
          closeModal={() => setEditModalIsOpen(false)}
          id={_id}
        />
        <AddCardModal
          open={addCardModalIsOpen}
          closeModal={() => setAddCardModalIsOpen(false)}
          id={_id}
        />
      </div>
    </div> */
    <div />
  );
});
