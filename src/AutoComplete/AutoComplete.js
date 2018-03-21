import React from 'react';
import debounce from 'lodash/debounce';
import { TextField } from '../Input';
import { VerticalMenu, MenuItem } from '../Menu';
import styled from 'styled-components';
import ThemeComponent from '../Base/ThemeComponent';

const Highlighted = styled.span`
  font-weight: 600;
  background: #fff9d6;
`;

const AutoCompleteStyle = {
  popover: {
    position: 'absolute',
    top: '30px',
    maxHeight: '60vh',
    overflowY: 'scroll',
    border: '1px solid #ccc',
    left: 0,
    right: 0,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px',
    margin: 0,
    padding: 0,
    zIndex: 2,
    background: 'white',
  },
};


const getHighlightedName = (nameToRender, valueForInput) => {
  if (!nameToRender || !valueForInput) {
    return nameToRender;
  }

  const startAt = nameToRender.toLowerCase().indexOf(valueForInput.toLowerCase());
  const length = valueForInput.length;
  const endAt = startAt + length;

  const preMatch = nameToRender.slice(0, startAt);
  const theMatch = nameToRender.slice(startAt, endAt);
  const postMatched = nameToRender.slice(endAt, nameToRender.length);

  return (
    <div>
      {preMatch}
      <Highlighted>{theMatch }</Highlighted>
      {postMatched }
    </div>
  );
};

/* eslint-disable react/jsx-no-bind */
class AutoComplete extends ThemeComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      value: props.defaultValue,
      // filteredSet: this.props.items,
      filteredSet: [],
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
    // const { items } = this.props;
    const { filteredSet } = this.state;

    this.setState({ index: -1, escape: true });
    this.onEnter(filteredSet[index].name);
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


    const consumerNotifierCallback = () => (onchange && onchange(value));

    this.asyncUpdateFilteredSet(consumerNotifierCallback);
  }

  onChangeWrap(e) {
    const value = e.target.value;
    this.setState({ valueForInput: value });

    this.onQuerychangeDebounced(value);
  }

  handleMouseEnterList() {
    this.setState({ index: -1 });
  }
  handleMouseLeaveList() {
    this.setState({ index: -1 });
  }
  handleMouseEnterListItem() {
    this.setState({ index: -1 });
  }
  handleMouseLeaveListItem() {
    this.setState({ index: -1 });
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
    const { index, valueForInput, filteredSet } = this.state;

    if (e.key === 'Enter') {
      if (index < 0) {
        this.onEnter(valueForInput || '*', true);
      } else {
        this.onEnter(filteredSet[index].name, true);
      }
      this.setState({ index: -1, escape: true });
    } else if (e.key === 'Escape') {
      this.setState({ index: -1, escape: true });
    } else if (e.key === 'ArrowDown') {
      if (this.state.index === filteredSet.length) {
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

  asyncUpdateFilteredSet(consumerNotifierCallback) { // eslint-disable-line class-methods-use-this
    const { items, defaultValue, filterOn } = this.props;
    const { valueForInput } = this.state;

    const filterCallBack = () => {
      const filterFn = item => (
        item[filterOn].toLowerCase().replace(/\s/g, '')
          .indexOf((valueForInput || defaultValue || '').toLowerCase().replace(/\s/g, '')) > -1
      );

      const filteredSet = (items && items.filter(filterFn)) || [];

      this.setState({
        filteredSet,
      }, consumerNotifierCallback);
    };

    setTimeout(filterCallBack, 1);
  }

  render() {
    const { items, placeholder, itemComponent, defaultValue, filterOn } = this.props;
    const { index, escape, valueForInput, filteredSet } = this.state;

    const autoComplete = !escape ? (
      <VerticalMenu
        style={AutoCompleteStyle.popover}
        ref={(ref) => { this.autoComplete = ref; }}
        onMouseOver={this.handleMouseEnterList.bind(this)}
        onMouseOut={this.handleMouseLeaveList.bind(this)}
      >
        {filteredSet
          .map((item, currentIndex) => {
            const nameToRender = item[filterOn] || item.name;
            const nameToRenderWithHightlight = getHighlightedName(nameToRender, valueForInput);

            const selectedClass = '';
            let liStyle = {};
            if (index === (currentIndex)) {
              liStyle = Object.assign({}, {
                color: this.context.uxiTheme.palette.accent.main,
                background: 'rgb(233,245,244)',
              });
            } else {
              liStyle = {};
            }

            return (
              <MenuItem
                key={currentIndex}
                onClick={this.onItemClick.bind(this, currentIndex)}
                style={liStyle}
                onMouseOver={this.handleMouseEnterListItem.bind(this)}
                onMouseOut={this.handleMouseLeaveListItem.bind(this)}
              >
                {nameToRenderWithHightlight}
              </MenuItem>
            );
          })
        }
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

AutoComplete.defaultProps = {
  items: [],
  placeholder: 'Type to search...',
};
export default AutoComplete;
