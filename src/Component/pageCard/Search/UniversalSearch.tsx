import React, { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { GeneralInput } from 'Component/01-common';
import { useDebounce } from 'hooks/useDebounce';

type UniversalSearchProps = {
  value: string;
  setValue: (value: string) => void;
  AC: (value: string) => void;
};

export const UniversalSearch: React.FC<UniversalSearchProps> = ({
  AC,
  value,
  setValue,
}) => {
  const dispatch = useDispatch();
  const setName = (): void => {
    dispatch(AC(value));
    /*   dispatch(setPacNameAC(value)); */
  };
  const timeBeforeStartWork = 3000;

  const debouncedSearch = useDebounce(value, timeBeforeStartWork, setName);
  const onChangeSearching = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value);
    debouncedSearch();
  };

  return (
    <GeneralInput
      type="text"
      id="34"
      name="text"
      value={value}
      changeInputCallback={e => onChangeSearching(e)}
    />
  );
};
