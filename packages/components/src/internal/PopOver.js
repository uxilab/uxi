import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import DropDown from '../internal/DropDown';

const PopOver = ({
  main,
  children,
  anchor,
  itemsStyle,
} ) => ( 
    <DropDown
      itemsStyle={{ zIndex: 150, ...itemsStyle }}
      items={children}
      main={main}
      isPopOver
      anchor={anchor}
    />
);

export default PopOver;
