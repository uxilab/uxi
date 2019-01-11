import React from 'react';
import Select from './Select'; // eslint-disable-line import/no-named-as-default
import UnstyledButtonBeta from '../../Button/UnstyledButton1';
// import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
// import DropDown from '../internal/DropDown';
// import DropDown2 from '../internal/DropDownWithClickOutside';
import { Arrowdown } from '../../Icons';
import { Button } from '../../Button';
// import Option from './SelectInputOptions';
// import StatusIcon from '../utils/StatusIcon';
import { TextField } from '../../Input';
// import ErrorWrapperUI from './utils/ErrorWrapperUI';
import { styles } from './Select.styles';
import TriggererWrapperWithEllispsisChildren from './TriggererWrapperWithEllispsisChildren';
import TriggerreWrapper from './TriggerreWrapper';
import {
// isElement,
// isDOMTypeElement,
} from './select-utils';


class SelectWithFiltering extends Select {
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
        // onEsc={() => this.clickHandler(null)}
        onClick={(e, ...r) => {
          // if (e && e.stopPropagation) {
          //   e.stopPropagation();
          // }
          this.toggleVisibility(e, ...r);
        }}
      >
        <TriggerreWrapper >
          <div>
            <TextField
              placeholder="filter"

            />
            {
              /* {mainContent}
              <StatusIcon success={success} error={error} style={{ top: '0', right: '48px' }} />
              */
            }
          </div>
          <div style={styles.trigerrerIcon}>
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
        </TriggerreWrapper>
      </UnstyledButtonBeta>
    );
  }

  preventScrollingOnSpace(e) {
    console.log('e.key', e.key);
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
}

SelectWithFiltering.defaultProps = {
  style: {},
};


export default SelectWithFiltering;
