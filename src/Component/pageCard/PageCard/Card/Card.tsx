import React, { memo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './card.module.scss';

import { GetPacksListCard } from 'api/auth-api/types';
import { GeneralButton } from 'Component/01-common';
import { DeleteModal } from 'Component/modals/DeleteModal/DeleteModal';
import { getMyId } from 'redux/selectors';
import { deleteCardFromPacksListTC } from 'redux/thunk';

type CardType = {
  card: GetPacksListCard;
};
export const Card = memo(({ card }: CardType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // eslint-disable-next-line camelcase
  const { user_id, _id, name, cardsCount, created, updated } = card;
  const myId = useSelector(getMyId);
  const dispatch = useDispatch();

  const onDeleteCardClick = (idCard: string): void => {
    dispatch(deleteCardFromPacksListTC(idCard));
    setModalIsOpen(false);
  };

  // eslint-disable-next-line camelcase
  if (myId !== user_id) {
    return (
      <div className={style.card}>
        <div className={style.cardItem}>
          <Link to="/cards" className={style.name}>
            {' '}
            {name}
          </Link>
        </div>
        <div className={style.cardItem}>
          <div className={style.count}>{cardsCount}</div>
        </div>
        <div className={style.cardItem}>
          <div className={style.date}>{created}</div>
        </div>
        <div className={style.cardItem}>
          <div className={style.date}>{updated}</div>
        </div>
        <div className={style.cardItem}>
          <div className={style.button}>
            <GeneralButton
              type="button"
              onClickCallback={() => {}}
              disabled={false}
              value="Learn"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={style.card}>
      <div className={style.cardItem}>
        <Link to="/cards" className={style.name}>
          {' '}
          {name}
        </Link>
      </div>
      <div className={style.cardItem}>
        <div className={style.count}>{cardsCount}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.date}>{created}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.date}>{updated}</div>
      </div>
      <div className={style.cardItem}>
        <div className={style.button}>
          <GeneralButton
            type="button"
            // onClickCallback={() => onDeleteCardClick(_id)}
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
