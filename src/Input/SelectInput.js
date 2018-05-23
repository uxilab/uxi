import React, { PureComponent } from 'react';
import DropDown from '../internal/DropDown';
import { Arrowdown } from '../Icons';
import { Button, ButtonWithoutRipple } from '../Button';
import Option from './SelectInputOptions';
import StatusIcon from './utils/StatusIcon';
import ErrorWrapperUI from './utils/ErrorWrapperUI';

function isElement(element) {
  return React.isValidElement(element);
}

function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

// TODO show default value if any
const styles = {
  trigerrer: {
    minWidth: '180px',
    width: '100%',
    minHeight: '30px',
    border: '1px solid #cecece',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  trigerrerIcon: {
    position: 'absolute',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
  },
  button: {
    // border: 'none',
    // borderColor: 'transparent',
    borderRadius: '0 3px 3px 0',
    padding: '0 8px',
    minHeight: '100%',
    minHeight: 'calc(100% - 2px)',
  },
};

class SelectInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      idOpen: false,
      options: [],
      optionsNode: [],
      // TODO: handle multi select
      selectedIndex: null,
    };

    this.handleDropDownChange = this.handleDropDownChange.bind(this);
    this.preventScrollingOnSpace = this.preventScrollingOnSpace.bind(this);
  }

  componentWillMount() {
    const { children } = this.props;
    this.storeOptions(children);
  }

  componentDidMount() {
    this.isControlled = this.props.value !== undefined;
    if (!this.isControlled) {
      const { defaultValue } = this.props;
      if (defaultValue !== undefined) {
        const { options } = this.state;
        // not controlled, use internal state
        const foundIndex = options.findIndex(o => o === defaultValue);
        const selectedIndex = foundIndex > -1 ? foundIndex : null;
        this.setState({ selectedIndex });
      }
    } else {
      const { value } = this.props;
      const { options } = this.state;
      // not controlled, use internal state
      const foundIndex = options.findIndex(o => o === value);
      const selectedIndex = foundIndex > -1 ? foundIndex : null;
      this.setState({ selectedIndex });
    }
  }

  preventScrollingOnSpace(e) {
    console.log('preventScrollingOnSpace')
    console.log("e.key === ' '", e.key === ' ' )
    if (e.key === ' ') {
      e.preventDefault()
      e.stopPropagation()

      this.setState({
        isOpen: false,
      })
    } else if (e.key === 'Escape') {
      this.setState({
        isOpen: false,
      })
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      e.stopPropagation()

      const event = document.createEvent('Event');
      event.initEvent('keydown', true, true);
      event.keyCode = 76;

      // event.key = 'Tab';
      var canceled = !document.body.dispatchEvent(event);

    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      e.stopPropagation()


    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { selectedIndex, options } = this.state;
    const { onChange, value: valueProp } = this.props;

    const value = options[nextState.selectedIndex];

    const { isOpen } = nextState;
    if (isOpen) {
      console.log('addingListener')
      window.addEventListener('keydown', this.preventScrollingOnSpace)
    } else {
      console.log('removingListener')
      window.removeEventListener('keydown', this.preventScrollingOnSpace)
    }
    /*
    TODO: Make controlled selectInkput work!
    if (valueProp && valueProp !== value) {
      const newVal = options.findIndex(x => x === value)
      if (newVal > -1) {
        this.setState({
          selectedIndex: newVal,
        })
      }
    } */

    if (selectedIndex !== nextState.selectedIndex) {
      if (onChange) {
        const { options } = this.state;
        const value = options[nextState.selectedIndex];
        const fakeEvent = {
          target: { value },
          currentTarget: { value },
        };
        onChange(fakeEvent, value);
      }
    }
  }

  getTrigerrerLabel() {
    const {
      state: {
        selectedIndex,
        optionsNode,
        isOpen,
      },
      props: {
        error, success,
      },
    } = this;

    let mainContent = null;
    if (selectedIndex >= 0 && optionsNode[selectedIndex] !== undefined) {
      mainContent = (
        <div><div style={{ padding: '2px 2px 2px 6px', display: 'flex', width: '100%' }} >
          {
            React.cloneElement(optionsNode[selectedIndex], {
              style: {
                ...optionsNode[selectedIndex].props.style,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              },
            })
          }
        </div></div>
      );
    } else {
      mainContent = <div>&nbsp;</div>;
    }

    return (
      <span
        style={styles.trigerrer}
        onEsc={() => this.clickHandler(null)}
      >
        <div>
          {mainContent}
          <StatusIcon success={success} error={error} style={{ top: '8px', right: '48px' }} />
        </div>
        <div style={styles.trigerrerIcon}>
          <Button
            inert
            type="primary"
            style={{ ...styles.ButtonWithoutRipple, borderRadius: '0 3px 3px 0' }}
            icon={<Arrowdown />}
          />
        </div>
      </span>
    );
  }

  getOptionsItem() {
    const {
      children,
    } = this.props;
    const { isOpen } = this.state

    return React.Children.map(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      const isTheOne = this.state.selectedIndex === i;
      const selectedStyles = isTheOne
        ? { backgroundColor: '#3e53c1', color: 'white' }
        : {};

      if (React.isValidElement(child)) {
        if (!isDOMTypeElement(child)) {
          return (
              <Option
                onClick={e => this.clickHandler(e)}
                onEsc={() => this.clickHandler(null)}
                data-index={i}
                {...child.props}
                isOpen={isOpen}
                // tabIndex={0}
                // aria-hidden={isOpen ? false : true }
                selected={isTheOne}
                style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis'/* , ...selectedStyles */ }}
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
            // tabIndex={0}
            // aria-hidden={isOpen ? false : true }
            selected={isTheOne}
            style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis'/* , ...selectedStyles */ }}
          >
            {React.cloneElement(child, {
              value,
              // 'data-index': i,
              // onClick: e => this.clickHandler(e),
            })}
          </Option>
        );
      }
      return null;
    });
  }

  storeOptions(children) {
    const options = [];
    const optionsNode = [];
    React.Children.forEach(children, (child, i) => {
      const value = child.props.value !== undefined ? child.props.value : i;
      options[i] = value; // garanties ordering
      optionsNode[i] = React.cloneElement(child, {
        style: {
          display: 'inline-block',
          ...child.props.style,
        },
      });
    });
    this.setState({
      options,
      optionsNode,
    });
  }

  clickHandler(e) {
    console.log('in click handler in select input, e', e)
    if (!e) {
      this.setState({
        selectedIndex: this.state.selectedIndex || null,
        isOpen: false,
     })
      this.forceUpdate();
      return
    }

    if (!this.isControlled) {
      const selectedIndex = e.currentTarget.dataset.index;
      this.setState({
        selectedIndex,
        isOpen: false,
      });
      this.forceUpdate();
    }
  }

  handleDropDownChange(isOpen) {
    console.log('isOpen in selectInput', isOpen)
    this.setState({ isOpen })
  }

  render() {
    const { isOpen } = this.state;
    const { isFullWidth, error, style } = this.props;

    const optionsItems = this.getOptionsItem();

    const trigerer = this.getTrigerrerLabel();

    return (
      <div style={style}>
        <DropDown
          onIsOpenChange={this.handleDropDownChange}
          isFullWidth={isFullWidth || ('width' in style)}
          isOpen={isOpen}
          main={trigerer}
          items={optionsItems}
          itemsStyle={{
            maxHeight: '200px',
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        />
        <ErrorWrapperUI>{error}</ErrorWrapperUI>
      </div>
    );
  }
}

SelectInput.defaultProps = {
  style: {}
}


export default SelectInput;
