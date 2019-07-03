import React from 'react';
// import MlMenuItem from './MlMenuItem';
import MlMenuList from './MlMenuList';

const MlMenu = (props) => {
  const {
    menuDescriptor = [],
    isFullWidth,
  } = props;

  return (
    <MlMenuList
      isFullWidth={isFullWidth}
      menuDescriptor={menuDescriptor}
    />
  );
};

export default MlMenu;
