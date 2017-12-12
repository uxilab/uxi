import React, { PureComponent } from 'react';
import { DropDown } from '../Menu';
import { Arrowdown } from '../Icons';
import { Button } from '../Button';
import Option from './SelectInputOptions';

// TODO show default value if any
const styles = {
  trigerrer: {
    minWidth: '180px',
    minHeight: '26px',
    maxWidth: '180px',
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
    padding: '6px 8px',
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
      if (defaultValue) {
        const { options } = this.state;
        // not controlled, use internal state
        const foundIndex = options.findIndex((o) => {
          console.log('o', o);
          console.log('defaultValue', defaultValue);
          return o === defaultValue;
        });
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

    if (selectedIndex && optionsNode[selectedIndex]) {
      return (
        <span style={styles.trigerrer}>
          <Option>
            {
              React.cloneElement(optionsNode[selectedIndex], {
                style: {
                  ...optionsNode[selectedIndex].props.style,
                  whiteSpace: 'nowrap',
                },
              })
            }
          </Option>
          <div style={styles.trigerrerIcon}>
            <Button inert type="primary" style={styles.button} icon={<Arrowdown size="14" color="white" />} />
          </div>
        </span>
      );
    }
    return (
      <span style={styles.trigerrer}>
        <div>&nbsp;</div>
        <div style={styles.trigerrerIcon}>
          <Button inert type="primary" style={styles.button} icon={<Arrowdown size="14" color="white" />} />
        </div>
      </span>
    );
  }

  storeOptions(children) {
    const options = [];
    const optionsNode = [];
    React.Children.forEach(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
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
    const {
      props: {
        children,
      },
      state: { isOpen },
    } = this;

    const optionsItems = React.Children.map(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      return (
        <Option>
          {React.cloneElement(child, {
            value,
            'data-index': i,
            onClick: e => this.clickHandler(e),
          })
          }
        </Option>
      );
    });

    const trigerer = this.getTrigerrerLabel();


    return (
      <DropDown
        isOpen={isOpen}
        main={trigerer}
        items={optionsItems}
      />
    );
  }
}

export default SelectInput;
