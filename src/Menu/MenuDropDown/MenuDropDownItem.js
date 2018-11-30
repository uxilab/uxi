import React from 'react';
import { Flex } from '../../Layout';


const height = '38px';
const iconSize = '18';

const MenuDropDownItemFlex = Flex.extend`
  min-width: 180px;
  max-width: 100vw;
  justify-content: flex-start;
  height: ${height};
  box-sizing: border-box;
  padding: 0 8px;
`;

/**
 * note: can use AvatarWithNameAndExtra if need be to show a 'submenu icon' on the right
 */
export const MenuDropDownItem = ({ icon, children, extra, onClick }) => {
  let content = children;

  if (icon) {
    const sizedIcon = React.cloneElement(icon, { size: iconSize, style: { marginRight: '8px' } });
    content = [
      sizedIcon,
      children,
    ];
  }

  return (
    <MenuDropDownItemFlex
      onClick={onClick}
    >
      {content}
      <div style={{ marginLeft: 'auto' }}>{extra}</div>
    </MenuDropDownItemFlex>
  );
};

export default MenuDropDownItem;
