import React, { Component } from 'react';
import { Options, Followentities } from '../Icons';
import { FlatButton, ButtonLink } from '../Button';
import {
  DropDownMenu,
} from '../Menu';
import MenuItem from '../Menu/MenuItem';
import AvatarWithName from '../Img/AvatarWithName';
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
  display: flex;
  flex-flow: row;
  height:100%;
  flex-direction:column;
`;

const DecoratedIcon = styled.div`
  position:absolute;
  right: 8px;
  top: 13px;
  fill: #ccc;
  svg {
    fill: ${({ isPromoted }) => (isPromoted ? 'rgb(0, 150, 136)' : '#ccc')};
  }
  &:hover svg {
    fill: ${({ isPromoted }) => (!isPromoted ? 'rgb(0, 150, 136)' : '#d13f48')};
  }
`;

const MenuButtonItemWithStyle = styled.div`
  padding:10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color:#212121;
  &:hover {
    background: #dadada;
  }
`;

class MenuButtonItem extends Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <MenuButtonItemWithStyle onClick={onClick}>
        {children}
      </MenuButtonItemWithStyle>
    );
  }
}

const PromotedPersonalizedMenuItem = ({ icon, displayName, onClick }) => {
  const content = icon || displayName;

  return (
    <MenuButtonItem onClick={onClick}>
      {content}
    </MenuButtonItem>
  );
};

const PersonalizedMenuItem = ({
  icon,
  displayName,
  onClick,
  isPromoted,
  onFavoriteClick,
  withPeronalization,
}) => {
  const content = icon ? (
    <AvatarWithName icon={icon} name={displayName} />
  ) : (
    <div style={{ lineHeight: '26px' }}>{displayName}</div>
  );

  const menuPadding = withPeronalization ? '8px 30px 8px 18px' : '8px 18px';

  return (
    <MenuItem onClick={onClick} style={{ padding: menuPadding, cursor: 'pointer', position: 'relative' }}>
      {content}
      {
        withPeronalization &&
        <DecoratedIcon
          isPromoted={isPromoted}
          onClick={onFavoriteClick}
        >
          <Followentities size={16} />
        </DecoratedIcon>
      }
    </MenuItem>
  );
};

const ActiondMenu = ({ menuDescriptors = [], onFavoriteClick, withPeronalization }) => {
  const promotedMenuDescriptorsWithIcon = menuDescriptors.filter(
    menuDescriptor => (menuDescriptor.isPromoted && menuDescriptor.icon),
  );
  const promotedMenuDescriptorsNoIcon = menuDescriptors.filter(
    menuDescriptor => (menuDescriptor.isPromoted && !menuDescriptor.icon),
  );

  const allMenu = withPeronalization ? menuDescriptors : menuDescriptors.filter(
    menuDescriptor => (!menuDescriptor.isPromoted),
  );

  return (
    <MainMenuWrapper>
      <div style={{ display: 'flex', flex: 1 }}>
        {
          promotedMenuDescriptorsNoIcon.map(promitedMenuDescriptor => (
            <PromotedPersonalizedMenuItem {...promitedMenuDescriptor} />
          ))
        }
        {
          promotedMenuDescriptorsWithIcon.map(promitedMenuDescriptor => (
            <PromotedPersonalizedMenuItem {...promitedMenuDescriptor} />
          ))
        }
        <DropDownMenu button={<MenuButtonItem><Options /></MenuButtonItem>} anchor="right">
          {allMenu.map(menuDescriptor => (
            <PersonalizedMenuItem
              withPeronalization={withPeronalization}
              onFavoriteClick={(e) => { e.stopPropagation(); onFavoriteClick(menuDescriptor.key); }}
              {...menuDescriptor}
            />
          ))}
        </DropDownMenu>
      </div>
    </MainMenuWrapper>
  );
};

export default ActiondMenu;
