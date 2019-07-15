import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';
import { PropsMapperContainerQueries } from '../internal/PropsMapperContainerQueries';

const {
  borderThickness,
  breakpoint: defaultBreakpoint,
} = defaults;

const getIconColor = ({ isActive, theme: { palette } }) => {
  if (isActive) {
    return palette.accent.light;
  }
  return palette.white;
};

/* eslint-disable indent */
const LinkDecorator = styled.div`
  & > * {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    & a {
      padding: 16px 32px 16px 16px !important;
      justify-content: flex-start !important;
    }
  }
  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    & > * {
      flex-direction: row;
    }
  }

  html body & svg,
  html body & svg > svg {
    /* fill: ${({ theme: { palette } }) => palette.extraLightGrey}; */
    fill: ${({ isActive, theme: { palette } }) =>
      (isActive ? palette.accent.light : palette.extraLightGrey)
    };
  }
  .root & a,
  & a {
    ${buttonReset};
    ${GlobalMenuItemBase};
    text-decoration: none;

    color: ${({ isActive, theme: { palette } }) =>
      (isActive ? palette.accent.light : '#c2c2c2')
    };
    border-right: ${({ isActive, theme: { palette } }) =>
      (isActive
        ? `${borderThickness} solid ${palette.accent.main}`
        : '0 solid transparent'
    )};
    background: ${({ theme: { palette } }) => palette.primary.dark || '#15303f'};
    transition: ${({ theme: { transition } }) => transition.defaultAll};
    &:hover {
      text-decoration: none;
      color: ${({ theme: { palette } }) => palette.pureWhite};
      background: ${({ isActive, theme: { palette } }) => (
          isActive
            ? palette.primary.dark
            : palette.primary.light // child is slelected, means we can navigate there
        )};
      svg {
        fill: #fff;
      }
    }
    &:focus {
      color: ${({ isActive, theme: { palette } }) => (
        isActive ? 'inherit' : palette.pureWhite
      )};

      color: ${({ isActive, theme: { palette } }) =>
        ((isActive) ? palette.accent.light : palette.pureWhite)
      };
      svg {
        fill: ${({ isActive, theme: { palette } }) =>
          ((isActive) ? palette.accent.light : palette.pureWhite)
        };
      }
    }
    svg {
      fill: ${props => (getIconColor(props))};
    }
  }
`;

const GlobalMenuItemDiv = styled.a`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    flex-direction: row;
  }


  ${buttonReset};
  ${GlobalMenuItemBase};
  html body & svg,
  html body & svg > svg {
    /* fill: ${({ theme: { palette } }) => palette.extraLightGrey}; */
    fill: ${({ isActive, theme: { palette } }) =>
      (isActive ? palette.accent.light : palette.extraLightGrey)
    };
  }
  text-decoration: none;

  .root &,
  & {
    color: ${({ isActive, theme: { palette } }) =>
      (isActive ? palette.accent.light : '#c2c2c2')
    };
  }

  border-right: ${({ isActive, theme: { palette } }) => (isActive ?
    `${borderThickness} solid ${palette.accent.main}` : '0 solid transparent')
  };
  background: ${({ theme: { palette } }) => palette.primary.dark || '#15303f'};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  .root &:hover, /* TODO solve this .root a  */
  &:hover {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.pureWhite};
    background: ${({ isActive, theme: { palette } }) => (
      isActive
          ? palette.primary.dark
          : palette.primary.light // child is slelected, means we can navigate there
      )};
    svg {
      fill: #fff;
    }
  }

  .root &:focus, /* TODO solve this .root a  */
  &:focus {
    color: ${({ isActive, theme: { palette } }) => (
      isActive ? 'inherit' : palette.pureWhite
    )};
    background: ${({ isActive, theme: { palette } }) => (
      (isActive ? palette.primary.main : palette.primary.light)
    )};
    color: ${({ isActive, theme: { palette } }) =>
      ((isActive) ? palette.accent.light : palette.pureWhite)
    };
    svg {
      fill: ${({ isActive, theme: { palette } }) =>
      ((isActive) ? palette.accent.light : palette.pureWhite)
    };
    }
  }

  svg {
    fill: ${props => (getIconColor(props))};
  }
`;
/* eslint-enable indent */


const GlobalMenuItemDivFinal = GlobalMenuItemDiv.withComponent('button');


const LabelDiv = styled.div`
  display: none;
  display: block;
  font-size: 10px;
  white-space: nowrap;
  justify-content: flex-start;
  max-width: 56px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: ${({ breakpoint }) => breakpoint}) {
    font-size: inherit;

    padding-left: 10px;
    display: block;

    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const NewInfo = styled.div`
  background-color: rgb(216, 27, 96);
  border-radius: 16px;
  line-height: 16px;
  color: #fff;
  width: 16px;
  height: 16px;
  font-size: 12px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: ${({ isActive }) => (isActive ? '5px' : '9px')};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
`;

class GlobalMenuItem extends Component {
  shouldComponentUpdate(nextProps) {
    const {
      isActive,
    } = this.props;

    if (isActive !== nextProps.isActive) {
      return true;
    }

    return false;
  }

  render() {
    const {
      icon,
      index,
      dataKey,
      hasNew,
      label,
      onClick,
      isActive,
      primaryColor,
      Link,
      to,
      href,
      breakpoint,
    } = this.props;

    let isNewContent;

    if (hasNew) {
      isNewContent = (
        <NewInfo isActive={isActive} >!</NewInfo>
      );
    }

    // render the tooltip inert when menu is in "wide" mode (labels are present, tooltip is useless)
    const rules = [{
      minWidth: 0,
      mapper: () => ({
        trigger: ['hover', 'focus'],
      }),
    }, {
      minWidth: 100,
      mapper: () => ({
        trigger: [],
        visible: false, // inject inexisting props
      }),
    }];

    let linkProps = {};
    if (Link !== undefined) {
      linkProps = { to };
    } else if (href) {
      linkProps = { href };
    }

    let resContent;

    resContent = (
      <GlobalMenuItemDivFinal
        primaryColor={primaryColor}
        isActive={isActive}
        key={`mainMenuItemContainer-${dataKey}`}
        {...linkProps}
        onClick={onClick}
        breakpoint={breakpoint}
      >
        {icon}
        <LabelDiv breakpoint={breakpoint}> {label} </LabelDiv>
        {isNewContent}
      </GlobalMenuItemDivFinal>
    );

    if (Link !== undefined) {
      resContent = (
        <LinkDecorator
          breakpoint={breakpoint}
          primaryColor={primaryColor}
          isSelected={isActive}
          isActive={isActive}
          key={`mainMenuItemContainer-${index}`}
        >
          <Link
            {...linkProps}

            onClick={onClick}
          >
            {icon}
            <LabelDiv breakpoint={breakpoint}> {label} </LabelDiv>
            {isNewContent}
          </Link>
        </LinkDecorator>
      );
    }

    return (
      <PropsMapperContainerQueries
        debounceDelay={80}
        rules={rules}
        trigger={['hover', 'focus']}
        placement="right"
        overlay={<span>{}</span>}
        label={label}
      >
        <Tooltip
          placement="right"
          overlay={<span>{label}</span>}
          label={label}
          trigger={['hover', 'focus']}
        >
          {
            resContent
          }
        </Tooltip>
      </PropsMapperContainerQueries>
    );
  }
}

GlobalMenuItem.displayName = 'GlobalMenuItem';

GlobalMenuItem.propTypes = {
  // isSelected: PropTypes.bool,
  index: PropTypes.string,
  hasNew: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  primaryColor: PropTypes.string,
};

GlobalMenuItem.defaultProps = {
  // isSelected: false,
  index: '',
  hasNew: false,
  label: null,
  onClick: () => { },
  isActive: false,
  primaryColor: '',
  breakpoint: defaultBreakpoint,
};

export default GlobalMenuItem;
