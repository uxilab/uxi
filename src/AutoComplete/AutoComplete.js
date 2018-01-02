import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import { TextField } from '../Input';
import { VerticalMenu, MenuItem } from '../Menu';
import ThemeComponent from '../Base/ThemeComponent';

const AutoCompleteStyle = {
  popover: {
    position: 'absolute',
    top: '30px',
    border: '1px solid #ccc',
    left: 0,
    right: 0,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px',
    margin: 0,
    padding: 0,
    zIndex: 2,
  },
};

class AutoComplete extends ThemeComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      value: props.defaultValue,
    };
    this.onQuerychangeDebounced = debounce(this.onQuerychange, 300);
  }

  componentDidMount() {
    document.addEventListener('click', this.clickHandlerForDom.bind(this), true);
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.defaultValue !== nextProp.defaultValue) {
      this.setState({
        valueForInput: nextProp.defaultValue,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickHandlerForDom);
  }

  onButtonClick() {
    const currentInput = this.currentInput;
    const value = currentInput.value || '*';

    this.setState({ index: -1, escape: true });

    this.onEnter(value);
  }

  onItemClick(index) {
    const { items } = this.props;

    this.setState({ index: -1, escape: true });
    this.onEnter(items[index].name);
  }

  clickHandlerForDom(e) {
    const domNode = this.node;
    if ((!domNode || !domNode.contains(e.target))) {
      this.setState({ index: -1, escape: true });
    }
  }

  onQuerychange(value) {
    const { onchange } = this.props;

    this.setState({
      valueForInput: value,
    });

    onchange && onchange(value);
  }

  onChangeWrap(e) {
    const value = e.target.value;
    this.setState({ valueForInput: value });

    this.onQuerychangeDebounced(value);
  }

  onEnter(value) {
    const { onChange } = this.props;

    this.setState({
      valueForInput: value,
    });

    onChange && onChange(value);
  }

  updateSearchValue(e) {
    const { items } = this.props;
    const { index, valueForInput } = this.state;

    if (e.key === 'Enter') {
      if (index < 0) {
        this.onEnter(valueForInput || '*', true);
      } else {
        this.onEnter(items[index].name, true);
      }
      this.setState({ index: -1, escape: true });
    } else if (e.key === 'Escape') {
      this.setState({ index: -1, escape: true });
    } else if (e.key === 'ArrowDown') {
      if (this.state.index === items.length) {
        this.setState({ index: 0, escape: false });
      } else {
        this.setState({ index: (this.state.index + 1), escape: false });
      }
    } else if (e.key === 'ArrowUp') {
      if (this.state.index >= 0) {
        this.setState({ index: (this.state.index - 1), escape: false });
      }
    } else {
      this.setState({ index: -1, escape: false });
    }
  }

  render() {
    const { items, placeholder, itemComponent } = this.props;
    const { index, escape } = this.state;
    const autoComplete = !escape ? (
      <VerticalMenu style={AutoCompleteStyle.popover} ref={(ref) => { this.autoComplete = ref; }}>
        { items && items.map((item, currentIndex) => {
          const nameToRender = item.name;
          const selectedClass = '';
          let liStyle = {};
          if (index === (currentIndex)) {
            liStyle = Object.assign({}, {
              color: this.context.uxiTheme.palette.accent.main,
              background: '#eee',
            });
          }

          return (
            <MenuItem
              key={currentIndex}
              onClick={this.onItemClick.bind(this, currentIndex)}
              style={liStyle}
            >
              {nameToRender}
            </MenuItem>
          );
        })}
      </VerticalMenu>) : null;

    return (
      <div
        style={{ position: 'relative' }}
        ref={(node) => { this.node = node; }}
        onKeyUp={this.updateSearchValue.bind(this)}
      >
        <TextField
          style={{ zIndex: 3 }}
          placeholder={placeholder}
          ref={(ref) => { this.currentInput = ref; }}
          onChange={this.onChangeWrap.bind(this)}
          value={this.state.valueForInput || ''}
          type="text"
        />
        {autoComplete}
      </div>
    );
  }
}

export default AutoComplete;
