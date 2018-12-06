
import React from 'react';
import DropDown from '../../internal/DropDown'; // eslint-disable-line

export const MenuDropDown = ({ children, main = null, anchor, mainScrollingElementSelector }) => (
  <DropDown
    mainScrollingElementSelector={mainScrollingElementSelector}
    anchor={anchor}
    main={main}
    items={children}
    itemsStyle={{
      border: '1px solid #dedede',
      boxShadow: '0 8px 16px 0 rgba(0,0,0,.1)',
    }}
  />
);

export default MenuDropDown;
