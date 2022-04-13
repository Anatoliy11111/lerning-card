import React, {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  memo,
} from 'react';

import style from './GeneralInput.module.css';

type GeneralInputType = {
  type: string;
  id: string;
  name: string;
  value: string;
  changeInputCallback: ChangeEventHandler<HTMLInputElement>;
  onBlurCallback?: FocusEventHandler<HTMLInputElement> | undefined;
  onKeyPressCallback?: KeyboardEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
  error?: boolean;
};

export const GeneralInput = memo(
  ({
    type,
    id,
    name,
    value,
    error,
    disabled,
    changeInputCallback,
    onBlurCallback,
    onKeyPressCallback,
  }: GeneralInputType) => {
    const Error = error ? style.inputError : style.input;

    return (
      <div className={style.containerInputText}>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={changeInputCallback}
          onBlur={onBlurCallback}
          onKeyPress={onKeyPressCallback}
          className={Error}
          disabled={disabled}
        />
      </div>
    );
  },
);
