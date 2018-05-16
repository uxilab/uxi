import React from 'react';
import DropDown from '../internal/DropDown';
import PopOverBody from './PopOverBody';

const PopOver = (props) => {
  'r';
  const { main, children } = props;

  return (
    <DropDown
      items={(
        <PopOverBody>
          {children}
        </PopOverBody>
      )}
      main={main}
      isPopOver
    />
  );
};

export default PopOver;
