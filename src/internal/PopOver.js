import React from 'react';
import DropDown from '../internal/DropDown';

const PopOver = (props) => {
  'r';

  const {
    main,
    children,
    anchor,
    target,
    itemsStyle,
  } = props;

  return (
    <DropDown
      itemsStyle={{ zIndex: 150, ...itemsStyle }}
      items={children}
      main={main}
      isPopOver
      anchor={anchor}
    />
  );
};

export default PopOver;
