import {
  getMatchesResult,
  getFilteredSetWithScore,
} from './utils';
import { search } from './search';

let latestValue = null;
let tasks = [];


const main = async (e) => {
  console.log('main running...');
  if (!e) return;

  const parsedData = e.data;

  // const { strict, filterOn, valueForInput, items } = parsedData;
  const { strict, filterOn: property, valueForInput: value, items } = parsedData;

  const cancelIfNeeded = () => {
    if (tasks[tasks.length - 1].id !== value) {
      console.log('aborting', tasks[tasks.length - 1].id, value);
      throw new Error('newer stuff');
    }
  };

  const res = await search(items, property, value, strict, cancelIfNeeded);
  postMessage(res);
};

self.addEventListener('message', async (e) => { // eslint-disable-line no-restricted-globals
  if (!e) { return; }

  if (e.type === 'uxi_autocomplete') {
  // main ––––––––––––
    console.log('wroker msg received, running...');


    const { valueForInput } = e.data;

    latestValue = valueForInput;

    const task = {
      init: (resolve, reject) => {
        task.reject = reject;
        // eslint-disable-next-line
      setTimeout(() => {
        // if (latestValue !== valueForInput) {
        //   return reject(`aborted "${valueForInput}" because "${latestValue}" was newer`);
        // }
          return resolve(e);
        }, 80);
      },
      work: main,
      id: valueForInput,
    };

    tasks = tasks.concat([task]);

    const run = promiseExecutor => new Promise(promiseExecutor);

    run(task.init)
      .then(task.work)
      .catch(err => console.log('canceled task:', err));
  }
}, { passive: true });
