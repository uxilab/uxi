import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../Layout';

/*
Q: fernd
A:
[
  { matches: true, string: 'Fern' }, // !! watch out for the caps
  { matches: false, string: '&nbsp' },
  { matches: true, string: 'D' }, // !! watch out for the caps
  { matches: false, string: 'awson' },
]
*/

export const getMatchesResult = (source, target) => {
  // shorcut in case of perfect match
  if (source.toLowerCase().indexOf(target.toLowerCase()) === 0) {
    // ! perfect match, from the start worth a 100
    return [
      { matches: true, string: source.slice(0, target.length) },
      { matches: false, string: source.slice(target.length) },
    ];
  }

  // shorcut in case of perfect match
  if (source.toLowerCase().indexOf(target.toLowerCase()) > -1) {
    // ! perfect match, from the middle worth a plenty
    const idx = source.toLowerCase().indexOf(target.toLowerCase());

    return [
      { matches: false, string: source.slice(0, idx) },
      { matches: true, string: source.slice(idx, idx + target.length) },
      { matches: false, string: source.slice(idx + target.length) },
    ];
  }

  const result = [];

  // this can probalby be refactored into a nice looking map + reducer:
  let i = 0;
  let j = 0;
  while (i < source.length) {
    const sourceChar = source[i];
    const targetChar = target[j];

    let currentRunMatchObj = {
      matches: false,
      string: sourceChar,
    };

    if (sourceChar.toLowerCase() === (targetChar && targetChar.toLowerCase())) {
      currentRunMatchObj.matches = true;
      result.push(currentRunMatchObj);
      j++; // eslint-disable-line no-plusplus
    } else {
      result.push(currentRunMatchObj);
      currentRunMatchObj = {
        matches: false,
        string: sourceChar,
      };
    }
    i++; // eslint-disable-line no-plusplus
  }

  const initialAccu = {
    isCurrentlyMatching: result[0].matches,
    result: [{
      matches: result[0].matches,
      string: result[0].string,
    }],
  };

  const finalResult = result.reduce((accu, x, i) => { // eslint-disable-line no-shadow
    if (i === 0) { return accu; }

    // const currentItem = accu.result[accu.result.length - 1];

    if (x.matches === accu.isCurrentlyMatching) {
      if (i === 0) {
        accu.result[0] = x.string; // eslint-disable-line no-param-reassign
      } else {
        // eslint-disable-next-line no-param-reassign
        accu.result[accu.result.length - 1].string += x.string;
      }
      return accu;
    }
    return {
      isCurrentlyMatching: x.matches,
      result: [
        ...accu.result,
        { ...x },
      ],
    };
  }, initialAccu);

  return finalResult.result;
};


const addScore = (accu, { string, matches }) => {
  if (matches) {
    return string.length > accu ? string.length : accu;
  }
  return accu;
};

export function getFilteredSetWithScore(filteredSet) {
  const filteredSetWithScore = filteredSet.map(x => ({
    ...x,
    scrore: x.matchesResults.reduce(addScore, 0),
  }));

  return filteredSetWithScore;
}


const Highlighted = styled.span`
  font-weight: 600;
  background: #fff9d6;
`;
const MatchesPart = styled.span`
  white-space: nowrap;
`;
export const getHighlightedNameComplex = (item, valueForInputParam, postFix/* , filterOn */) => {
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
      <span data-postFix style={{ margin: '0 6px', marginLeft: 'auto' }}>
        {/* postFix */}
        {postFix && React.isValidElement(postFix) && React.cloneElement(postFix)}
      </span>
    </Flex>
  );
};
