import React, { PureComponent } from 'react';
import { DropDown } from '../Menu';
import { Arrowdown } from '../Icons';
import Option from './SelectInputOptions';
import { palette } from '../Theme/palette';

// TODO show default value if any
const styles = {
  trigerrer: {
    minWidth: '145px',
    maxWidth: '145px',
    border: '1px solid #cecece',
    padding: '4px 8px',
    display: 'flex',
    alignItems: 'center',
  },
  trigerrerIcon: {
    position: 'absolute',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    background: palette.accent.main,
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

  componentDidMount() {
    const { children } = this.props;
    this.storeOptions(children);
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
          {optionsNode[selectedIndex]}
          <span style={styles.trigerrerIcon}>
            <Arrowdown size="14" color="white" />
          </span>
        </span>
      );
    }
    return (
      <span style={styles.trigerrer}>
        Pick something
        <span style={styles.trigerrerIcon}>
          <Arrowdown size="14" color="white" />
        </span>
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
      }); // garanties ordering
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
    });
  }

  render() {
    const {
      props: {
        children,
        // onChange,
      },
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
        main={trigerer}
        items={optionsItems}
      />
    );
  }
}

export default SelectInput;
