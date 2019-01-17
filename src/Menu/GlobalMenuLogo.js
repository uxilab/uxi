import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';
import { PropsMapperContainerQueries } from '../internal/PropsMapperContainerQueries';

const {
  breakpoint,
} = defaults;

const getIconColor = ({ isSelected, isActive, theme: { palette } }) => {
  if (isActive && isSelected) {
    return palette.accent.light;
  }

  return palette.lightGrey;
};


const LinkDecorator = styled.div`
  html body & svg,
  html body & svg > svg {
    /* fill: ${({ theme: { palette } }) => palette.extraLightGrey}; */
    fill: ${({ isSelected, isActive, theme: { palette } }) =>
    (isSelected && isActive ? palette.accent.light : palette.extraLightGrey)
};
  }

  & a {
    ${buttonReset};
    z-index: 99;
    height: 48px; /* harcoding height because */
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ isSelected, isActive, theme }) =>
    ((isSelected || isActive)
      ? theme.palette.pureWhite
      : theme.palette.lightGrey)
};
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    margin: 0 auto;
    padding: 8px 0;
    position: relative;
    background: ${({ theme: { palette } }) => palette.primary.main || '#1b3c4f'};
    transition: ${({ theme: { transition } }) => transition.defaultAll};
    &:hover {
      color: ${({ theme: { palette } }) => palette.pureWhite};
      background: ${({ isActive, isSelected, theme: { palette } }) =>
    (!isActive && !isSelected ? palette.primary.light : palette.primary.dark)
};
      transition: inherit;
      svg {
        fill: #fff;
      }
    }
    &:focus {
      color: ${({ theme: { palette } }) => palette.pureWhite};
      transition: inherit;
      background: ${({ isActive, isSelected, theme: { palette } }) =>
    (!isActive && !isSelected ? palette.primary.light : palette.primary.dark)
};
      svg {
        fill: #fff;
      }
    }
    svg {
      fill: ${props => (getIconColor(props))};
    }
    @media (min-width: ${breakpoint}) {
      justify-content: flex-start;
      padding: 0 24px;
    }
    /** a11y */
    ${GlobalMenuItemBase};
  }
`;

const GlobalMenuLogoDiv = styled.a`
  ${buttonReset};
  html body & svg,
  html body & svg > svg {
    /* fill: ${({ theme: { palette } }) => palette.extraLightGrey}; */
    fill: ${({ isSelected, isActive, theme: { palette } }) =>
    (isSelected && isActive ? palette.accent.light : palette.extraLightGrey)
};
  }

  z-index: 99;
  height: 48px; /* harcoding height because */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected, isActive, theme }) =>
    ((isSelected || isActive)
      ? theme.palette.pureWhite
      : theme.palette.lightGrey)
};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  padding: 8px 0;
  position: relative;
  background: ${({ theme: { palette } }) => palette.primary.main || '#1b3c4f'};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  &:hover {
    color: ${({ theme: { palette } }) => palette.pureWhite};
    background: ${({ isActive, isSelected, theme: { palette } }) =>
    (!isActive && !isSelected ? palette.primary.light : palette.primary.dark)
};
    transition: inherit;
    svg {
      fill: #fff;
    }
  }
  &:focus {
    color: ${({ theme: { palette } }) => palette.pureWhite};
    transition: inherit;
    background: ${({ isActive, isSelected, theme: { palette } }) =>
    (!isActive && !isSelected ? palette.primary.light : palette.primary.dark)
};
    svg {
      fill: #fff;
    }
  }
  svg {
    fill: ${props => (getIconColor(props))};
  }
  @media (min-width: ${breakpoint}) {
    justify-content: flex-start;
    padding: 0 24px;
  }
  /** a11y */
  ${GlobalMenuItemBase};
`;

const LabelDiv = styled.div`
  display: none;
  width: 52px;
  @media (min-width: ${breakpoint}) {
    display: block;
    /* padding-left: 3px; */
  }
`;

class GlobalMenuLogo extends Component {
  shouldComponentUpdate(nextProps) {
    const {
      isActive,
      isSelected,
    } = this.props;

    if (isActive !== nextProps.isActive) {
      return true;
    }
    if (isSelected !== nextProps.isSelected) {
      return true;
    }
    return false;
  }

  render() {
    const {
      icon,
      label,
      Link,
      to,
      href,
      onClick,
      primaryColor,
      logoTooltipLabel,
      isActive,
    } = this.props;
    let containerStyle;

    let linkProps = {};
    if (Link !== undefined) {
      linkProps = { to };
    } else if (href) {
      linkProps = { href };
    }


    // render the tooltip inert above window width of 699px
    const rules = [{
      minWidth: 100,
      mapper: () => ({ trigger: [] }),
    }];

    let resContent = (
      <GlobalMenuLogoDiv
        {...linkProps}
        primaryColor={primaryColor}
        key={`mainMenuItemContainer-${label}`}
        style={containerStyle}
        onClick={onClick}
        isActive={isActive}
      >
        {icon}
        <LabelDiv> {label} </LabelDiv>
      </GlobalMenuLogoDiv>
    );

    if (Link) {
      resContent = (
        <LinkDecorator
          {...linkProps}
          primaryColor={primaryColor}
          key={`mainMenuItemContainer-${label}`}
          style={containerStyle}
          onClick={onClick}
          isActive={isActive}
        >
          <Link
            {...linkProps}
          >
            {icon}
            <LabelDiv> {label} </LabelDiv>
          </Link>
        </LinkDecorator>
      );
    }

    return (
      <PropsMapperContainerQueries rules={rules} trigger={['hover']} debounceDelay={120} >
        <Tooltip placement="right" overlay={<span>{logoTooltipLabel || label || ''}</span>}>
          {resContent}
        </Tooltip>
      </PropsMapperContainerQueries>
    );
  }
}


GlobalMenuLogo.displayName = 'GlobalMenuLogo';

GlobalMenuLogo.propTypes = {
  // isSelected: PropTypes.bool,
  icon: PropTypes.any,
  // index: PropTypes.string,
  // hasNew: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  primaryColor: PropTypes.string,
};

GlobalMenuLogo.defaultProps = {
  // isSelected: false,
  icon: null,
  // index: '',
  // hasNew: false,
  label: null,
  onClick: () => { },
  isActive: false,
  primaryColor: '',
};

export default GlobalMenuLogo;
