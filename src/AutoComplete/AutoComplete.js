import React from 'react';
import debounce from 'lodash/debounce';
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

const getHighlightedNameComplex = (item, valueForInputParam, postFix, filterOn) => {
  // console.log('item', item)
  const nameToRenderParam = item[filterOn]
  // if (!nameToRenderParam || !valueForInputParam) {
  //   console.log('!nameToRenderParam || !valueForInputParam :', !nameToRenderParam || !valueForInputParam)
  //   return nameToRenderParam;
  // }

  // const matches = getMatchesResult(nameToRenderParam, valueForInputParam)
  // console.log(matchesNode)
  const matchesNode = (item || []).map(({ matches, string }) => {
    // console.log(string)
    return (
      matches
        ? (<span data-matches ><Highlighted dangerouslySetInnerHTML={{ __html: `${string.replace(/\s/, '&nbsp;')}` }} /></span>)
        : (<span data-not-matches dangerouslySetInnerHTML={{ __html: `${string.replace(/\s/, '&nbsp;')}` }} />)
    )
  })

  return (
    <Flex style={{ justifyContent: 'flex-start', width: '100%' }}>
      {matchesNode}
      <span data-postFix style={{ marginLeft: 'auto' }}>{postFix}</span>
    </Flex>
  );

}

/*
const getHighlightedName = (nameToRenderParam, valueForInputParam, postFix) => {
  if (!nameToRenderParam || !valueForInputParam) {
    return nameToRenderParam;
  }

  if (nameToRenderParam.toLowerCase().indexOf(valueForInputParam.toLowerCase()) === -1) {
    console.log('unperfect match brecause of ignord space');
    return getHighlightedNameComplex(nameToRenderParam, valueForInputParam, postFix)
  }

  let nameToRender = nameToRenderParam;
  let valueForInput = valueForInputParam;
  // if (valueForInputParam.includes(' ')) {
  nameToRender = nameToRenderParam.replace(/\s/g, '&nbsp;');
  valueForInput = valueForInputParam.replace(/\s/g, '&nbsp;');
  // }
  const startAt = nameToRender.toLowerCase().indexOf(valueForInput.toLowerCase());
  const length = valueForInput.length;
  const endAt = startAt + length;

  const preMatch = nameToRender.slice(0, startAt);
  const theMatch = nameToRender.slice(startAt, endAt);
  const postMatched = nameToRender.slice(endAt, nameToRender.length);

  return (
    <Flex style={{ justifyContent: 'flex-start', width: '100%' }}>
      <span data-nameToRenderParam dangerouslySetInnerHTML={{ __html: `${valueForInput}` }} style={{ display: 'none' }} />
      <span data-preMatch dangerouslySetInnerHTML={{ __html: `${preMatch}` }} />
      <span data-theMatch ><Highlighted dangerouslySetInnerHTML={{ __html: `${theMatch}` }} /></span>
      <span data-postMatched dangerouslySetInnerHTML={{ __html: `${postMatched}` }} />
      <span data-postFix style={{ marginLeft: 'auto' }}>{postFix}</span>
    </Flex>
  );
};
*/
const recomposeStringValueReducer = (accu = '', { string }) => (accu += string);

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
    this.onQuerychangeDebounced = debounce(this.onQuerychange, 100);
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
    const value = currentInput.value || '';

    this.setState({ index: -1, escape: true });

    this.onEnter(value);
  }

  onItemClick(index) {
    // const { items } = this.props;
    const { filteredSet } = this.state;

    this.setState({ index: -1, escape: true });
    this.onEnter(filteredSet[index].reduce(recomposeStringValueReducer));
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
        this.onEnter(filteredSet[index].reduce(recomposeStringValueReducer) /* , true */);
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
      new Promise((resolve, reject) => {
        const filterFnStrict = item => (
          item[filterOn].toLowerCase().replace(/\s/g, '')
            .indexOf((valueForInput || defaultValue || '').toLowerCase().replace(/\s/g, '')) > -1
        );

        const matchMapper = item => (
          getMatchesResult(item[filterOn], (valueForInput || defaultValue || ''))
        );

        const filterFnPermissive = (mappedMatch) => {
          // console.log("it's not x.match", mappedMatch)
          const isMatch = mappedMatch.some(x => x.matches)
          // console.log('isMatch', isMatch)
          return isMatch;
        };

        const mappedUNfilteredSet = (items && items.map(matchMapper)) || [];

        const filteredSet = (mappedUNfilteredSet.filter(filterFnPermissive ||  filterFnStrict));
        // console.log('filteredSet', filteredSet)

        const filteredSetWithScore = getFilteredSetWithScore(filteredSet);

        const finalSortedResult = filteredSetWithScore.sort((a, b) => {
          if (a.scrore > b.scrore) { return -1 }
          if (a.scrore < b.scrore) { return 1 }
          return 0
        }).map(({ matchList }) => matchList)

        /*
        const finalSortedResult = [...filteredSet].sort((a, b) => {
          const bestMatchLengthInA = a.reduce((accu, x) => {
            // console.log('A: x.length', x.length)
            // console.log('A: x', x)

            if (a.matches) {
              return x.length > accu ? x.length : accu;
            }
            return accu
          }, 0)

          const bestMatchLengthInB = b.reduce((accu, x) => {
            // console.log('B: x.length', x.length)
            // console.log('B: x', x)
            if (b.matches) {
              return x.length > accu ? x.length : accu;
            }
            return accu
          }, 0)


          if (bestMatchLengthInA > bestMatchLengthInB) { return 1 }
          if (bestMatchLengthInA < bestMatchLengthInB) { return -1 }
          return 0
        })
        */

        // console.log('finalSortedResult ', finalSortedResult )

        // const sortedFilteredSet = [...filteredSet].sort((a, b) => {
        //   if (x.string.length > y.string.length) { return -1 }
        //   if (x.string.length < y.string.length) { return 1 }
        //   return 0
        // })

        resolve(finalSortedResult)
        // resolve(filteredSet)

      }).then(filteredSet =>
        this.setState({
          filteredSet,
        }, consumerNotifierCallback)
      )
      // const filterCallBack = () => {
      //   const filterFn = item => (
      //     getMatchesResult(item[filterOn], (valueForInput || defaultValue || '').toLowerCase()).some(x => x.matches)
      //     // item[filterOn].toLowerCase().replace(/\s/g, '')
      //     //   .indexOf((valueForInput || defaultValue || '').toLowerCase().replace(/\s/g, '')) > -1
      //   );

      //   const filteredSet = (items && items.filter(filterFn)) || [];

      //   this.setState({
      //     filteredSet,
      //   }, consumerNotifierCallback);
      // };

      // setTimeout(filterCallBack, 1);
    }
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
          // more than a hundreds search results is not
          // actually helpfull anyway, neither is it reasonnable to ask that to the dom
          // let's cut it at 10
          .slice(0, 10)
          .map((item, currentIndex) => {
            const { postFix } = item;

            const nameToRender = item[filterOn] || item.name;
            const nameToRenderWithHightlight =
              getHighlightedNameComplex(item, valueForInput, postFix, filterOn);

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
        {(filteredSet.length > 20
          ? (<MenuItem
              key={`not-currentIndex`}
              onClick={() => { } /* this.onItemClick.bind(this, currentIndex) */}
              // onMouseOver={this.handleMouseEnterListItem.bind(this)}
              // onMouseOut={this.handleMouseLeaveListItem.bind(this)}
              style={{
                textAlign: 'center', opacity: .8,
              }}
            >
              {'Some results were omitted, try a more specific query'}
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
