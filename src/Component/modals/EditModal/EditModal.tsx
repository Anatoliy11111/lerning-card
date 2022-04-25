import React, { ChangeEvent, useState } from 'react';

import { useDispatch } from 'react-redux';

import style from 'Component/modals/AddCardPackModal/AddCardPackModal.module.scss';
import { changeCardPacksListTC } from 'redux/thunk';

type EditModalProps = {
  id: string;
  open: boolean;
  closeModal: () => void;
};

export const EditModal: React.FC<EditModalProps> = ({ id, open, closeModal }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };
  const onClickSaveHandler = (name: string): void => {
    dispatch(changeCardPacksListTC(name, id));
    setInputValue('');
  };

  const onClickCloseHandler = (): void => {
    closeModal();
    setInputValue('');
  };

  if (!open) {
    return null;
  }
  return (
    <>
      <div role="none" className={style.overlay} onClick={onClickCloseHandler} />
      <div className={style.modal_style}>
        <div className={style.headerModal}>
          <h2>Change name of the pack</h2>
          <button className={style.closeBtn} onClick={onClickCloseHandler}>
            X
          </button>
        </div>
        <div className={style.InputInModal}>
          <label className={style.label} htmlFor="name">
            Name of pack{' '}
          </label>
          <input
            placeholder="Type new name of pack"
            value={inputValue}
            onChange={e => onChangeInputValueHandler(e)}
          />
        </div>
        <div className={style.buttonContainer}>
          <button onClick={onClickCloseHandler}>Cancel</button>
          <button onClick={() => onClickSaveHandler(inputValue)}>Save</button>
        </div>
      </div>
    </>
  );
};
