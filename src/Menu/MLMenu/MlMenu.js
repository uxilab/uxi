import React from 'react';
// import MlMenuItem from './MlMenuItem';
import MlMenuList from './MlMenuList';

const MlMenu = (props) => {
  const {
    menuDescriptor = [],
    isFullWidth,
    onClick,
    onSelfClose = () => { },
  } = props;


  return (
    <MlMenuList
      onSelfClose={onSelfClose}
      onClick={onClick}
      isFullWidth={isFullWidth}
      menuDescriptor={menuDescriptor}
    />
  );
};

export default MlMenu;
