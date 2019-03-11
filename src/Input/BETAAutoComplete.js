import React, { Component } from 'react';
import styled from 'styled-components';
// import BETALookUp from '../internal/BETALookup';
import DropDown from '../internal/DropDownWithClickOutside';
// import ListWithNavigation from './ListWithNavigation';
import { OptionsUI } from './Select/SelectInputOptions';

const InputUI = styled.input`
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')}
`;


const KeyNavigationItem = ({
  onClick,
  selected,
  value,
  index,
  children,
  style,
}) => (
  <OptionsUI
    tabIndex={0}
    onClick={(e) => {
      onClick(e, index, value, true);
    }}
    onKeyPress={(e) => {
      if (e.keyCode === 13 || e.key === 'Enter') {
        onClick(e, index, value, true);
      }
    }}
    data-index={index}
    selected={selected}
    role="menuitem"
    style={{
      ...style,
    }}
  >
    {children}
  </OptionsUI>
);

class BETAAutoComplete extends Component {
  constructor(props) {
    super(props);

    this.ref = null;
    this.triggerRef = null;

    this.isOpenControlled = this.props.isOpen !== undefined;

    this.state = {
      isOpen: this.isOpenControlled ? this.props.isOpen : false,
    };

    this.storeRef = this.storeRef.bind(this);
    this.storeTriggerRef = this.storeTriggerRef.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  focusFirstItem() {
    if (
      this.ref
      && this.ref.firstElementChild // ul
      && this.ref.firstElementChild.firstElementChild // first li
      && this.ref.firstElementChild.firstElementChild.focus
    ) {
      setTimeout(() => this.ref.firstElementChild.firstElementChild.focus(), 8);
      // the ListWithNavigation should take care of the rest
    }
  }

  focusInput() {
    if (this.triggerRef && this.triggerRef.querySelector) {
      const input = this.triggerRef.querySelector('input');
      if (input && input.focus) {
        setTimeout(() => input.focus(), 8);
      }
    }
  }

  storeRef(node) {
    this.ref = node;
  }

  storeTriggerRef(node) {
    this.triggerRef = node;
  }

  toggleVisibility() {
    if (!this.isOpenControlled) {
      this.setState({ isOpen: this.state.isOpen });
    }
  }
  close() {
    if (!this.isOpenControlled) {
      this.setState({ isOpen: false });
    }
  }
  open() {
    if (!this.isOpenControlled) {
      this.setState({ isOpen: true });
    }
  }

  render() {
    const {
      onChange,
      defaultValue,
      value,
      children,
      isFullWidth,
      style = {},
      Input,
      placeholder,
      onSubmit,
      inertMain,
      ...rest
    } = this.props;

    const isOpen = this.isOpenControlled ? this.props.isOpen : this.state.isOpen;

    const InputComponent = Input || InputUI;
    return (
      <div
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            this.close();
          } else if (e.key === 'ArrowDown') {
            if (!e.ctrlKey && !e.metaKey && !e.altKey) {
              if (document.activeElement.nodeName === 'INPUT') {
                this.focusFirstItem();
              } else if (document.activeElement.nextElementSibling) {
                // this.focusNext()
                document.activeElement.nextElementSibling.focus();
              }
            }
          } else if (e.key === 'ArrowUp') {
            if (
              document.activeElement.nodeName !== 'INPUT'
              && !document.activeElement.previousElementSibling
            ) {
              this.focusInput();
            } else if (document.activeElement.previousElementSibling) {
              // this.focusPrev()
              document.activeElement.previousElementSibling.focus();
            }
          }

          // const open = this.getOpenState();
          // if (!open) {
          //   this.handleToggleVisibility();
          // }
        }}
      >
        <DropDown
          onClickOutside={this.close}
          isOpen={isOpen}
          isFullWidth={isFullWidth}
          inertMain={inertMain}
          onChildrenWrapperRef={this.storeRef}
          onTriggerWrapperRef={this.storeTriggerRef}
          trigger={
            <InputComponent
              {...rest}
              defaultValue={defaultValue}
              isFullWidth={isFullWidth}
              value={value}
              style={style}
              placeholder={placeholder}
              onClick={this.open}
              onFocus={this.open}
              onChange={(e) => { onChange(e, e.target.value); }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onSubmit(e, e.target.value);
                  this.close();
                }
              }}
            />
          }
        >
          <ul style={{ background: 'white', overflowY: 'scroll' }}>
            {
              React.Children
                .map(children, c => c && (
                  <KeyNavigationItem
                    tabIndex="0"
                    // onClick={(c.props.onClick || (() => {}))}
                    onClick={(...a) => {
                      const { onClick } = (c.props || {});
                      if (onClick) {
                        onClick(...a);
                      }
                      this.close();
                    }}
                  >
                    {
                      React.cloneElement(c, {
                        ...(c.props || {}),
                        tabIndex: 0,
                      })
                    }
                  </KeyNavigationItem>
                ))
            }
          </ul>
        </DropDown>
      </div>
    );
  }
}

export default BETAAutoComplete;
