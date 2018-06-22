import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';
import { PropsMapperContainerQueries } from '../internal/PropsMapperContainerQueries';

const {
  borderThickness,
  breakpoint,
} = defaults;

const getIconColor = ({ isSelected, isActive, theme: { palette } }) => {
  if (isActive && isSelected) {
    return palette.accent.light;
  }
  return palette.white;
};


const LinkDecorator = styled.div`
  html body & svg,
  html body & svg > svg {
    /* fill: ${({ theme: { palette } }) => palette.extraLightGrey}; */
    fill: ${({ isSelected, isActive, theme: { palette } }) =>
    (isSelected && isActive ? palette.accent.light : palette.extraLightGrey)
};
  }
  .root & a,
  & a {
    ${buttonReset};
    ${GlobalMenuItemBase};
    text-decoration: none;

    color: ${({ isSelected, isActive, theme: { palette } }) =>
    (isSelected && isActive ? palette.accent.light : '#c2c2c2')
};
    border-right: ${({ isSelected, isActive }) => (isSelected && isActive ?
    `${borderThickness} solid #0ea4a5` : '0 solid transparent')
};
    background: ${({ theme: { palette } }) => palette.primary.dark || '#15303f'};
    transition: ${({ theme: { transition } }) => transition.defaultAll};
    &:hover {
      text-decoration: none;
      color: ${({ theme: { palette } }) => palette.pureWhite};
      background: ${({ isActive, isSelected, theme: { palette } }) => (
    isSelected // eslint-disable-line no-nested-ternary
      ? (isActive
        ? palette.primary.dark
        : palette.primary.light // child is slelected, means we can navigate there
      )
      : palette.primary.light
  )};
      svg {
        fill: #fff;
      }
    }
    &:focus {
      color: ${({ isActive, theme: { palette } }) => (
    isActive ? 'inherit' : palette.pureWhite
  )};
      background: ${({ isSelected, theme: { palette } }) => (
    (isSelected ? palette.primary.main : palette.primary.light)
  )};
      color: ${({ isSelected, isActive, theme: { palette } }) =>
    ((isSelected || isActive) ? palette.accent.light : palette.pureWhite)
};
      svg {
        fill: ${({ isSelected, isActive, theme: { palette } }) =>
    ((isSelected || isActive) ? palette.accent.light : palette.pureWhite)
};
      }
    }
    svg {
      fill: ${props => (getIconColor(props))};
    }
  }
`;

const GlobalMenuItemDiv = styled.a`
  ${buttonReset};
  ${GlobalMenuItemBase};
  html body & svg,
  html body & svg > svg {
    /* fill: ${({ theme: { palette } }) => palette.extraLightGrey}; */
    fill: ${({ isSelected, isActive, theme: { palette } }) =>
    (isSelected && isActive ? palette.accent.light : palette.extraLightGrey)
};
  }
  text-decoration: none;

  .root &,
  & {
    color: ${({ isSelected, isActive, theme: { palette } }) =>
    (isSelected && isActive ? palette.accent.light : '#c2c2c2')
};
  }

  border-right: ${({ isSelected, isActive, theme: { palette } }) => (isSelected && isActive ?
    `${borderThickness} solid ${palette.accent.main}` : '0 solid transparent')
};
  background: ${({ theme: { palette } }) => palette.primary.dark || '#15303f'};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  .root &:hover, /* TODO solve this .root a  */
  &:hover {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.pureWhite};
    background: ${({ isActive, isSelected, theme: { palette } }) => (
    isSelected // eslint-disable-line no-nested-ternary
      ? (isActive
        ? palette.primary.dark
        : palette.primary.light // child is slelected, means we can navigate there
      )
      : palette.primary.light
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
    background: ${({ isSelected, theme: { palette } }) => (
    (isSelected ? palette.primary.main : palette.primary.light)
  )};
    color: ${({ isSelected, isActive, theme: { palette } }) =>
    ((isSelected || isActive) ? palette.accent.light : palette.pureWhite)
};
    svg {
      fill: ${({ isSelected, isActive, theme: { palette } }) =>
    ((isSelected || isActive) ? palette.accent.light : palette.pureWhite)
};
    }
  }

  svg {
    fill: ${props => (getIconColor(props))};
  }
`;

const GlobalMenuItemDivFinal = GlobalMenuItemDiv.withComponent('button');


const LabelDiv = styled.div`
  display: none;
  @media (min-width: ${breakpoint}) {
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
  right: ${({ isActive, isSelected }) => (isActive || isSelected ? '5px' : '9px')};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
`;

const GlobalMenuItem = (props) => {
  const {
    hasPanel,
    isSelected,
    icon,
    index,
    hasNew,
    label,
    onClick,
    isActive,
    primaryColor,
    Link,
    to,
    href,
  } = props;

  let containerStyle;
  let isNewContent;

  if (hasNew) {
    isNewContent = (
      <NewInfo isActive={isActive} isSelected={isSelected} >!</NewInfo>
    );
  }

  // render the tooltip inert when menu is in "wide" mode (labels are present, tooltip is useless)
  const rules = [{
    minWidth: 100,
    mapper: (/* { trigger } */) => ({
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

  if (hasPanel) {
    resContent = (
      <GlobalMenuItemDivFinal
        primaryColor={primaryColor}
        isSelected={isSelected}
        isActive={isActive}
        key={`mainMenuItemContainer-${index}`}
        style={containerStyle}
        {...linkProps}
        onClick={onClick}
      >
        {icon}
        <LabelDiv> {label} </LabelDiv>
        {isNewContent}
      </GlobalMenuItemDivFinal>
    );
  } else {
    resContent = (
      <GlobalMenuItemDiv
        primaryColor={primaryColor}
        isSelected={isSelected}
        isActive={isActive}
        key={`mainMenuItemContainer-${index}`}
        style={containerStyle}
        {...linkProps}
        onClick={onClick}
      >
        {icon}
        <LabelDiv> {label} </LabelDiv>
        {isNewContent}
      </GlobalMenuItemDiv>
    );
  }

  if (Link !== undefined) {
    resContent = (
      <LinkDecorator
        primaryColor={primaryColor}
        isSelected={isSelected}
        isActive={isActive}
        key={`mainMenuItemContainer-${index}`}
        style={containerStyle}
      >
        <Link
          {...linkProps}
          onClick={onClick}
        >
          {icon}
          <LabelDiv> {label} </LabelDiv>
          {isNewContent}
        </Link>
      </LinkDecorator>
    );
  }

  return (
    <PropsMapperContainerQueries
      debounceDelay={80}
      rules={rules}
      trigger={['hover']}
    >
      <Tooltip placement="right" overlay={<span>{label}</span>}>
        {
          resContent
        }

      </Tooltip>
    </PropsMapperContainerQueries>
  );
};

GlobalMenuItem.displayName = 'GlobalMenuItem';

GlobalMenuItem.propTypes = {
  isSelected: PropTypes.bool,
  index: PropTypes.string,
  hasNew: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  primaryColor: PropTypes.string,
};

GlobalMenuItem.defaultProps = {
  isSelected: false,
  index: '',
  hasNew: false,
  label: null,
  onClick: () => { },
  isActive: false,
  primaryColor: '',
};

export default GlobalMenuItem;
