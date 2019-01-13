import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextEllipsis } from '../../Text';
import { buttonResetStylesCSSString } from '../../Button/buttonResetStyles';


const height = '38px';
const iconSize = '18';

const ButtonMenuItemItemFlex = styled.li.attrs({
  // onMouseOut: () => ({ target }) => target.blur && target.blur(),
  // onMouseEnter: () => ({ target }) => target.focus && target.focus(),
  // tabIndex: ({ isOpen }) => (isOpen ? '0' : '-1'),
  tabIndex: 0,
})`
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
  padding: 4px 8px;
  outline: none;
  &:focus, &:hover {
    outline: none;
    background: #ebebeb;
  }
  &:focus:hover {
    background: #ebebeb;
  }
`;

/**
 * note: can use AvatarWithNameAndExtra if need be to show a 'submenu icon' on the right
 */
const ButtonMenuItem = ({
  style,
  icon: iconProp,
  children,
  extra,
  onClick,
  shouldClose,
}) => {
  let icon = null;
  if (iconProp) {
    icon = React.cloneElement(iconProp, { size: iconSize, style: { marginRight: '8px' } });
  }

  return (
    <ButtonMenuItemItemFlex
      // isOpen={isOpen}
      style={style}
      onClick={(e, ...a) => {
        if (onClick) {
          onClick(e, ...a);
        }
        if (shouldClose) {
          shouldClose(e, ...a);
        }
      }}
      onKeyDown={(e, ...a) => {
        console.log('onKeyDown item', e.key);
        if (e.key === 'Enter' || e.key === ' ') {
          if (onClick) {
            onClick(e, ...a);
          }
          if (shouldClose) {
            shouldClose(e, ...a);
          }
        } else if (e.key === 'Escape') {
          if (shouldClose) {
            shouldClose(e, ...a);
          }
        }
      }}
    >
      {icon}
      <TextEllipsis>{children}</TextEllipsis>
      <div style={{ marginLeft: 'auto' }}>{extra}</div>
    </ButtonMenuItemItemFlex>
  );
};

ButtonMenuItem.defaultProps = {
  style: {},
  icon: null,
  children: null,
  extra: null,
  onClick: () => {},
  shouldClose: () => {},
};

ButtonMenuItem.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.any,
  children: PropTypes.any,
  extra: PropTypes.any,
  onClick: PropTypes.func,
  shouldClose: PropTypes.func,
};


export default ButtonMenuItem;
