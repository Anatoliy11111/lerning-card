import React, { ChangeEvent } from 'react';

import { useDispatch } from 'react-redux';

import { GeneralInput } from 'Component/01-common';
import { useDebounce } from 'hooks/useDebounce';
import { setPacNameAC } from 'redux/reducers';

type UniversalSearchProps = {
  value: string;
  setValue: (value: string) => void;
};

export const UniversalSearch: React.FC<UniversalSearchProps> = ({ value, setValue }) => {
  const dispatch = useDispatch();
  const setName = (): void => {
    dispatch(setPacNameAC(value));
  };
  const timeBeforeStartWork = 750;

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
