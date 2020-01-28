
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../internal/DropDownWithClickOutside'; // eslint-disable-line
import { FlatButton } from '../../Button'; // eslint-disable-line
import Options from '../../Icons/Options'; // eslint-disable-line
import Menu from '../Menu'; // eslint-disable-line
import MlMenu from '../MLMenu/MlMenu';

const focusTimeout = 128;

class ButtonMenuMultiLevel extends Component {
  constructor(props) {
    super(props);

    this.childrenWrapperRef = null;
    this.triggerWrapperRef = null;

    this.isControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isControlled ? this.props.isOpen : false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.close = this.close.bind(this);
    this.focusMenu = this.focusMenu.bind(this);
    this.storeChildrenWrapperRef = this.storeChildrenWrapperRef.bind(this);
    this.storeTriggerWrapperRef = this.storeTriggerWrapperRef.bind(this);
  }

  focusMenu() {
    const elem = (
      this.childrenWrapperRef
      && this.childrenWrapperRef.firstChild
      && this.childrenWrapperRef.firstChild.firstChild
    );

    if (elem && elem.focus) {
      const timerRef = setTimeout(() => {
        if (elem && elem.focus) {
          elem.focus();
        }
        clearTimeout(timerRef);
      }, focusTimeout);
    }
  }

  storeTriggerWrapperRef(node) {
    this.triggerWrapperRef = node;
  }

  storeChildrenWrapperRef(node) {
    this.childrenWrapperRef = node;
  }

  toggleVisibility() {
    if (!this.isControlled) {
      const nextIsOpen = !this.state.isOpen;

      if (nextIsOpen) {
        this.setState({ isOpen: true }, this.focusMenu);
      } else {
        this.setState({ isOpen: false }, /* this.focusButton */);
      }
    }
  }

  close() {
    if (!this.isControlled) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const {
      button,
      menuDescriptor,
      anchor,
      buttonWrapperStyle,
      BoxWrapperUIStyle,
      style,
    } = this.props;

    const isOpen = this.isControlled ? this.props.isOpen : this.state.isOpen;

    const extendedButton = React.cloneElement(button, {

      onClick: (...a) => {
        if (button.props.onClick) {
          button.props.onClick(...a);
        }

        this.toggleVisibility();
      },
    });

    const onSelfClose = (/* e */) => {
      this.setState({ isOpen: false });
    };

    return (
      <div
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            this.close();
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            // e.stopPropagation();
            const { activeElement } = document;

            if (
              activeElement.nextElementSibling
              && activeElement.nextElementSibling
              && activeElement.nextElementSibling.focus
            ) {
              if (activeElement.nodeName !== activeElement.nextElementSibling.nodeName) {
                // divider
                if (
                  activeElement.nextElementSibling.nextElementSibling
                  && activeElement.nextElementSibling.nextElementSibling.focus
                ) {
                  activeElement.nextElementSibling.nextElementSibling.focus();
                }
              } else {
                activeElement.nextElementSibling.focus();
              }
            }/*  else if (
              activeElement.nextElementSibling
              && activeElement.nextElementSibling
              && activeElement.nextElementSibling.nextElementSibling
              && activeElement.nextElementSibling.nextElementSibling.focus
            ) {
              activeElement.nextElementSibling.nextElementSibling.focus();
            } */
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            // e.stopPropagation();
            const { activeElement } = document;

            if (
              activeElement.previousElementSibling
              && activeElement.previousElementSibling.nodeName !== 'BUTTON'
              && activeElement.previousElementSibling.focus
            ) {
              // activeElement.previousElementSibling.focus();
              if (activeElement.nodeName !== activeElement.previousElementSibling.nodeName) {
                // divider
                if (
                  activeElement.previousElementSibling.previousElementSibling
                  && activeElement.previousElementSibling.previousElementSibling.focus
                ) {
                  activeElement.previousElementSibling.previousElementSibling.focus();
                }
              } else {
                activeElement.previousElementSibling.focus();
              }
            }
          }
        }}
        style={style}
      >
        <DropDown
          visibleOverflow
          isFullWidth
          anchor={anchor}
          onClickOutside={this.close}
          isOpen={isOpen}
          trigger={extendedButton}
          onTriggerWrapperRef={this.storeTriggerWrapperRef}
          onChildrenWrapperRef={this.storeChildrenWrapperRef}
          buttonWrapperStyle={buttonWrapperStyle}
          BoxWrapperUIStyle={BoxWrapperUIStyle}
        >
          <MlMenu
            isFullWidth
            menuDescriptor={menuDescriptor}
            onSelfClose={onSelfClose}
          />
        </DropDown>
      </div>
    );
  }
}

ButtonMenuMultiLevel.defaultProps = {
  anchor: 'left',
  children: [],
  button: <FlatButton icon={<Options />} />,
  menuMaxHeight: '396px',
  menuWidth: undefined,
  menuMinWidth: undefined,
  menuMaxWidth: '300px',
  buttonWrapperStyle: {},
  style: {},
};

ButtonMenuMultiLevel.propTypes = {
  button: PropTypes.element,
  buttonWrapperStyle: PropTypes.object,
  style: PropTypes.object,
  // children: PropTypes.arrayOf(PropTypes.node),
  // menuMaxHeight: PropTypes.string,
  // menuWidth: PropTypes.string,
  // menuMinWidth: PropTypes.string,
  // menuMaxWidth: PropTypes.string,
};

export default ButtonMenuMultiLevel;
