import React, { memo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './card.module.scss';

import { GetPacksListCard } from 'api/auth-api/types';
import { GeneralButton } from 'Component/01-common';
import { DeleteModal } from 'Component/modals/DeleteModal/DeleteModal';
import { NotMyCard } from 'Component/pageCard/PageCard/Card/NotMyCard';
import { getMyId } from 'redux/selectors';
import { deleteCardFromPacksListTC } from 'redux/thunk';
import { createCardTC, getCardstTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

type CardType = {
  card: GetPacksListCard;
};
export const Card = memo(({ card }: CardType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { user_id, _id, name, cardsCount, created, updated } = card;
  const myId = useSelector(getMyId);
  const dispatch = useDispatch();

  const onDeleteCardClick = (idCard: string): void => {
    dispatch(deleteCardFromPacksListTC(idCard));
    setModalIsOpen(false);
  };
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const onAddCardClick = (_id: string): void => {
    dispatch(createCardTC(_id));
  };

  const onGetCarsListClick = (cardsId: string): void => {
    dispatch(getCardstTC(cardsId));
  };
  if (myId !== user_id) {
    return (
      <NotMyCard
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
      <div className={style.cardItem}>
        <Link
          to={`/card/id=${user_id}`}
          onClick={() => onGetCarsListClick(_id)}
          className={style.name}
        >
          {' '}
          {name}
        </Link>
      </div>
      <div className={style.cardItem}>
        <div className={style.count}>{cardsCount}</div>
      </div>
      <div className={style.cardItem}>
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        <div className={style.date}>{created.substring(0, 10)}</div>
      </div>
      <div className={style.cardItem}>
        {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
        <div className={style.date}>{updated.substring(0, 10)}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.button}>
          <GeneralButton
            type="button"
            onClickCallback={() => setModalIsOpen(true)}
            disabled={false}
            value="delete"
          />
          <GeneralButton
            type="button"
            onClickCallback={() => {}}
            disabled={false}
            value="Edit"
          />
          <GeneralButton
            type="button"
            onClickCallback={() => {}}
            disabled={false}
            value="Learn"
          />
          <GeneralButton
            onClickCallback={() => onAddCardClick(_id)}
            type="button"
            value="Add card"
          />
        </div>
      </div>
      <div>
        <DeleteModal
          name={name}
          open={modalIsOpen}
          deleteCallback={() => onDeleteCardClick(_id)}
          closeModal={() => setModalIsOpen(false)}
        >
          Do you really want to remove {name}? <br />
          All cards will be excluded from this course.
        </DeleteModal>
      </div>
    </div>
  );
});
