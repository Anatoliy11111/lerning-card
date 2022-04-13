import React, { memo, MouseEventHandler } from 'react';

import style from './GeneralButton.module.css';

type GeneralButtonType = {
  type: 'button' | 'submit' | 'reset';
  value?: string;
  disabled?: boolean;
  onClickCallback?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const GeneralButton = memo(
  ({ value, onClickCallback, disabled, type }: GeneralButtonType) => {
    const checkDisabled = !disabled ? style.activeButton : style.disabledButton;

    return (
      <div className={style.containerButton}>
        <button
          type={type}
          onClick={onClickCallback}
          disabled={disabled}
          className={`${checkDisabled} ${style.button}`}
        >
          {value}
        </button>
      </div>
    );
  },
);
