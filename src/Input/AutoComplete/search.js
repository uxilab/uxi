import {
  getMatchesResult,
  getFilteredSetWithScore,
} from './utils';

export const search = (
  collection,
  property,
  value = '',
  strict,
  cancelIfNeeded = () => {},
) => new Promise((resolve/* , reject */) => {
  const items = collection;
  const matchMapper = item => ({
    ...item,
    matchesResults: getMatchesResult(item[property], (value)),
  });

    // console.log('about to wait for 8 sec');
    // await (() => new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('waited 8 sec');
    //     resolve();
    //   }, 8000);
    // }))();

  const filterFnStrict = item => (
    item[property].toLowerCase().replace(/\s/g, '')
      .indexOf((value).toLowerCase().replace(/\s/g, '')) > -1
  );

  const filterFnPermissive = (mappedMatch) => {
    const isMatch = mappedMatch.matchesResults.some(x => x.matches);
    return isMatch;
  };

  cancelIfNeeded();

  const mappedUNfilteredSet = (items || [])
    .map((...a) => {
      cancelIfNeeded();
      return matchMapper(...a);
    });

  cancelIfNeeded();


  const filteredSet = (mappedUNfilteredSet.filter(
    strict ? filterFnStrict : filterFnPermissive)
  );

  cancelIfNeeded();

  const filteredSetWithScore = getFilteredSetWithScore(filteredSet);
  cancelIfNeeded();


  const finalSortedResult = filteredSetWithScore.sort((a, b) => {
    if (a.scrore > b.scrore) { return -1; }
    if (a.scrore < b.scrore) { return 1; }
    return 0;
  });

  cancelIfNeeded();

  resolve(finalSortedResult);
});


export default null;
