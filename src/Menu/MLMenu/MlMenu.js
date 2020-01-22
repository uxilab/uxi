import React from 'react';
// import MlMenuItem from './MlMenuItem';
import MlMenuList from './MlMenuList';

const MlMenu = (props) => {
  console.log('onSelfClose in MlMenu', props.onSelfClose);
  const {
    menuDescriptor = [],
    isFullWidth,
    onClick,
    onSelfClose = () => { console.log('onSelfClose default props used'); },
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
