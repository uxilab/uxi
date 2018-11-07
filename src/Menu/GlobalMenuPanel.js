import React, { Component } from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import styled from 'styled-components';
import GlobalMenuPanelStyle from './GlobalMenuPanel.style';
import { Close } from '../Icons';
import defaults from './defaults'; // eslint-disable-line import/no-named-as-default

const {
  breakpoint,
  bigMenuWidth,
  menuWidth,
} = defaults;

// eslint-disable-next-line no-unused-vars
const getWidth = ({
  isOpen, // eslint-disable-line no-unused-vars
  panelWidth,
  fullWidth,
  attachToViewport, // eslint-disable-line no-unused-vars
  fullViewportWidthPanel,
},
breakpoint) => { // eslint-disable-line no-shadow
  const theMenuWidth = breakpoint === 'desktop' ? bigMenuWidth : menuWidth;
  const unit = fullViewportWidthPanel ? 'vw' : '%';

  if (fullWidth) {
    // if (fullViewportWidthPanel) {
    // return `calc(100vw - ${theMenuWidth})` // yep it's weird, layout context stuff...
    // }
    // return '100%';
    return `calc(100${unit} - ${theMenuWidth})`;
  }


  return `${panelWidth}px`;
};

// eslint-disable-next-line no-shadow
const getTransform = ({ panelWidth, fullWidth, isOpen }, breakpoint) => {
  let x = panelWidth;
  // const theMenuWidth = breakpoint === 'desktop' ? bigMenuWidth : menuWidth;

  if (isOpen) {
    if (breakpoint === 'desktop') {
      x = bigMenuWidth;
    } else {
      x = menuWidth;
    }
  } else if (fullWidth) {
    // x = `calc(-100vh - ${theMenuWidth})`;
    x = '-100vw';
  } else {
    // x = `calc(-${width}px)`;
    x = `-${panelWidth}px`;
  }

  return `translate3d(${x}, 0, 0)`;
};

const getAccessibilityRules = ({ isOpen }) => {
  if (isOpen) {
    return 'pointer-events: all; visibility: visible';
  }
  return 'pointer-events: none; visibility: collapse';
};

const GlobalMenuPanelWrapper = styled.div`
  position: ${({ attachToViewport }) => (attachToViewport ? 'fixed' : 'absolute')};
  top: 0;
  bottom: 0;
  margin-left: 0px;
  background: #fff;
  border-right: 1px solid #ececec;
  border-left: 1px solid #ececec;
  transition: width 0.3s ease-in-out 0.3s, opacity 0.3s ease-in-out 0.3s;
  z-index: 90;
  overflow-x: hidden;
  overflow-y: scroll;
  width: ${({ panelWidth }) => `${panelWidth}px`}; /* in case 680 was passed */
  width: ${({ panelWidth }) => panelWidth}; /* in case auto was passed */
  width: ${props => getWidth(props)};
  will-change: transform;
  transform: ${props => getTransform(props)};
  transition: ${({ theme: { transition } }) => transition.defaultAll};

  @media (min-width: ${breakpoint}) {
    width: ${({ panelWidth }) => panelWidth}; /* in case auto was passed */
    width: ${props => getWidth(props, 'desktop')};
    transform: ${props => getTransform(props, 'desktop')};
    transition: ${({ theme: { transition } }) => transition.defaultAll};
  }

  /* render inert when not visible */
  /* ${({ isOpen }) => (isOpen ? '' : 'pointer-events: none; visibility: hidden')}; */
  ${props => getAccessibilityRules(props)};
`;

class GlobalMenuPanel extends Component {
  handleClickOutside() {
    const { onClickOutside, isOpen } = this.props;
    if (isOpen) {
      if (onClickOutside) {
        onClickOutside();
      }
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
      attachToViewport,
      fullViewportWidthPanel,
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

    const attributes = {
      ...(!isOpen
        ? { tabIndex: -1, 'aria-hidden': 'true' }
        : { tabIndex: 0, autofocus: 'true' }
      ),
    };

    return (
      <GlobalMenuPanelWrapper
        className="rc-GlobalMenuPanelWrapper"
        isOpen={isOpen}
        panelWidth={width}
        fullWidth={fullWidth}
        attachToViewport={attachToViewport}
        fullViewportWidthPanel={fullViewportWidthPanel}
        {...attributes}
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
  attachToViewport: PropTypes.bool,
  fullViewportWidthPanel: PropTypes.bool,
};

GlobalMenuPanel.defaultProps = {
  width: 400,
  attachToViewport: false,
  onClickOutside: () => { },
  isOpen: false,
  Title: null,
  Content: null,
  Action: null,
  fullWidth: false,
  fullViewportWidthPanel: false,
};

export default enhanceWithClickOutside(GlobalMenuPanel);
