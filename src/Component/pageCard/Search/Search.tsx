import React, { useState } from 'react';

import { GeneralInput } from 'Component/01-common';

type ItemType = {
  name: string;
};
type ItemsType = Array<ItemType>;

export const Search: React.FC = () => {
  const [value, setValue] = useState('');

  const items = [
    { name: 'name' },
    { name: 'sample' },
    { name: 'someshit' },
    { name: 'some' },
    { name: 'somessss' },
  ];

  const searchFn = (searchValue: string, itemsList: ItemsType): ItemsType => {
    if (!searchValue) {
      return itemsList;
    }
    return itemsList.filter(el => el.name.includes(searchValue));
  };

  const filteredItems = searchFn(value, items);

  return (
    <div>
      <GeneralInput
        type="text"
        id="hz"
        name="searchInput"
        value={value}
        changeInputCallback={e => {
          setValue(e.currentTarget.value);
        }}
      />
      {filteredItems.map(el => (
        <h1 key={el.name} style={{ fontSize: 50 }}>
          {el.name}
        </h1>
      ))}
    </div>
  );
};
