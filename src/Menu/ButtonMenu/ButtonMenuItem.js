import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextEllipsis } from '../../Text';
import { buttonResetStylesCSSString } from '../../Button/buttonResetStyles';


const WrapperComponentFn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const height = '38px';
const iconSize = '18';

const ButtonMenuItemItemFlex = styled.li.attrs((/* props */) => ({
  tabIndex: 0,
}))`
  a, a *, a:hover, a:hover * {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.darkGrey};
  }
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
  ${({ Link }) => (Link ? '' : 'padding: 4px 8px')};
  outline: none;
  &:focus, &:hover {
    outline: none;
    background: #ebebeb;
  }
  &:focus:hover {
    background: #ebebeb;
  }
`;


class ButtonMenuItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      style,
      icon: iconProp,
      children,
      extra,
      onClick,
      shouldClose,
      Link,
      linkProps,
    } = this.props;

    let icon = null;
    if (iconProp) {
      icon = React.cloneElement(iconProp, { size: iconSize, style: { marginRight: '8px' } });
    }

    let LinkWrapperOrDiv = WrapperComponentFn;

    if (Link && linkProps) {
      LinkWrapperOrDiv = Link;
    }

    return (
      <ButtonMenuItemItemFlex
        Link={Link}
        // isOpen={isOpen}
        style={style}
        onClick={(e, ...a) => {
          if (shouldClose) {
            shouldClose(e, ...a);
          }
          if (onClick) {
            onClick(e, ...a);
          }
        }}
        onKeyDown={(e, ...a) => {
          if (e.key === 'Enter' || e.key === ' ') {
            if (shouldClose) {
              shouldClose(e, ...a);
            }
            if (onClick) {
              onClick(e, ...a);
            }
          } else if (e.key === 'Escape') {
            if (shouldClose) {
              shouldClose(e, ...a);
            }
          }
        }}
      >
        <LinkWrapperOrDiv
          {...linkProps}
          style={{
            width: '100%',
            height: '100%',
            ...(Link ? { padding: '4px 8px' } : {}),
            ...(linkProps.style || {}),
          }}
        >
          {icon}
          <TextEllipsis
            style={{
              // width: '100%',
              height: '100%',
              // display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {children}
            </div>
          </TextEllipsis>
          <div style={{ marginLeft: 'auto' }}>{extra}</div>
        </LinkWrapperOrDiv>
      </ButtonMenuItemItemFlex>
    );
  }
}

ButtonMenuItem.defaultProps = {
  style: {},
  icon: null,
  children: null,
  extra: null,
  onClick: () => {},
  shouldClose: () => {},
  Link: undefined,
  linkProps: {},
};

ButtonMenuItem.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.any,
  children: PropTypes.any,
  extra: PropTypes.any,
  onClick: PropTypes.func,
  shouldClose: PropTypes.func,
  Link: PropTypes.func,
  linkProps: PropTypes.object,
};


export default ButtonMenuItem;
