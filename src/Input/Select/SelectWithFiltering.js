import React from 'react';
import styled from 'styled-components';
import Select from './Select'; // eslint-disable-line import/no-named-as-default
import UnstyledButtonBeta from '../../Button/UnstyledButton1';
// eslint-disable-next-line import/no-named-as-default
// import DropDown from '../internal/DropDown';
import DropDown2 from '../../internal/DropDownWithClickOutside';
import { Arrowdown } from '../../Icons';
import { Button } from '../../Button';
import Option from './SelectInputOptions';
// import StatusIcon from '../utils/StatusIcon';
import { TextField } from '../../Input';
// // import ErrorWrapperUI from './utils/ErrorWrapperUI';
import { styles } from './Select.styles';
import TriggererWrapperWithEllispsisChildren from './TriggererWrapperWithEllispsisChildren';
import TriggerreWrapper from './TriggerreWrapper';
import {
// isElement,
  isDOMTypeElement,
} from './select-utils';

const SelectWithFilteringWrapper = styled.div`
  display: inline-block;
  ${({ isFullWidth }) => (isFullWidth ? 'display: block' : '')};
  // transform: translate(0, 0);

  *[data-drop-down-trigger] input {
    height: 34px;
  }
  *[data-drop-down-trigger] > div > div > div > div,
  *[data-ripple-wrapper] > div > div > div > div > div,
  *[data-ripple-wrapper] > div > div > div > div > div > div {
    height: 100%;
  }
`;

class SelectWithFiltering extends Select {
  constructor(props) {
    super(props);

    this.isOpenControlled = props.isOpen !== undefined;

    this.isControlled = props.value !== undefined;

    const { children } = this.props;
    const storedOptions = (this.mapChildrenForStorage(children) || {});

    this.state = {
      isOpen: this.isOpenControlled ? this.props.isOpen : false,
      options: storedOptions.options || [],
      optionsNode: storedOptions.optionsNode || [],
      // TODO: handle multi select
      selectedIndex: null,
      filter: false,
    };

    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.preventScrollingOnSpace = this.preventScrollingOnSpace.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.storeTriggerWrapperRef = this.storeTriggerWrapperRef.bind(this);
    this.storeChildrenWrapperRef = this.storeChildrenWrapperRef.bind(this);
    this.handlInputFocus = this.handlInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  componentDidMount() {
    if (!this.isControlled) {
      const { defaultValue } = this.props;
      if (defaultValue !== undefined) {
        const { options } = this.state;
        // not controlled, use internal state
        const foundIndex = options.findIndex(o => o === defaultValue);
        const selectedIndex = foundIndex > -1 ? foundIndex : null;
        this.setState({ selectedIndex });
      } else {
        this.setState({ selectedIndex: 0 });
      }
    } else {
      const { value } = this.props;
      const { options } = this.state;
      // not controlled, use internal state
      const foundIndex = options.findIndex(o => o === value);
      const selectedIndex = foundIndex > -1 ? foundIndex : 0;
      this.setState({ selectedIndex });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen: isOpenState } = this.state;
    const { isOpen: isOpenProps } = this.props;

    const isOpen = this.isOpenControlled ? isOpenProps : isOpenState;

    if (this.isControlled) {
      // noop
    } else if (this.state.selectedIndex) {
      const { selectedIndex } = prevState;
      const { onChange } = prevProps;

      if (selectedIndex !== this.state.selectedIndex) {
        if (onChange) {
          const { options } = this.state;
          const value = options[this.state.selectedIndex];
          const fakeEvent = {
            target: { value },
            currentTarget: { value },
          };
          onChange(fakeEvent, value);
        }
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', this.preventScrollingOnSpace);
    } else {
      window.removeEventListener('keydown', this.preventScrollingOnSpace);
    }

    const { children } = this.props;
    const shouldUpdateOptions = (
      prevProps.children &&
      children &&
      (
        prevProps.children.length !== children.length ||
        prevProps.children !== children
      )
    );

    let storedOptions = null;
    if (shouldUpdateOptions) {
      storedOptions = (this.mapChildrenForStorage(children) || {});
    }

    const shouldClose = (
      this.isControlled
      && !this.isOpenControlled
      && this.props.value !== prevProps.value
    );

    if (shouldUpdateOptions || shouldClose) {
      setTimeout(() => {
        let newStateProps = {};

        if (storedOptions) {
          newStateProps = {
            options: storedOptions.options,
            optionsNode: storedOptions.optionsNode,
          };
        }

        if (shouldClose) {
          newStateProps = {
            ...newStateProps,
            isOpen: false,
          };
        }

        if (Object.keys(newStateProps).length) {
          this.setState(newStateProps);
        }
      }, 1);
    }
  }

  getTrigerrerLabel() {
    const {
      state: {
        selectedIndex: selectedIndexState,
        optionsNode,
        options,
        // isOpen,
      },
      props: {
        // error,
        // success,
        value,
        triggerElement,
        style,
        isFullWidth,
      },
    } = this;

    if (triggerElement) {
      return triggerElement;
    }

    let selectedIndex = selectedIndexState;
    const selecteIndexMaybe = options.findIndex(x => x === value);
    if (this.isControlled) {
      if (selecteIndexMaybe > -1) {
        selectedIndex = selecteIndexMaybe;
      }
    }


    let mainContent = null; // eslint-disable-line no-unused-vars
    if (selectedIndex >= 0 && optionsNode[selectedIndex] !== undefined) {
      mainContent = (
        <TriggererWrapperWithEllispsisChildren>
          <div
            style={{
              padding: '2px 2px 2px 6px',
              marginRight: '64px',
              display: 'flex',
              width: '100%',
              boxSizing: 'border-box',
              height: '34px',
            }}
          >
            {
              React.cloneElement(optionsNode[selectedIndex], {
                onClick: () => {},
                style: {
                  ...optionsNode[selectedIndex].props.style,
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                },
              })
            }
          </div>
        </TriggererWrapperWithEllispsisChildren>
      );
    } else {
      mainContent = <div>&nbsp;</div>;
    }

    return (
      <UnstyledButtonBeta
        inert
        isFullWidth={isFullWidth}
        style={{
          ...(style.width ? { width: style.width } : {}),
        }}
        onClick={() => {
          this.focusInput();
          console.log('onClick this.focusInput');
        }}
        // onEsc={() => this.clickHandler(null)}
        // onClick={(e, ...r) => {
        // if (e && e.stopPropagation) {
        //   e.stopPropagation();
        // }
        // this.toggleVisibility(e, ...r);
        // }}
      >
        <span style={{ position: 'relative' }}>
          <TriggerreWrapper>
            <TextField
              style={{ background: 'transparent' }}
              placeholder="filter"
              onFocus={this.handlInputFocus}
              onChange={this.handleInputChange}
            />
            {
              /* {mainContent}
              <StatusIcon success={success} error={error} style={{ top: '0', right: '48px' }} />
              */
            }
          </TriggerreWrapper>
          <div style={styles.trigerrerIconForSelectWithFiltering}>
            <Button
              inert
              type="primary"
              style={{
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                minHeight: '34px',
              }}
              icon={<Arrowdown />}
            />
          </div>

        </span>
      </UnstyledButtonBeta>
    );
  }

  getOptionsItem() {
    const {
      children,
      isOpen: isOpenProps,
    } = this.props;

    const { isOpen: isOpenState, filter } = this.state;

    const isOpen = this.isOpenControlled ? isOpenProps : isOpenState;

    return React.Children.map(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      const isTheOne = this.state.selectedIndex === i;

      if (
        value
        && filter
      ) {
        if (value.indexOf) {
          if (value.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
            // match noop let go
          } else {
            return null;
          }
        }
      }

      if (React.isValidElement(child)) {
        if (!isDOMTypeElement(child)) {
          return (
            <Option
              key={i}
              onClick={(e) => {
                if (isOpen) this.clickHandler(e);
              }}
              onEsc={() => {
                if (isOpen) this.clickHandler(null);
              }}
              data-index={i}
              {...child.props}
              isOpen={isOpen}
              selected={isTheOne}
              style={{
                textOverflow: 'ellipsis',
                overflowX: 'hidden',
                maxWidth: '100%',
                foo: 'bar',
              }}
            >
              {React.cloneElement(child, {
                value,
              })}
            </Option>
          );
        }

        return (
          <Option
            key={i}
            onClick={(e) => {
              if (isOpen) this.clickHandler(e);
            }}
            onEsc={() => {
              if (isOpen) this.clickHandler(null);
            }}
            data-index={i}
            {...child.props}
            isOpen={isOpen}
            selected={isTheOne}
            style={{
              textOverflow: 'ellipsis',
              overflowX: 'hidden',
              maxWidth: '100%',
              foo: 'bar',
            }}
          >
            {React.cloneElement(child, {
              value,
            })}
          </Option>
        );
      }
      return null;
    });
  }

  preventScrollingOnSpace(e) {
    if (e.key === ' ' || e.key === 'Spacebar' || e.keyCode === 32) {
      if (this.isOpenControlled) {
        const { onIsOpenChange } = this.props;
        if (onIsOpenChange) {
          onIsOpenChange(!this.props.isOpen, e);
        }
      } else {
        e.preventDefault();
        e.stopPropagation();

        this.setState({
          isOpen: false,
        });
      }
    } else if (e.key === 'Tab' || e.keyCode === 9) {
      if (!(document.activeElement.nodeName === 'BUTTON')) {
        const { activeElement } = document;
        const lastOptionItem = document.activeElement.parentNode.lastChild;
        const firstOptionItem = document.activeElement.parentNode.firstChild;

        if (e.shiftKey) {
          if (activeElement === firstOptionItem && lastOptionItem && lastOptionItem.focus) {
            lastOptionItem.focus();
            if (!this.isOpenControlled) {
              e.preventDefault();
            }
          }
        } else if (activeElement === lastOptionItem && firstOptionItem && firstOptionItem.focus) {
          firstOptionItem.focus();
          if (!this.isOpenControlled) {
            e.preventDefault();
          }
        }
      }
    } else if (e.key === 'Escape' || e.keyCode === 27) {
      if (this.isOpenControlled) {
        if (this.props.onIsOpenChange) {
          this.props.onIsOpenChange(false, e);
        }
      } else {
        this.setState({
          isOpen: false,
        });
      }
    } else if (e.key === 'ArrowDown' || e.keyCode === 40) {
      if (!this.isOpenControlled) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (document.activeElement.nodeName === 'INPUT') {
        this.focusContent();
      } else {
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
          } else if (this.itemRef) {
            // go back to first option element
            const firstOption = this.itemRef.firstChild;
            if (firstOption && firstOption.focus) {
              firstOption.focus();
            }
          }
        }
      }
    } else if (e.key === 'ArrowUp' || e.keyCode === 38) {
      if (!this.isOpenControlled) {
        e.preventDefault();
        e.stopPropagation();
      }

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
  mapChildrenForStorage(children) { // eslint-disable-line class-methods-use-this
    const options = [];
    const optionsNode = [];
    React.Children.forEach(children, (child, i) => {
      const value = child.props.value !== undefined ? child.props.value : i;
      options[i] = value; // garanties ordering
      optionsNode[i] = React.cloneElement(child, {
        style: {
          ...child.props.style,
        },
      });
    });

    return {
      options,
      optionsNode,
    };
  }

  // storeOptions(children) {
  //   this.setState({
  //     options: this.mapChildrenForStorage(children).options,
  //     optionsNode: this.mapChildrenForStorage(children).optionsNode,
  //   });
  // }

  handlInputFocus() {
    if (!this.isOpenControlled) {
      this.setState({ isOpen: true });
    }
  }

  handleInputChange(e, value = '') {
    if (e.target.value) {
      this.setState({ filter: value });
    }
  }

  clickHandler(e) {
    if (!e) {
      if (this.isOpenControlled) {
        const { onIsOpenChange } = this.props;
        if (onIsOpenChange) {
          onIsOpenChange(false, null);
        }
      } else {
        if (this.isControlled) {
          // notify consumer ?
        } else {
          this.setState({
            selectedIndex: this.state.selectedIndex || null,
            isOpen: false,
          }, this.focusTrigger);
        }
        this.forceUpdate();
      }

      return;
    }

    // TODO actually implement an conotrlled input on selectinput
    if (e.currentTarget && e.currentTarget.dataset && e.currentTarget.dataset.index !== undefined) {
      if (this.isControlled) {
        const { onChange } = this.props;
        const selectedIndex = e.currentTarget.dataset.index;
        if (!this.isOpenControlled) {
          this.setState({
            isOpen: false,
          }, this.focusTrigger);
        }
        if (onChange) {
          const { options } = this.state;
          const value = options[selectedIndex];
          const fakeEvent = {
            target: { value },
            currentTarget: { value },
          };
          onChange(fakeEvent, value);
        }
      } else {
        const selectedIndex = e.currentTarget.dataset.index;
        this.setState({
          selectedIndex,
          isOpen: false,
        }, this.focusTrigger);
        this.forceUpdate();
      }
    }
  }

  toggleVisibility() {
    if (!this.isOpenControlled) {
      const nextIsOpen = !this.state.isOpen;
      const cb = nextIsOpen === true
        ? this.focusContent
        : this.focusTrigger;

      this.setState({ isOpen: nextIsOpen }, cb);
    }
  }

  handleDropDownChange(isOpen) {
    if (!this.isOpenControlled) {
      if (this.state.isOpen !== isOpen) {
        const cb = isOpen
          ? this.focusContent
          : this.focusTrigger;

        this.setState({ isOpen }, cb);
      }
    }
    if (this.props.onIsOpenChange) {
      if (this.props.isOpen !== isOpen) {
        this.props.onIsOpenChange(isOpen);
      }
    }
  }

  // storeItemsRef(itemsNode) {
  //   this.itemRef = itemsNode;
  // }

  focusInput() {
    console.log('focusInput');
    console.log('this.triggerWrapperRef', this.triggerWrapperRef);
    const { triggerWrapperRef } = this;

    if (triggerWrapperRef && triggerWrapperRef.querySelector) {
      const inputMaybe = triggerWrapperRef.querySelector('input');
      console.log('inputMaybe', inputMaybe);
      if (inputMaybe && inputMaybe.focus) {
        inputMaybe.focus();
      }
    }
  }

  focusTrigger() {
    // return;
    let focusTarget = this.triggerWrapperRef;

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

      if (focusTarget.focus) {
        setTimeout(() => {
          focusTarget.focus();
        }, 10);
      }
    }
  }

  focusContent() {
    if (
      this.childrenWrapperRef
      && this.childrenWrapperRef.firstChild
      && this.childrenWrapperRef.firstChild.firstChild
      && this.childrenWrapperRef.firstChild.firstChild.focus
    ) {
      setTimeout(() => {
        this.childrenWrapperRef.firstChild.firstChild.focus();
      }, 10);
    }
  }

  storeTriggerWrapperRef(node) {
    this.triggerWrapperRef = node;
  }
  storeChildrenWrapperRef(node) {
    this.childrenWrapperRef = node;
  }

  render() {
    const { isOpen: isOpenState } = this.state;
    const {
      isFullWidth,
      // error,
      style,
      // mainScrollingElementSelector,
      // inertTrigger,
      isOpen: isOpenProp,
    } = this.props;

    const isOpen = this.isOpenControlled ? isOpenProp : isOpenState;

    const optionsItems = this.getOptionsItem();

    const trigerer = this.getTrigerrerLabel();

    return (
      <SelectWithFilteringWrapper style={style}>
        <DropDown2
          isOpen={isOpen}
          onClickOutside={this.handleDropDownChange}
          trigger={trigerer}
          onTriggerWrapperRef={this.storeTriggerWrapperRef}
          onChildrenWrapperRef={this.storeChildrenWrapperRef}
        >
          <div
            style={{
              maxHeight: '320px',
              overflowY: 'auto',
              minWidth: '180px',
              background: 'white',
              ...(style.width ? { width: style.width } : {}),
              ...(isFullWidth ? { width: '100%' } : {}),
            }}
          >
            {optionsItems}
          </div>
        </DropDown2>
        {/* <DropDown
          inertMain={inertTrigger}
          mainScrollingElementSelector={mainScrollingElementSelector}
          onIsOpenChange={this.handleDropDownChange}
          isFullWidth={isFullWidth || ('width' in style)}
          isOpen={isOpen}
          main={trigerer}
          items={optionsItems}
          onItemRef={this.storeItemsRef}
          itemsStyle={{
            maxHeight: '200px',
            overflowY: 'auto',
            overflowX: 'hidden',
          // }}
        /> */}
        {/* <ErrorWrapperUI>{error}</ErrorWrapperUI> */}
      </SelectWithFilteringWrapper>
    );
  }
}

SelectWithFiltering.defaultProps = {
  style: {},
};


export default SelectWithFiltering;
