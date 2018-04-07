import React, { PureComponent } from 'react';
import DropDown from '../internal/DropDown';
import { Arrowdown } from '../Icons';
import { Button, ButtonWithoutRipple } from '../Button';
import Option from './SelectInputOptions';

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
      options: [],
      optionsNode: [],
      // TODO: handle multi select
      selectedIndex: null,
    };
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
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { selectedIndex } = this.state;
    const { onChange } = this.props;
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
      },
    } = this;

    let mainContent = null;
    if (selectedIndex >= 0 && optionsNode[selectedIndex] !== undefined) {
      mainContent = (
        <div style={{ padding: '2px 2px 2px 6px' }} >
          {
            React.cloneElement(optionsNode[selectedIndex], {
              style: {
                ...optionsNode[selectedIndex].props.style,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              },
            })
          }
        </div>
      );
    } else {
      mainContent = <div>&nbsp;</div>;
    }

    return (
      <span style={styles.trigerrer}>
        <div>
          {mainContent}
        </div>
        <div style={styles.trigerrerIcon}>
          <Button
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

    return React.Children.map(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      const isTheOne = this.state.selectedIndex === i;
      const selectedStyles = isTheOne
        ? { backgroundColor: '#3e53c1', color: 'white' }
        : {};

      if (React.isValidElement(child)) {
        if (!isDOMTypeElement(child)) {
          return (
            <div onClick={e => this.clickHandler(e)} data-index={i} {...child.props} >
              <Option
                selected={isTheOne}
                style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis'/* , ...selectedStyles */ }}
              >
                {React.cloneElement(child, {
                  value,
                })}
              </Option>
            </div>
          );
        }

        return (
          <Option
            selected={isTheOne}
            style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis'/* , ...selectedStyles */ }}
          >
            {React.cloneElement(child, {
              value,
              'data-index': i,
              onClick: e => this.clickHandler(e),
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
    const selectedIndex = e.currentTarget.dataset.index;
    this.setState({
      selectedIndex,
      isOpen: false,
    });
    this.forceUpdate();
  }

  render() {
    const { isOpen } = this.state;
    const { isFullWidth } = this.props;

    const optionsItems = this.getOptionsItem();

    const trigerer = this.getTrigerrerLabel();

    return (
      <DropDown
        isFullWidth={isFullWidth}
        isOpen={isOpen}
        main={trigerer}
        items={optionsItems}
        itemsStyle={{
          maxHeight: '200px',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      />
    );
  }
}

export default SelectInput;
