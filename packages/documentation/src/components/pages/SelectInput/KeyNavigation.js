import React, { Component } from 'react';
import styled from 'styled-components';

function isElement(element) {
  return React.isValidElement(element);
}

function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

const OptionsUI = styled.li`
  box-sizing: border-box;
  cursor: pointer;
  user-select: none;
  &:hover {
    outline: none;
    background-color: blue;
  }
  &:focus {
    outline: none;
    background-color: red;
  }
  &:active {
    outline: none;
    background-color: green;
  }
`;
/*
const Options = ({
  onEsc,
  onClick,
  style,
  isOpen,
  ...rest
}) => {
  return (
    <li
      {...rest}
      style={style}
      onClick={(e) => {
        if (e.target.blur) {
          e.target.blur();
        }
        if (onClick) {
          onClick(e);
        }
      }}
      onKeyUp={(e) => {
        if (e.key === 'Escape') {
          e.target.blur();
          e.target.tabIndex = -1;


          if (onEsc) {
            onEsc();
          }
        } else if (e.key === ' ' || e.key === 'Enter') {
          e.target.blur();
          e.target.tabIndex = -1;

          if (onClick) {
            const fakeEvent = {
              currentTarget: {
                dataset: { index: e.currentTarget.dataset.index },
              },
            };
            onClick(fakeEvent);
          }
        }
      }}  
      aria-hidden={!(isOpen === false)}
      tabIndex={isOpen ? 0 : -1}
    />
  );
};
*/
//TODO : Map children WHEN the children is changing.

const mapChildrenForStorage = (children) => {
  const values = [];
  const optionsNode = [];
  React.Children.forEach(children, (child, i) => {
    const value = child.props.value !== undefined ? child.props.value : i;
    values[i] = value;
    optionsNode[i] = React.cloneElement(child, {
      style: {
        ...child.props.style,
      },
    });
  });

  return {
    values,
    optionsNode,
  };
}

const KeyNavigationItem = ({
  onClick,
  selected,
  value,
  index,
  children
}) => {
  return (
    <OptionsUI
      tabIndex={index}
      onKeyPress={e => {
        if(e.keyCode === 13 || e.key === 'Enter') {
          onClick(e, index, value);
        }
      }}
      onClick={e => {
        onClick(e, index, value);
      }}
      onEsc={() => {
        onClick(e, index, value);
      }}
      data-index={index}
      selected={selected}
    >
      {children}
    </OptionsUI>
  );
}

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

  preventScrollingOnSpace(e) {
    const { onClose } = this.props;
    if (
      e.key === ' ' ||
      e.key === 'Spacebar' ||
      e.keyCode === 32 ||
      e.key === 'Escape' ||
      e.keyCode === 27
    ) {
      if(onClose) {
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

  componentDidMount() {
    window.addEventListener('keydown', this.preventScrollingOnSpace);
    //this.mainRef.current.focus(); 
  }

  componentWillUnmount() {
      window.removeEventListener('keydown', this.preventScrollingOnSpace);
  }

  clickHandler(e, index, value) {
    const { onChange } = this.props;

    this.setState({
      selectedIndex: index,
    });

    if (onChange) {
      onChange(e, value);
    }
  }

  getOptionsItem(optionsNode, values) {
    const { children } = this.props;
    const { selectedIndex } = this.state;

    return React.Children.map(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      return (
        <KeyNavigationItem
          value={value}
          index={i}
          selected={selectedIndex === i}
          onClick={this.clickHandler}
        >
          {child}
        </KeyNavigationItem>
      )
    });
  }

  render() {
    const { items } = this.props;
    const list = this.getOptionsItem();

    return (
      <ul ref={this.mainRef}>
        {list}
      </ul>
    )
  }
};

export default KeyNavigation;
