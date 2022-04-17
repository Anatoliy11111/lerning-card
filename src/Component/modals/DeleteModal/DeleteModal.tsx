import React from 'react';

import style from 'Component/modals/DeleteModal/DeleteModal.module.scss';

type ModalProps = {
  name: string;
  deleteCallback: () => void;
  open: boolean;
  closeModal: () => void;
};

export const DeleteModal: React.FC<ModalProps> = ({
  name,
  open,
  children,
  deleteCallback,
  closeModal,
}) => {
  if (!open) {
    return null;
  }
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className={style.overlay} onClick={closeModal} />
      <div className={style.modal_style}>
        <div>
          Delete {name} Pack?
          <button className={style.closeBtn} onClick={closeModal}>
            X
          </button>
        </div>
        <div>{children}</div>
        <button onClick={closeModal}>Cancel</button>
        <button onClick={deleteCallback}>Delete</button>
      </div>
    </>
  );
};
