import React, { ChangeEvent, useState } from 'react';

import style from 'Component/modals/DeleteModal/DeleteModal.module.scss';

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
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={style.overlay} onClick={onClickCloseHandler} />
      <div className={style.modal_style}>
        <div>
          Add new pack
          <button className={style.closeBtn} onClick={onClickCloseHandler}>
            X
          </button>
        </div>
        <div>
          <input
            placeholder="Type name of card pack"
            value={inputValue}
            onChange={e => onChangeInputValueHandler(e)}
          />
        </div>
        <div>
          <button onClick={onClickCloseHandler}>Cancel</button>
          <button onClick={onClickSaveHandler}>Save</button>
        </div>
      </div>
    </>
  );
};
