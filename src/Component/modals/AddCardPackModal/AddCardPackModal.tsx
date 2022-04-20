import React, { ChangeEvent, useState } from 'react';

import style from 'Component/modals/AddCardPackModal/AddCardPackModal.module.scss';

type AddCardPackModalProps = {
  saveCallback: (cardPackName: string) => void;
  open: boolean;
  closeModal: () => void;
};

export const AddCardPackModal: React.FC<AddCardPackModalProps> = ({
  open,
  saveCallback,
  closeModal,
}) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInputValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.currentTarget.value);
  };
  const onClickSaveHandler = (): void => {
    saveCallback(inputValue);
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
          <h2>Add new pack</h2>
          <button className={style.closeBtn} onClick={onClickCloseHandler}>
            X
          </button>
        </div>
        <div className={style.InputInModal}>
          <label className={style.label} htmlFor="name">
            Name pack{' '}
          </label>
          <input
            placeholder="Name Pack"
            value={inputValue}
            onChange={e => onChangeInputValueHandler(e)}
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
