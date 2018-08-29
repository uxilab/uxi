import React from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';
import { TextField } from '../Input';
import { VerticalMenu, MenuItem } from '../Menu';
import { Flex } from '../Layout';
import ThemeComponent from '../Base/ThemeComponent';
import { getMatchesResult, getFilteredSetWithScore } from './utils';

const Highlighted = styled.span`
  font-weight: 600;
  background: #fff9d6;
`;

const AutoCompleteStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px',
  popover: {
    position: 'absolute',
    top: '30px',
    maxHeight: '60vh',
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

const MatchesPart = styled.span`
  white-space: nowrap;
`;

const getHighlightedNameComplex = (item, valueForInputParam, postFix/* , filterOn */) => {
  // const nameToRenderParam = item[filterOn];
  const matchesNode = (item.matchesResults || []).map(({ matches, string }) => (
    matches
      ? (<MatchesPart data-matches >
        <Highlighted dangerouslySetInnerHTML={{ __html: `${string.replace(/\s/, '&nbsp;')}` }} />
      </MatchesPart>)
      : (<MatchesPart
        data-not-matches
        dangerouslySetInnerHTML={{ __html: `${string.replace(/\s/, '&nbsp;')}` }}
      />)
  ));

  return (
    <Flex style={{ justifyContent: 'flex-start', width: '100%' }}>
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{matchesNode}</div>
      <span data-postFix style={{ margin: '0 6px', marginLeft: 'auto' }}>{postFix}</span>
    </Flex>
  );
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

    this.onQuerychangeDebounced = debounce(this.onQuerychange, 100);
    this.onChangeWrap = this.onChangeWrap.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.clickHandlerForDom.bind(this), true);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.items.length !== nextProps.items.length) {
      this.setState({
        originalItems: this.props.items.map((x, i) => ({
          ...x,
          originalIndex: i,
        })) || [],
      });
    }

    if (this.props.defaultValue !== nextProps.defaultValue) {
      this.setState({
        valueForInput: nextProps.defaultValue,
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickHandlerForDom);
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

  asyncUpdateFilteredSet(consumerNotifierCallback) { // eslint-disable-line class-methods-use-this
    const { items, defaultValue, filterOn } = this.props;
    const { valueForInput } = this.state;

    if (valueForInput && valueForInput.length >= 2) {
      new Promise((resolve/* , reject */) => {
        const filterFnStrict = item => (
          item[filterOn].toLowerCase().replace(/\s/g, '')
            .indexOf((valueForInput || defaultValue || '').toLowerCase().replace(/\s/g, '')) > -1
        );

        const matchMapper = item => ({
          ...item,
          matchesResults: getMatchesResult(item[filterOn], (valueForInput || defaultValue || '')),
        });

        const filterFnPermissive = (mappedMatch) => {
          const isMatch = mappedMatch.matchesResults.some(x => x.matches);
          return isMatch;
        };

        const mappedUNfilteredSet = (items && items.map(matchMapper)) || [];

        const filteredSet = (mappedUNfilteredSet.filter(filterFnPermissive || filterFnStrict));

        const filteredSetWithScore = getFilteredSetWithScore(filteredSet);

        const finalSortedResult = filteredSetWithScore.sort((a, b) => {
          if (a.scrore > b.scrore) { return -1; }
          if (a.scrore < b.scrore) { return 1; }
          return 0;
        });
        resolve(finalSortedResult);
      }).then(filteredSet =>
        this.setState({
          filteredSet,
        }, consumerNotifierCallback),
      );
    }
  }

  render() {
    const { /* items, */ placeholder, /* itemComponent, defaultValue, */ filterOn } = this.props;
    const { index, escape, valueForInput, filteredSet } = this.state;

    const shadowStyle = {
      ...(filteredSet.length && filteredSet.length > 0
        ? { boxShadow: AutoCompleteStyle.boxShadow }
        : {}
      ),
    };

    const autoComplete = !escape ? (
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
          .slice(0, 20)
          .map((item, currentIndex) => {
            const { postFix } = item;

            // const nameToRender = item[filterOn] || item.name;
            const nameToRenderWithHightlight =
              getHighlightedNameComplex(item, valueForInput, postFix, filterOn);

            // const selectedClass = '';
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
            // onMouseOver={this.handleMouseEnterListItem.bind(this)}
            // onMouseOut={this.handleMouseLeaveListItem.bind(this)}
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
        style={{ position: 'relative' }}
        ref={(node) => { this.node = node; }}
        onKeyUp={this.updateSearchValue.bind(this)}
      >
        <TextField
          style={{ zIndex: 3 }}
          placeholder={placeholder}
          ref={(ref) => { this.currentInput = ref; }}
          onChange={this.onChangeWrap}
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
