import React, { PureComponent } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import Lookup from '../internal/Lookup';
import { Arrowdown } from '../Icons';
import { Button } from '../Button';
import Option from './SelectInputOptions';
import StatusIcon from './utils/StatusIcon';
import ErrorWrapperUI from './utils/ErrorWrapperUI';

function isElement(element) {
  return React.isValidElement(element);
}

function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

const TriggererWrapperWithEllispsisChildren = styled.div`
  min-height: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  * {
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #222222 !important;
  }
`;

// TODO show default value if any
const styles = {
  trigerrer: {
    minWidth: '180px',
    width: '100%',
    minHeight: '30px',
    border: '1px solid #cecece',
    display: 'block',
    borderRadius: '3px',
    overflow: 'hidden',
    position: 'relative',
  },
  trigerrerIcon: {
    position: 'absolute',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    maxHeight: '30px',
    height: '30px',
    boxSizing: 'border-box',
  },
};

class SelectInput extends PureComponent {
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
    this.handleLookupClickOutisde = this.handleLookupClickOutisde.bind(this);
    this.preventScrollingOnSpace = this.preventScrollingOnSpace.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.storeItemsRef = this.storeItemsRef.bind(this);
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
      prevProps.children.length !== this.props.children.length ||
      prevProps.children !== this.props.children
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
              height: '30px',
            }}
          >
            {
              React.cloneElement(optionsNode[selectedIndex], {
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
      <span
        style={styles.trigerrer}
        onEsc={() => this.clickHandler(null)}
        // onClick={this.clickHandler}
      >
        <div>
          {mainContent}
          <StatusIcon success={success} error={error} style={{ top: '0', right: '48px' }} />
        </div>
        <div style={styles.trigerrerIcon}>
          <Button
            inert
            type="primary"
            style={{
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0,
              minHeight: '30px',
            }}
            icon={<Arrowdown />}
          />
        </div>
      </span>
    );
  }

  getOptionsItem() {
    const {
      children,
      isOpen: isOpenProps,
    } = this.props;

    const { isOpen: isOpenState } = this.state;

    const isOpen = this.isOpenControlled ? isOpenProps : isOpenState;

    return React.Children.map(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      const isTheOne = this.state.selectedIndex === i;

      if (React.isValidElement(child)) {
        if (!isDOMTypeElement(child)) {
          return (
            <Option
              onClick={e => this.clickHandler(e)}
              onEsc={() => this.clickHandler(null)}
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
            onClick={e => this.clickHandler(e)}
            onEsc={() => this.clickHandler(null)}
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

  storeOptions(children) {
    this.setState({
      options: this.mapChildrenForStorage(children).options,
      optionsNode: this.mapChildrenForStorage(children).optionsNode,
    });
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
          });
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
          });
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
        });
        this.forceUpdate();
      }
    }
  }

  handleDropDownChange(isOpen) {
    if (!this.isOpenControlled) {
      if (this.state.isOpen !== isOpen) {
        this.setState({ isOpen });
      }
    }
    if (this.props.onIsOpenChange) {
      if (this.props.isOpen !== isOpen) {
        this.props.onIsOpenChange(isOpen);
      }
    }
  }

  handleLookupClickOutisde(isOpen) {
    if (!this.isOpenControlled) {
      if (this.state.isOpen !== isOpen) {
        this.setState({ isOpen });
      }
    }
    if (this.props.onIsOpenChange) {
      if (this.props.isOpen !== isOpen) {
        this.props.onIsOpenChange(isOpen);
      }
    }
  }

  storeItemsRef(itemsNode) {
    this.itemRef = itemsNode;
  }

  render() {
    const { isOpen: isOpenState } = this.state;
    const {
      isFullWidth,
      error,
      style,
      mainScrollingElementSelector,
      inertTrigger,
      isOpen: isOpenProp,
    } = this.props;

    const isOpen = this.isOpenControlled ? isOpenProp : isOpenState;

    const optionsItems = this.getOptionsItem();

    const trigerer = this.getTrigerrerLabel();

    return (
      <div style={style}>
        <Lookup
          inertMain={inertTrigger}
          mainScrollingElementSelector={mainScrollingElementSelector}
          onIsOpenChange={this.handleDropDownChange}
          onClickOutside={this.handleLookupClickOutisde}
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
          triggerWrapperStyle={{
            borderRadius: '3px',
          }}
        />
        <ErrorWrapperUI>{error}</ErrorWrapperUI>
      </div>
    );
  }
}

SelectInput.defaultProps = {
  style: {},
};


export default SelectInput;
