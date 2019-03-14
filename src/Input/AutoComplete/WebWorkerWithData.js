

const getAsyncToGen = () => `
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
`;

export default class WebWorkerWithData {
  constructor(worker, data) {
    const code = worker.toString();
    const extendedCode = `(${code})()`;

    const extendedCodeWithData = extendedCode.replace(
      'var data = [];', // it has been compiled (will be var not const)
      `\nvar data = ${JSON.stringify(data)};\n
        ${getAsyncToGen()}\n
      `
    );

    console.log('extendedCodeWithData', extendedCodeWithData);
    const blob = new Blob([extendedCodeWithData]);
    return new Worker(URL.createObjectURL(blob));
  }
}
