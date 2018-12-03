import React, { Component } from 'react';
import styled from 'styled-components';

const OptionsUI = styled.li`
  background: #fff;
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  &:hover {
    outline: none;
    background-color: rgb(206, 206, 206);
  }
  &:focus {
    outline: none;
    background-color: rgb(206, 206, 206);
  }
  &:active {
    outline: none;
    background-color: rgb(206, 206, 206);
  }
`;

const KeyNavigationItem = ({
  onClick,
  selected,
  value,
  index,
  children,
}) => (
  <OptionsUI
    tabIndex={index}
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
  >
    {children}
  </OptionsUI>
);

class KeyNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
    this.preventScrollingOnSpace = this.preventScrollingOnSpace.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.mainRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.preventScrollingOnSpace, true);
    // this.mainRef.current.focus();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.preventScrollingOnSpace, true);
  }

  getOptionsItem() {
    const { children } = this.props;
    const { selectedIndex } = this.state;

    return React.Children.map(children, (child, i) => {
      if (!child) {
        return null;
      }

      const value = child.props.value ? child.props.value : i;
      return (
        <KeyNavigationItem
          key={child.props.key}
          value={value}
          index={i}
          selected={selectedIndex === i}
          onClick={this.clickHandler}
        >
          {child}
        </KeyNavigationItem>
      );
    });
  }

  preventScrollingOnSpace(e) {
    const { onClose } = this.props;
    if (
      e.key === ' ' ||
      e.key === 'Spacebar' ||
      e.keyCode === 32 ||
      e.key === 'Escape' ||
      e.keyCode === 27
    ) {
      if (onClose) {
      // onClose();
      }
    } else if (e.key === 'Tab' || e.keyCode === 9) {
      if (!(document.activeElement.nodeName === 'BUTTON')) {
        const { activeElement } = document;
        const lastOptionItem = document.activeElement.parentNode.lastChild;
        const firstOptionItem = document.activeElement.parentNode.firstChild;

        if (e.shiftKey) {
          if (activeElement === firstOptionItem && lastOptionItem && lastOptionItem.focus) {
            lastOptionItem.focus();
          }
        } else if (activeElement === lastOptionItem && firstOptionItem && firstOptionItem.focus) {
          firstOptionItem.focus();
        }
      }
    } else if (e.key === 'ArrowDown' || e.keyCode === 40) {
    // just go to next sigblings:
      const nextSiblingMaybe = document.activeElement.nextElementSibling;
      if (nextSiblingMaybe && nextSiblingMaybe.focus) {
        nextSiblingMaybe.focus();
      } else {
      // focus from main triggerer to (first) item:
        const nextSiblingMaybeItem = document.activeElement.parentNode.nextElementSibling;
        if (nextSiblingMaybeItem) {
          const firstOptionItem = nextSiblingMaybeItem.firstChild;
          if (firstOptionItem && firstOptionItem.focus) {
            firstOptionItem.focus();
          }
        } else if (this.mainRef) {
        // go back to first option element
          const firstOption = this.mainRef.firstChild;
          if (firstOption && firstOption.focus) {
            firstOption.focus();
          }
        }
      }
    } else if (e.key === 'ArrowUp' || e.keyCode === 38) {
      const previousSiblingMaybe = document.activeElement.previousElementSibling;
      if (previousSiblingMaybe && previousSiblingMaybe.focus) {
        previousSiblingMaybe.focus();
      } else {
        const optionsWrapperDiv = document.activeElement.parentNode.nextElementSibling;
        if (optionsWrapperDiv) {
          const lastOptionItem = document.activeElement.parentNode.nextElementSibling.lastChild;
          if (lastOptionItem && lastOptionItem.focus) {
            lastOptionItem.focus();
          }
        } else {
        // go back to last option element
          const lastOption = document.activeElement.parentNode.lastChild;
          if (lastOption && lastOption.focus) {
            lastOption.focus();
          }
        }
      }
    }
  }

  clickHandler(e, index, value) {
    const { onChange, onSubmit } = this.props;

    this.setState({
      selectedIndex: index,
    });

    if (onChange) {
      onChange(e, value);
    }

    if (onSubmit) {
      onSubmit(e, value);
    }
  }

  render() {
    const list = this.getOptionsItem();
    const {
      listStyle = {},
    } = this.props;

    return (
      <ul ref={this.mainRef} role="menu" style={{ ...listStyle }}>
        {list}
      </ul>
    );
  }
}

export default KeyNavigation;
