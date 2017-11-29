import React, { PureComponent } from 'react';

class SelectInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      // TODO: handle multi select
      selectedIndex: null,
    };
  }

  componentDidMount() {
    const { children } = this.props;
    this.storeOptions(children);
  }

  // cheating here to get the updated state
  // doing one thing at a time
  // first change the selectedIndex, then call onChange on the next render
  shouldComponentUpdate(nextProps, nextState) {
    const { selectedIndex } = this.state;
    const { onChange } = this.props;
    if (selectedIndex !== nextState.selectedIndex) {
      if (onChange) {
        onChange(nextState);
      }
    }
    return true;
  }

  storeOptions(children) {
    const options = [];
    React.Children.forEach(children, (child, i) => {
      const value = child.props.value ? child.props.value : i;
      options[i] = value; // garanties ordering
    });
    this.setState({
      options,
    });
  }

  clickHandler(e) {
    console.log(e.currentTarget);
    const selectedIndex = e.currentTarget.dataset.index;
    this.setState({
      selectedIndex,
    });
  }

  render() {
    const {
      props: {
        children,
        onChange,
      },
    } = this;


    return (
      <div>
        {
          React.Children.map(children, (child, i) => {
            const value = child.props.value ? child.props.value : i;
            return React.cloneElement(child, {
              value,
              'data-index': i,
              onClick: e => this.clickHandler(e),
            });
          })
        }
      </div>
    );
  }
}

export default SelectInput;
