export default class WebWorkerWithData {
  constructor(worker, data) {
    const code = worker.toString();
    const extendedCode = `(${code})()`;

    const extendedCodeWithData = extendedCode.replace(
      'var data = [];', // it has been compiled (will be var not const)
      `\nvar data = ${JSON.stringify(data)};\n`
    );

    console.log('extendedCodeWithData', extendedCodeWithData);
    const blob = new Blob([extendedCodeWithData]);
    return new Worker(URL.createObjectURL(blob));
  }
}
