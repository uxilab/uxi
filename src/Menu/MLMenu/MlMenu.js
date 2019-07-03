import React from 'react';
// import MlMenuItem from './MlMenuItem';
import MlMenuList from './MlMenuList';

const MlMenu = (props) => {
  const { menuDescriptor = [] } = props;

  return (
    <MlMenuList menuDescriptor={menuDescriptor} />
  );
};

export default MlMenu;
