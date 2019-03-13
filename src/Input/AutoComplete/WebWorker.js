export default class WebWorker {
  constructor({ worker, store }) {
    console.log('worker', worker);
    console.log('store', store);
    // console.log('in class WebWorker worker', worker);
    // console.log('in class WebWorker store', store);
    const code = worker.toString();
    // console.log('in class WebWorker code', code);
    const extendedCode = `(${code})()`;
    const indexOfFnBodyStart = extendedCode.indexOf('@&#');
    console.log('indexOfFnBodyStart', indexOfFnBodyStart);

    const extendedCodeWithStore = `
    ${extendedCode.substring(0, indexOfFnBodyStart + 6)}
    \n
    const store = ${JSON.stringify(store)};
    \n
    ${extendedCode.substring(indexOfFnBodyStart + 7)}
    `;

    console.log('extendedCodeWithStore', extendedCodeWithStore);

    const blob = new Blob([extendedCodeWithStore]);
    return new Worker(URL.createObjectURL(blob));
  }
}
