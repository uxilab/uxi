import React from 'react';
import DropDown from '../internal/DropDown';

const PopOver = (props) => {
  'r';
  const { main, children } = props;

  return (
    <DropDown
      items={children}
      main={main}
      isPopOver
    />
  );
};

export default PopOver;
