
import React from 'react';
import ListWithNavigation from '../../Input/ListWithNavigation';
import BETALookup from '../../internal/BETALookup';


export const MenuDropDown = ({ children, main = null, onChange, anchor }) => (
  <BETALookup
    main={main}
    anchor={anchor}
  >
    <ListWithNavigation
      onChange={onChange}
      listStyle={{
        boxShadow: '0 8px 16px 0 rgba(0,0,0,.1)',
        padding: '4px 0',
        borderRadius: '3px',
      }}
    >
      {children}
    </ListWithNavigation>
  </BETALookup>
);

export default MenuDropDown;
