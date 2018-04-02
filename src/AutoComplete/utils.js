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
  // const source = 'Fernando Dawson'
  // const target = 'fernd'

  // shorcut in case of perfect match
  if (source.indexOf(target) === 0) {
    // ! perfect match, from the start worth a 100
    return [
      { matches: true, string: source.slice(0, target.length) },
      { matches: false, string: source.slice(target.length) },
    ]
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

    // console.log('sourceChar === targetChar')
    // console.log(`${sourceChar} === ${targetChar} : ${sourceChar === targetChar}`)

    if (sourceChar.toLowerCase() === targetChar && targetChar.toLowerCase()) {
      currentRunMatchObj.matches = true;
      // currentRunMatchObj.string += sourceChar
      result.push(currentRunMatchObj);
      // result.push(currentRunMatchObj)
      j++;
    } else {
      // currentRunMatchObj.string += sourceChar
      result.push(currentRunMatchObj);
      currentRunMatchObj = {
        matches: false,
        string: sourceChar,
      };
    }
    i++;
  }

  const initialAccu = {
    isCurrentlyMatching: result[0].matches,
    result: [{
      matches: result[0].matches,
      string: result[0].string,
    }],
  };

  const finalResult = result.reduce((accu, x, i) => {
    if (i === 0) { return accu }

    const currentItem = accu.result[accu.result.length - 1];

    if (x.matches === accu.isCurrentlyMatching) {
      accu.result[accu.result.length - 1].string += x.string;
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

  // console.log('finalResult.result', finalResult.result)

  // add match score for later sorting
/*
  const finalResultWithScore = finalResult.reduce((finalResult, match) => {
    console.log('match', match);

    // const score = match.reduce((accu, x) => {
    //   // console.log('A: x.length', x.length)
    //   // console.log('A: x', x)

    //   if (a.matches) {
    //     return x.length > accu ? x.length : accu;
    //   }
    //   return accu
    // }, 0)

    return {
      ...match,
      // score,
    }
  }, finalResult)
  */
  // const sortedFinalResult = finalResult.result.sort((x, y) => {
  //   if (x.string.length > y.string.length) { return -1 }
  //   if (x.string.length < y.string.length) { return 1 }
  //   return 0
  // })

  /*
  for (let i = 0; i < source.length; i++) {
    const sourceChar = source[i];

    for (let j = 0; j < target.length; j++) {
      const targetChar = target[j];
      if (sourceChar === targetChar) {
        currentRunMatchObj.matches = true
        currentRunMatchObj.string += sourceChar
        // result.push(currentRunMatchObj)
      } else {
        // currentRunMatchObj.string += sourceChar
        result.push(currentRunMatchObj)
        // continue;
      }
    }
  }
  */
  // result
  // console.log(JSON.stringify(result, 2, 2))
  // console.log(JSON.stringify(finalResult.result, 2, 2))

  // return finalResultWithScore
  return finalResult.result
}


const addScore = (accu, { string, matches }) => {
  if (matches) {
    return string.length > accu ? string.length : accu;
  }
  return accu
}

export function getFilteredSetWithScore(filteredSet) {
  // console.log('filteredSet in sortFinaleResult', filteredSet)

  const filteredSetWithScore = filteredSet.map(x => ({
    matchList: x,
    scrore: x.reduce(addScore, 0),
  }))

  // console.log(filteredSetWithScore)

  return filteredSetWithScore;
}
