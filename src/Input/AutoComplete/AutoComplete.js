import React from 'react';
import PropTypes from 'prop-types';
// import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import { TextField } from '../../Input';
import { VerticalMenu, MenuItem } from '../../Menu';
import ThemeComponent from '../../Base/ThemeComponent';
import {
  getHighlightedNameComplex,
} from './utils';
import worker from './autocomplete.worker';
import WebWorkerWithData from './WebWorkerWithData';

const AutoCompleteStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px',
  popover: {
    position: 'absolute',
    top: '30px',
    maxHeight: '30vh',
    overflowY: 'scroll',
    border: '1px solid #ccc',
    left: 0,
    right: 0,
    margin: 0,
    padding: 0,
    zIndex: 2,
    background: 'white',
  },
};

// const recomposeStringValueReducer = (accu = '', { string }) => {
//   if (!accu || typeof accu !== 'string') { accu = string; }
//   return (accu += string);
// };

/* eslint-disable react/jsx-no-bind */
class AutoComplete extends ThemeComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: -1,
      value: props.defaultValue,
      originalItems: this.props.items.map((x, i) => ({
        ...x,
        originalIndex: i,
      })) || [],
      filteredSet: [],
    };

    // this.onQuerychangeDebounced = debounce(this.onQuerychange, 100);
    // this.onChangeWrap = this.onChangeWrap.bind(this);
  }

  componentDidMount() {
    document
      .addEventListener('click', this.clickHandlerForDom.bind(this), true);

    this.worker = new WebWorkerWithData(worker, this.state.originalItems);
    this.worker.addEventListener('message', this.handleMessage);
  }

  handleMessage = (event) => {
    const { data } = event;
    // console.log('postMessage received:', data);
    // const parsed = JSON.parse(data);
    const parsed = data;
    // console.log('postMessage received parse:', parsed);
    // const sortedList = event.data;
    if (this && this.setState) {
      this.setState({
        filteredSet: parsed,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.items.length !== nextProps.items.length
      && !isEqual(this.props.items, nextProps.items)
    ) {
      this.setState({
        originalItems: this.props.items.map((x, i) => ({
          ...x,
          originalIndex: i,
        })) || [],
      });
    }

    // if (this.props.defaultValue !== nextProps.defaultValue) {
    //   this.setState({
    //     valueForInput: nextProps.defaultValue,
    //   });
    // }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickHandlerForDom);
    if (this.worker) {
      this.worker.terminate();
    }
  }

  onItemClick(index) {
    const { filteredSet } = this.state;

    const originalValue = filteredSet[index];

    this.onEnter(
      originalValue.matchesResults
        // eslint-disable-next-line no-return-assign
        .reduce((accu = '', { string }) => (accu += string), ''), // eslint-disable-line no-param-reassign
      originalValue,
    );
    this.setState({ index: -1, escape: true });
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

    if (onchange) {
      onchange(value);
    }

    this.asyncUpdateFilteredSet(/* consumerNotifierCallback */);
  }

  onChange = (e) => {
    const { defaultValue, filterOn, strict } = this.props;
    const { value } = e.target;

    this.setState({ valueForInput: value });

    // this.onQuerychangeDebounced(value);


    if (value && value.length >= 2) {
      console.log('posting message', value);
      this.worker.postMessage({
        strict,
        filterOn,
        valueForInput: value,
        defaultValue,
      });
    }
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

  onEnter(value, originalValue) {
    // const { filteredSet, index } = this.state;
    const { onChange } = this.props;

    // const originalValue = filteredSet[index];

    this.setState({
      valueForInput: value,
    });

    if (onChange) {
      onChange({
        value,
        originalValue,
      });
    }
  }

  updateSearchValue(e) {
    // const { items } = this.props;
    const { index, valueForInput, filteredSet } = this.state;

    if (e.key === 'Enter') {
      if (index < 0) {
        this.onEnter(valueForInput || '', true);
      } else {
        this.onEnter(
          filteredSet[index].matchesResults
            // eslint-disable-next-line no-return-assign
            .reduce((accu = '', { string }) => (accu += string), ''), // eslint-disable-line no-param-reassign
          filteredSet[index],
        );
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

  // eslint-disable-next-line class-methods-use-this
  asyncUpdateFilteredSet(/* consumerNotifierCallback */) {
    const { defaultValue, filterOn, strict } = this.props;
    const { valueForInput } = this.state;


    if (valueForInput && valueForInput.length >= 2) {
      console.log('posting message');
      this.worker.postMessage({
        strict,
        filterOn,
        valueForInput,
        defaultValue,
      });
    }
  }

  render() {
    const {
      placeholder,
      filterOn,
      resultLimit,
      isFullWidth,
    } = this.props;
    const { index, escape, valueForInput, filteredSet } = this.state;

    const shadowStyle = {
      ...(filteredSet.length && filteredSet.length > 0
        ? { boxShadow: AutoCompleteStyle.boxShadow }
        : {}
      ),
      ...(filteredSet.length && filteredSet.length > 0
        ? { boxShadow: AutoCompleteStyle.boxShadow }
        : {}
      ),
    };

    const autoComplete = (!escape && valueForInput && filteredSet.length) ? (
      <VerticalMenu
        style={{ ...AutoCompleteStyle.popover, ...shadowStyle }}
        ref={(ref) => { this.autoComplete = ref; }}
        onMouseOver={this.handleMouseEnterList.bind(this)}
        onMouseOut={this.handleMouseLeaveList.bind(this)}
      >
        {filteredSet
          // more than a hundreds search results is not
          // actually helpfull anyway, neither is it reasonnable to ask that to the dom
          // let's cut it at 10
          .slice(0, resultLimit)
          .map((item, currentIndex) => {
            const { postFix } = item;
            const nameToRenderWithHightlight =
              getHighlightedNameComplex(item, valueForInput, postFix, filterOn);

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
        {(filteredSet.length > 20
          ? (<MenuItem
            key={'not-currentIndex'}
            onClick={() => { }}
            style={{
              textAlign: 'center', opacity: 0.8,
            }}
          >
            {'Some results were omitted, try a more specific query'}
          </MenuItem>)
          : null
        )}
        {(valueForInput && filteredSet.length === 0
          ? (<MenuItem
            key={'not-currentIndex-no-results'}
            onClick={() => { }}
            style={{
              textAlign: 'center', opacity: 0.8,
            }}
          >
            {'no match found'}
          </MenuItem>)
          : null
        )}
      </VerticalMenu>) : null;

    return (
      <div
        style={{ position: 'relative', ...(isFullWidth ? { width: '100%' } : {}) }}
        ref={(node) => { this.node = node; }}
        onKeyUp={this.updateSearchValue.bind(this)}
      >
        <TextField
          isFullWidth={isFullWidth}
          style={{ zIndex: 3 }}
          placeholder={placeholder}
          ref={(ref) => { this.currentInput = ref; }}
          onChange={this.onChange}
          // value={this.state.valueForInput || ''}
          type="text"
        />
        {autoComplete}
      </div>
    );
  }
}

AutoComplete.propTypes = {
  /**
   * strict filtering, set to true to only show exact matches,
   * default behaviour is to allow loose filtering
   */
  strict: PropTypes.bool,
  /**
   * the property to filter on (does not support property path 'user.identity.name') to filter
   *
   */
  filterOn: PropTypes.string,
};

AutoComplete.defaultProps = {
  items: [],
  placeholder: 'Type to search...',
  strict: false,
  resultLimit: 20,
  // filterOn: 'displayName',
};


export default AutoComplete;
