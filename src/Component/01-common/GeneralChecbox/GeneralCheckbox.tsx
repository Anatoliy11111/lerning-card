import React, { ChangeEventHandler, memo } from 'react';

import style from './GeneralCheckbox.module.css';

interface GeneralCheckboxType {
  id?: string;
  name?: string;
  checked: boolean;
  onChangeCallback: ChangeEventHandler<HTMLInputElement>;
}

export const GeneralCheckbox = memo(
  ({ checked, onChangeCallback, id, name }: GeneralCheckboxType) => {
    const check = checked ? style.checked : style.checkedFalse;
    return (
      <div className={style.ContainerInputChecked}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChangeCallback}
          className={check}
        />
      </div>
    );
  },
);
