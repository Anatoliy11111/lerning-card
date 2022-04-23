import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import style from 'Component/modals/AddCardPackModal/AddCardPackModal.module.scss';
import { createCardTC } from 'redux/thunk/thunkCardsList/thunkCardsList';

type AddCardPackModalProps = {
  id: string;
  open: boolean;
  closeModal: () => void;
};

export const AddCardModal: React.FC<AddCardPackModalProps> = ({
  id,
  open,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const [questionValue, setQuestionValue] = useState('');
  const [answerValue, setAnswerValue] = useState('');

  const onChangeQuestionInputValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuestionValue(e.currentTarget.value);
  };
  const onChangeAnswerInputValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setAnswerValue(e.currentTarget.value);
  };
  const onClickSaveHandler = (): void => {
    dispatch(createCardTC(id, questionValue, answerValue));
    setQuestionValue('');
    setAnswerValue('');
  };

  const onClickCloseHandler = (): void => {
    closeModal();
    setQuestionValue('');
    setAnswerValue('');
  };

  if (!open) {
    return null;
  }
  return (
    <>
      <div role="none" className={style.overlay} onClick={onClickCloseHandler} />
      <div className={style.modal_style}>
        <div className={style.headerModal}>
          <h2>Add new card</h2>
          <button className={style.closeBtn} onClick={onClickCloseHandler}>
            X
          </button>
        </div>
        <div className={style.InputInModal}>
          <label className={style.label} htmlFor="name">
            Card parameters{' '}
          </label>
          <input
            placeholder="Type question"
            value={questionValue}
            onChange={e => onChangeQuestionInputValueHandler(e)}
          />
          <input
            placeholder="Type answer"
            value={answerValue}
            onChange={e => onChangeAnswerInputValueHandler(e)}
          />
        </div>
        <div className={style.buttonContainer}>
          <button onClick={onClickCloseHandler}>Cancel</button>
          <button onClick={onClickSaveHandler}>Save</button>
        </div>
      </div>
    </>
  );
};
