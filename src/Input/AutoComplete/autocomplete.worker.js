
/* eslint-disable */
export default () => {
  importScripts('https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js')
  let globalNonce = null;
  const data = [];
  let latestValue = null
  let tasks = []

  // utils ––––––––––––
  doWork = (n = 10e6, shouldCancel) => {
    let val = 0
    for (let index = 0; index < (n * 4); index++) {
      const r = Math.pow( Math.PI * Math.sin(index * 4) );
      val = val + r
      if (shouldCancel()) {
        return;
      }
    }
    return val
  }
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }
  const getOwnPropertySymbols = Object.getOwnPropertySymbols;
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const propIsEnumerable = Object.prototype.propertyIsEnumerable;


  const assign = Object && Object.assign !== undefined
    ? Object.assign
    : function (target, source) { // eslint-disable-line no-unused
      let from;
      const to = toObject(target);
      let symbols;

      for (let s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);

        for (const key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }

        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (let i = 0; i < symbols.length; i++) { // eslint-disable-line no-plusplus
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }

      return to;
    };

  const getMatchesResult = (source, target) => {
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
        result: accu.result.concat(x),
        // { ...x },
        // ],
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
  function getFilteredSetWithScore(filteredSet) {
    const filteredSetWithScore = filteredSet.map(x => assign(x, {
      scrore: x.matchesResults.reduce(addScore, 0),
    }));

    return filteredSetWithScore;
  }


  const main = async (e, localIdentity) => {
    if (!e) return;

    // const { data } = e;
    // const parsedData = JSON.parse(e.data);
    const parsedData = e.data;
    // if (parsedData && parsedData.type === 'init') {
    //   store = e.data.items;
    //   return;
    // }

    // store should have been injected
    // console.log('data', data); // eslint-disable-line no-undef
    const items = data; // eslint-disable-line no-undef

    const { strict, filterOn, valueForInput, defaultValue = null } = parsedData;

    // eslint-disable-next-line no-new-object
    const localNonce = globalNonce = new Object(); // eslint-disable-line no-multi-assig

    const matchMapper = item => assign(item, {
      // ...item,
      matchesResults: getMatchesResult(item[filterOn], (valueForInput || defaultValue || '')),
      // matchesResults: this.worker.postMessage({
      //   source: item[filterOn],
      //   target: (valueForInput || defaultValue || ''),
      // }),
    });

    const filterFnStrict = item => (
      item[filterOn].toLowerCase().replace(/\s/g, '')
        .indexOf((valueForInput || defaultValue || '').toLowerCase().replace(/\s/g, '')) > -1
    );

    const filterFnPermissive = (mappedMatch) => {
      const isMatch = mappedMatch.matchesResults.some(x => x.matches);
      return isMatch;
    };

    if (tasks[tasks.length - 1].id !== valueForInput) {
      console.log('aborting', tasks[tasks.length - 1].id, valueForInput);
      return;
    }

    const mappedUNfilteredSet = (items && items.map(matchMapper)) || [];

    if (tasks[tasks.length - 1].id !== valueForInput) {
      console.log('aborting', tasks[tasks.length - 1].id, valueForInput);
      return;
    }


    const filteredSet = (mappedUNfilteredSet.filter(
      strict ? filterFnStrict : filterFnPermissive)
    );

    if (tasks[tasks.length - 1].id !== valueForInput) {
      console.log('aborting', tasks[tasks.length - 1].id, valueForInput);
      return;
    }

    const filteredSetWithScore = getFilteredSetWithScore(filteredSet);
    if (tasks[tasks.length - 1].id !== valueForInput) {
      console.log('aborting', tasks[tasks.length - 1].id, valueForInput);
      return;
    }


    const finalSortedResult = filteredSetWithScore.sort((a, b) => {
      if (a.scrore > b.scrore) { return -1; }
      if (a.scrore < b.scrore) { return 1; }
      return 0;
    });

    if (tasks[tasks.length - 1].id !== valueForInput) {
      console.log('aborting', tasks[tasks.length - 1].id, valueForInput);
      return;
    }

    console.log('wroker done, reporting back...');
    postMessage(finalSortedResult.slice(0, 30));

  }

  self.addEventListener('message', async (e) => { // eslint-disable-line no-restricted-globals
    // main ––––––––––––
    console.log('wroker msg received, running...');
    const localIdentity = Object.create(null)

    if (!e) { return }

    const { strict, filterOn, valueForInput, defaultValue = null } = e.data;

    latestValue = valueForInput

    const task = {
      init: (resolve, reject) => {
        setTimeout(() => {
          if (latestValue !== valueForInput) {
            return reject('abort ' + valueForInput + ' because ' + latestValue)
          }
          resolve(e)
        }, 80)
      },
      work: main,
      id: valueForInput,
    }

    tasks = tasks.concat([ task ])

    const run = (promiseExecutor) => new Promise(promiseExecutor)

    run(task.init)
      .then(task.work)
      .catch(err => console.log('canceled task:', err))

  }, { passive: true });
};
