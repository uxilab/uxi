import React from 'react';
import styled from 'styled-components';
import { buttonResetStylesCSSString } from '../../Button/buttonResetStyles';


const height = '38px';
const iconSize = '18';

const MenuDropDownItemFlex = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${buttonResetStylesCSSString};
  min-width: 180px;
  max-width: 100vw;
  justify-content: flex-start;
  height: ${height};
  min-height: ${height};
  max-height: ${height};
  box-sizing: border-box;
  padding: 0 8px;
  &:focus, &:hover {
    background: #ebebeb;
  }
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
