
import React, { Component } from 'react';
import DropDown from '../../internal/DropDownWithClickOutside'; // eslint-disable-line
import { FlatButton } from '../../Button'; // eslint-disable-line
import { Options } from '../../Icons'; // eslint-disable-line

export class ButtonMenu extends Component {
  static defaultProps = {
    button: <FlatButton icon={<Options />} onClick={(...a) => { console.log('original onClick handler', ...a); }} />,
  }

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
    this.focusButton = this.focusButton.bind(this);
    this.focusMenu = this.focusMenu.bind(this);
    this.storeChildrenWrapperRef = this.storeChildrenWrapperRef.bind(this);
    this.storeTriggerWrapperRef = this.storeTriggerWrapperRef.bind(this);
  }

  focusButton() {
    // return;
    let focusTarget = this.triggerWrapperRef;
    console.log('this.triggerWrapperRef', this.triggerWrapperRef);

    if (focusTarget) {
      if (
        this.triggerWrapperRef
        && this.triggerWrapperRef.querySelector
        && this.triggerWrapperRef.querySelector('button')
      ) {
        focusTarget = this.triggerWrapperRef.querySelector('button');
      } else if (
        this.triggerWrapperRef
        && this.triggerWrapperRef.firstChild
        && this.triggerWrapperRef.firstChild.focus
      ) {
        focusTarget = this.triggerWrapperRef.firstChild;
      }
      console.log('trigger focusTarget=', this.triggerWrapperRef.firstChild);

      if (focusTarget.focus) {
        setTimeout(() => {
          focusTarget.focus();
        }, 10);
      }
    }
  }

  focusMenu() {
    if (
      this.childrenWrapperRef
      && this.childrenWrapperRef.firstChild
      && this.childrenWrapperRef.firstChild.firstChild
      && this.childrenWrapperRef.firstChild.firstChild.focus
    ) {
      console.log(
        'this.childrenWrapperRef.firstChild.firstChild',
        this.childrenWrapperRef.firstChild.firstChild
      );
      console.log('document.activeElement 0', document.activeElement);
      setTimeout(() => {
        console.log('document.activeElement before', document.activeElement);
        console.log(
          'this.childrenWrapperRef.firstChild.firstChild',
          this.childrenWrapperRef.firstChild.firstChild
        );
        this.childrenWrapperRef.firstChild.firstChild.focus();
        console.log('document.activeElement after', document.activeElement);
      }, 32);
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
        this.setState({ isOpen: false }, this.focusButton);
      }
    }
  }

  close() {
    if (!this.isControlled) {
      this.setState({ isOpen: false });
      // this.focusButton();
    }
  }

  render() {
    const {
      children,
      button,
      anchor,
      menuWidth,
      menuMinWidth,
      menuMaxWidth,
      // isFullWidth,
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

    return (
      <div
        onKeyDown={(e) => {
          console.log('e', e.key);
          if (e.key === 'Escape') {
            this.close();
          } else if (e.key === 'ArrowDown') {
            e.preventDefault();
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
      >
        <DropDown
          // isFullWidth={isFullWidth}
          anchor={anchor}
          onClickOutside={this.close}
          isOpen={isOpen}
          trigger={extendedButton}
          onTriggerWrapperRef={this.storeTriggerWrapperRef}
          onChildrenWrapperRef={this.storeChildrenWrapperRef}
        >
          <ul
            style={{
              // padding: 0,
              // margin: 0,
              // listStyle: 'none',
              background: 'white',
              maxHeight: '288px',
              overflowY: 'auto',
              ...(menuWidth ? { width: menuWidth } : {}),
              ...(menuMinWidth ? { minWidth: menuMinWidth } : {}),
              ...(menuMaxWidth ? { maxWidth: menuMaxWidth } : {}),
            // visibility: isOpen ? 'visible' : 'collapse'
            }}
          >
            {
              React.Children.map(children, (child) => {
                if (child.type && child.type.displayName && child.type.displayName === 'ButtonMenuItem') {
                  return React.cloneElement(child, {
                    shouldClose: this.close,
                  });
                }
                return child;
              })
            }

            {/* React.Children.map(children, child => (
              <div
                onKeyDown={(e, ...a) => {
                  console.log('onKeyDown item', e.key);
                  if (e.key === 'Enter') {
                    // if (child.props.onClick) {
                    //   child.props.onClick(e, ...a);
                    // }
                    this.close();
                  }
                }}
                onClick={(...a) => {
                  console.log('onClick in MenuDropDown\'s children map');
                  // if (child.props.onClick) {
                  //   child.props.onClick(...a);
                  // }
                  this.close();
                }}
                // tabIndex={isOpen ? 0 : -1}
              >
                {
                  React.cloneElement(child)
                }
              </div>
            )) */}
          </ul>
        </DropDown>
      </div>
    );
  }
}

export default ButtonMenu;
