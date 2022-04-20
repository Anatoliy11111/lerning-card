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

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const debouncedSearch = useDebounce(value, 750, setName);
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
