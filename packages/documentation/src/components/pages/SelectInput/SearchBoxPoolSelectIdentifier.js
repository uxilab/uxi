import React from 'react';
import { SelectInput } from 'uxi/Input';
import { Flex } from 'uxi/Layout';

const SearchBoxPoolSelectIdentifier = ({
  value,
  onEntityPoolChange,
}) => {
  return (
    <SelectInput
      value={value}
      style={{
        height: '34px',
      }}
      isFullWidth
      onChange={onEntityPoolChange}
    >
      <Flex value=""><div>All</div></Flex>
      <Flex value="person"><div>Person</div></Flex>
      <Flex value="organization"><div>Organization</div></Flex>
    </SelectInput>
  );
};

export default SearchBoxPoolSelectIdentifier;
