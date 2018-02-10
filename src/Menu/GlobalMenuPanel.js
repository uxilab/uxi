import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import styled from 'styled-components';
import GlobalMenuPanelStyle from './GlobalMenuPanel.style';
import { Close } from '../Icons';
import defaults from './defaults';

const {
  breakpoint,
  bigMenuWidth,
  menuWidth,
} = defaults;

const getRight = ({
  isOpen,
  fullWidth,
}) => {
  if (isOpen && fullWidth) {
    return '0';
  }

  return 'auto';
};

const getLeft = ({ isOpen, width, fullWidth }, breakpoint) => {
  if (isOpen) {
    return breakpoint === 'desktop' ? defaults.bigMenuWidth : defaults.menuWidth;
  }

  if (!isOpen && width && !fullWidth) {
    return `-${width + 125}px`;
  }

  if (!isOpen && !width && !fullWidth) {
    return `-${400 + 125}px`;
  }

  return '-100%';
};

const getWidth = ({ isOpen, width, fullWidth }) => {
  if (isOpen && width && !fullWidth) {
    return `${width}px`;
  }

  if (!isOpen && width && !fullWidth) {
    return `-${width + 125}px`;
  }

  if (!isOpen && !width && !fullWidth) {
    return '';
  }

  if (isOpen && fullWidth) {
    return 'auto';
  }

  return '400px';
};


const GlobalMenuPanelWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  margin-left: 0px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  background: #fff;
  border-right: 1px solid #ececec;
  border-left: 1px solid #ececec;
  transition: width 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s;
  z-index: 98;
  overflow-x: hidden;
  overflow-y: scroll;
  width: ${props => getWidth(props)};
  right: ${props => getRight(props)};
  left: ${props => getLeft(props)};
  transition: ${({ theme: { transition } }) => transition.defaultAll};

  @media (min-width: ${breakpoint}) {
    width: ${props => getWidth(props, 'desktop')};
    right: ${props => getRight(props, 'desktop')};
    left: ${props => getLeft(props, 'desktop')};
    transition: ${({ theme: { transition } }) => transition.defaultAll};
  }
`;

class GlobalMenuPanel extends Component {
  handleClickOutside() {
    const { onClickOutside } = this.props;
    if (onClickOutside) {
      onClickOutside();
    }
  }
  render() {
    const {
      isOpen,
      Title,
      Content,
      Action,
      width,
      onClickOutside,
      fullWidth,
    } = this.props;
    let actionContent;
    let closeContent;

    if (fullWidth) {
      closeContent = (
        <Close
          style={{ marginLeft: '15px', cursor: 'pointer' }}
          onClick={onClickOutside}
        />
      );
    }

    if (Action) {
      actionContent = (
        <div style={GlobalMenuPanelStyle.action}>
          <Action close={onClickOutside} />
          {closeContent}
        </div>
      );
    }

    if (!Action && fullWidth) {
      actionContent = (
        <div style={GlobalMenuPanelStyle.action}>
          {closeContent}
        </div>
      );
    }

    const isTitleString = (Title && typeof Title === 'string');
    const title = Title;

    return (
      <GlobalMenuPanelWrapper
        isOpen={isOpen}
        width={width}
        fullWidth={fullWidth}
      >
        <div style={GlobalMenuPanelStyle.titleContainer}>
          {actionContent}
          <div style={GlobalMenuPanelStyle.title}>
            { Title && !isTitleString && <Title close={onClickOutside} /> }
            { Title && isTitleString && title }
          </div>
        </div>
        <div style={GlobalMenuPanelStyle.panel}>
          { Content && <Content close={onClickOutside} /> }
        </div>
      </GlobalMenuPanelWrapper>
    );
  }
}

GlobalMenuPanel.propTypes = {
  onClickOutside: PropTypes.func,
  isOpen: PropTypes.bool,
  Title: PropTypes.any,
  Content: PropTypes.any,
  Action: PropTypes.any,
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
};

export default enhanceWithClickOutside(GlobalMenuPanel);
