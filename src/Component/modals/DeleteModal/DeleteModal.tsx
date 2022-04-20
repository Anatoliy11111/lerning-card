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
      <div role="none" className={style.overlay} onClick={closeModal} />
      <div className={style.modal_style}>
        <div className={style.closeCard}>
          <h2> Delete {name} Pack?</h2>
          <button className={style.closeBtn} onClick={closeModal}>
            X
          </button>
        </div>
        <div className={style.messageAboutDelete}>
          Do you really want to remove <span>Pack Name - {children}?</span>
          <br />
          All cards will be excluded from this course.
        </div>
        <div className={style.btnContainer}>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={deleteCallback}>Delete</button>
        </div>
      </div>
    </>
  );
};
