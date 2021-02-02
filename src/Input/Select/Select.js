import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';
// eslint-disable-next-line import/no-named-as-default
// import DropDown from '../internal/DropDown';
import DropDown2 from '../../internal/DropDownWithClickOutside';
import Arrowdown from '../../Icons/Arrowdown';
import Button from '../../Button/Button';
import UnstyledButtonBeta from '../../Button/UnstyledButton1';
import Option from './SelectInputOptions';
import StatusIcon from '../utils/StatusIcon';
import ErrorWrapperUI from '../utils/ErrorWrapperUI';
import { styles } from './Select.styles';
import TriggererWrapperWithEllispsisChildren from './TriggererWrapperWithEllispsisChildren';
import TriggererWrapper from './TriggererWrapper';
import {
  isDOMTypeElement,
} from './select-utils';


class Select extends Component {
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
    };

    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.storeTriggerWrapperRef = this.storeTriggerWrapperRef.bind(this);
    this.storeChildrenWrapperRef = this.storeChildrenWrapperRef.bind(this);
    this.storeSelectWrapperRef = this.storeSelectWrapperRef.bind(this);
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

  shouldComponentUpdate(nextProps, nextState) {
    const {
      children,
      isOpen,
      value,
      disabled,
    } = this.props;

    if (React.Children.count(nextProps.children) !== React.Children.count(children)) {
      return true;
    } else if (nextProps.isOpen !== isOpen) {
      return true;
    } else if (nextProps.value !== value) {
      return true;
    } else if (nextProps.disabled !== disabled) {
      return true;
    } else if (!isEqual(this.state, nextState)) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    // const { isOpen: isOpenState } = this.state;
    // const { isOpen: isOpenProps } = this.props;

    // const isOpen = this.isOpenControlled ? isOpenProps : isOpenState;

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

    // if (isOpen) {
    //   window.addEventListener('keydown', this.handleKeyboardEvents, { capture: true });
    // } else {
    //   window.removeEventListener('keydown', this.handleKeyboardEvents, { capture: true });
    // }

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
        error,
        success,
        value,
        triggerElement,
        style,
        isFullWidth,
        disabled,
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


    let mainContent = null;
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
              overflow: 'hidden',
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

    const disabledStyle = disabled
      ? {
        opacity: 0.8,
        filter: 'grayscale(100%)',
        cursor: 'not-allowed',
      }
      : {};

    return (
      <UnstyledButtonBeta
        disabled={disabled}
        isFullWidth={isFullWidth}
        style={{
          ...(style.width ? { width: style.width } : {}),
          border: '1px solid #cecece',
          // borderRadius: radiusPlusOne,
          maxHeight: '34px',
          boxSizing: 'border-box',
          ...disabledStyle,
        }}
        // onEsc={() => this.clickHandler(null)}
        onClick={(e, ...r) => {
          // if (e && e.stopPropagation) {
          //   e.stopPropagation();
          // }
          this.toggleVisibility(e, ...r);
        }}
      >
        <div style={{ position: 'relative', width: '100%' }}>
          <TriggererWrapper>
            {mainContent}
            <StatusIcon success={success} error={error} style={{ top: '0', right: '48px' }} />
          </TriggererWrapper>
          <div style={styles.trigerrerIcon}>
            <Button
              inert
              type="primary"
              style={{
                borderBottomLeftRadius: 0,
                borderTopLeftRadius: 0,
                minHeight: '34px',
                ...disabledStyle,
                pointerEvents: 'none',
              }}
              icon={<Arrowdown />}
            />
          </div>
        </div>
      </UnstyledButtonBeta>
    );
  }

  getOptionsItem() {
    const {
      children,
      isOpen: isOpenProps,
    } = this.props;

    const { isOpen: isOpenState, selectedIndex } = this.state;

    const isOpen = this.isOpenControlled ? isOpenProps : isOpenState;

    return React.Children.map(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      const isTheOne = this.isControlled
        ? value === this.props.value
        : selectedIndex === `${i}`
      ;

      const isTheOneStyles = isTheOne
        ? {
            fontWeight: '900', // eslint-disable-line indent
          // opacity: 0.7, // eslint-disable-line indent
          // background: '#fafafa', // eslint-disable-line indent
          // color: 'grey', // eslint-disable-line indent
          } // eslint-disable-line indent
        : {};

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
                ...isTheOneStyles,
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
              ...isTheOneStyles,
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

  handleKeyboardEvents(e) {
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
        }, this.focusTrigger);
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
        e.stopPropagation(); // if a drawer is open, do not let propagate
        // e.stopImmediatePropagation(); // if a drawer is open, do not let propagate
        // e.preventDefault();
        if (e && e.nativeEvent) {
          if (e.nativeEvent.stopImmediatePropagation) {
            e.nativeEvent.stopImmediatePropagation();
          }
          if (e.nativeEvent.stopPropagation) {
            e.nativeEvent.stopPropagation();
          }
        }
        this.setState({
          isOpen: false,
        }, this.focusTrigger);
      }
    } else if (e.key === 'ArrowDown' || e.keyCode === 40) {
      if (!this.isOpenControlled) {
        e.preventDefault();
        e.stopPropagation();
      }

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
        } // else if (this.itemRef) {
        // go back to first option element
        // const firstOption = this.itemRef.firstChild;
        // if (firstOption && firstOption.focus) {
        //   firstOption.focus();
        // }
        // }
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
          // go back to last option element NO!
          // const lastOption = document.activeElement.parentNode.lastChild;
          // if (lastOption && lastOption.focus) {
          //   lastOption.focus();
          // }
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
        const r = setTimeout(() => {
          // abort if focus has already passed to something outside the select,
          // like a second input in a form
          if (
            (this.selectWrapperRef && this.selectWrapperRef.contains(document.activeElement))
            || (this.selectWrapperRef && document.activeElement === document.body)
          ) {
            // make sure dom node still mounted
            if (focusTarget && focusTarget.focus) {
              focusTarget.focus();
            }
          }
          clearTimeout(r);
        }, 10);
      }
    }
  }

  focusContent() {
    const { selectedIndex } = this.state;

    const hasSelectedValue = (selectedIndex && selectedIndex >= 0);

    const theIndex = this.isControlled
      ? this.state.options.indexOf(this.props.value)
      : selectedIndex;

    const getTarget = hasSelectedValue
      ? () => {
        const targetNode = (
          this.selectWrapperRef &&
          this.selectWrapperRef.querySelector(`[data-index="${theIndex}"]`)
        );
        return targetNode;
      }
      : () => (
        this.childrenWrapperRef
        && this.childrenWrapperRef.firstChild
        && this.childrenWrapperRef.firstChild.firstChild
      );

    const targetMaybe = getTarget();
    if (targetMaybe && targetMaybe.focus) {
      const r = setTimeout(() => {
        // abort if focus has already passed to something outside the select,
        // like a second input in a form
        const focusIsStillWithinSelect = (
          this.selectWrapperRef
          && this.selectWrapperRef.contains(document.activeElement)
        );

        if (focusIsStillWithinSelect) {
          const targetMaybe = getTarget(); // eslint-disable-line no-shadow
          if (targetMaybe && targetMaybe.focus) {
            targetMaybe.focus();
          }
        }
        clearTimeout(r);
      }, 10);
    }
  }

  storeTriggerWrapperRef(node) {
    this.triggerWrapperRef = node;
  }
  storeChildrenWrapperRef(node) {
    this.childrenWrapperRef = node;
  }
  storeSelectWrapperRef(node) {
    this.selectWrapperRef = node;
  }

  render() {
    const { isOpen: isOpenState } = this.state;
    const {
      isFullWidth,
      error,
      style,
      // mainScrollingElementSelector,
      // inertTrigger,
      isOpen: isOpenProp,
      className,
    } = this.props;

    const isOpen = this.isOpenControlled ? isOpenProp : isOpenState;

    const optionsItems = this.getOptionsItem();

    const trigerer = this.getTrigerrerLabel();

    // if (isOpen) {
    //   window.addEventListener('keydown', this.handleKeyboardEvents, { capture: true });
    // } else {
    //   window.removeEventListener('keydown', this.handleKeyboardEvents, { capture: true });
    // }

    const keyboardKeyDownHandler = isOpen
      ? this.handleKeyboardEvents
      : null;


    return (
      <div
        onKeyDown={keyboardKeyDownHandler}
        style={{
          style,
          ...(isFullWidth ? { width: '100%' } : {}),
        }}
        ref={this.storeSelectWrapperRef}
      >
        <DropDown2
          isFullWidth={isFullWidth}
          fullWidthContent
          isOpen={isOpen}
          onClickOutside={this.handleDropDownChange}
          trigger={trigerer}
          onTriggerWrapperRef={this.storeTriggerWrapperRef}
          onChildrenWrapperRef={this.storeChildrenWrapperRef}
          className={className}
        >
          <div
            style={{
              maxHeight: '320px',
              overflowY: 'auto',
              width: '100%',
              // minWidth: '180px',
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
          }}
        /> */}
        <ErrorWrapperUI>{error}</ErrorWrapperUI>
      </div>
    );
  }
}

Select.defaultProps = {
  style: {},
  onChange: () => {},
  children: [],
  disabled: false,
};


export default Select;
