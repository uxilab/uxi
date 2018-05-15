import React from 'react';
import DropDown from '../internal/DropDown';

const PopOver = (props) => {
  'r';
  const { main, content } = props;

  return (
    <DropDown
      items={content}
      main={main}
      isPopOver
    />
  );
};

export default PopOver;
