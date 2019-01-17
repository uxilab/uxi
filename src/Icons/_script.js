/**
 * convert a folder of SVGs to a folder of react components with an index
 * /root
 *    - _script.js
 *    - /svgs
 *        - loading.svg
 *        - ... .svg
 *
 * will output .js file in the root folder as well as an index.js
 * /root
 *    - /svgs (untouched)
 *    - _script.js
 *    — index.js
 *    - Loading.js
 *    - ... .js
 *
 * require prettier and eslint globally isntalled
 */
/* eslint-disable */
const fs = require('fs');
const { exec } = require('child_process');


const makeReducer = (taskRunner) => (
  (tasksQueue, task) => (
    tasksQueue.then(chainResults =>
      taskRunner(task).then(taskResult =>
        [
          ...chainResults,
          taskResult,
        ]
      )
    )
  )
)

const initialValue = Promise.resolve([])

const mapPromiseSequentially = async (tasks, taskRunner) => {
  console.log('mapPromiseSequentially', tasks)
  return tasks.reduce(makeReducer(taskRunner), initialValue)
}


const capitalize = x => x.charAt(0).toUpperCase() + x.slice(1);
const toLowerCase = x => x.toLowerCase();
const removeDashIco = x => x.replace('-ico', '');
const camelCaser = (match, p1, offset, string) => {
  console.log('match', match);
  console.log('p1', p1);
  console.log('offset', offset);
  console.log('string', string);

  return p1.replace('-', '');
  // return capitalize(p1.replace('-', ''));
};
const toCamelCase = x => (
  x
    .replace(/(-[a-z])/g, camelCaser)
  // .replace(/(-[a-z])/g, camelCaser)
  // .replace(/(-[a-z])/g, camelCaser)
);
const objToString = Object.prototype.toString;
const isFn = x => objToString.call(x) === '[object Function]';
const addLinFeedToOpenningTag = (match, p1, offset, string) => `\n ${p1}`;
const cleanSVGContent = x => (x
  .replace(/<defs>.*<\/defs>/g, '')
  .replace(/<title>.*<\/title>/g, '')
  .replace(/(class="cls-1")/g, '')
  .replace(/(class="cls-1")/g, '')
  .replace(/(class="cls-2")/g, '')
  .replace(/(class="cls-2")/g, '')
  // .replace(/(<.*>)/g, '\n$&');
  .replace(/(<[^>]+>)/g, addLinFeedToOpenningTag)
  // .replace(/(viewBox=".*")/, '$& style={styles.svg} width="24px" height="24px"')
  .replace(/(viewBox=".*")/, '$& width="24px" height="24px"')
  .replace(/(<svg)/, '<svg focusable="false" ') // IE 11 is the best
  .replace(/(style=".*")/g, ' ') // IE 11 is the best
);

const getRatio = (string) => { // this is so unstable
  const matches = string
    .match(/viewBox="(.*)"/)[1]
    .split(' ')
    .map(x => Number(x))
    .filter(x => x);

  console.log('||', matches);
  return ((matches[1] / matches[0]) * 100).toFixed(3);
};

const writeFile = (x) => {
  console.log('x', x);
  const finalFileName = cleanFileName(x).replace('.svg', '');
  console.log('finalFileName', finalFileName);

  const svgFileContent = fs.readFileSync(`./svgs/${x}`, 'utf8');


  const cleanedSvgFileContent = cleanSVGContent(svgFileContent);

  if (x.match(/gdpr/i)) {
    console.log('BEfore:')
    console.log(svgFileContent)
    console.log('after:')
    console.log(cleanedSvgFileContent)
  }

  // const ratio = getRatio(cleanedSvgFileContent);

  const content = template
    .replace('{{svg}}', cleanedSvgFileContent)
    .replace(/{{name}}/g, finalFileName);
  // .replace('{{ratio}}', ratio);


  fs.writeFileSync(`${finalFileName}.js`, content);
  return finalFileName;
};

const getTestTemplate = fileName => `import React from 'react';
import ${fileName} from '../${fileName}';

describe('Icon : <${fileName} />', () => {
  it('match snapshot', () => {
    expect(shallow(<${fileName} />)).toMatchSnapshot();
  });
});

`;
const writeFileTest = (fileName) => {
  exec(`echo "${getTestTemplate(fileName)}" > ./__tests__/${fileName}.test.js`, (err, stdout, stderr) => {
    if (err) { console.log(err); return false; }
    console.log(`test written for ${fileName}`);
  });
  return fileName;
};

const addFileToIndex = (x) => {
  exec(`echo "export ${x} from './${x}';" >> index.js`, (err, stdout, stderr) => {
    if (err) { console.log(err); return false; }
    console.log(`good for ${x}`);
  });
  return x;
};
/*
  const prettifyString = (x) => prettier.format(x);
*/
const prettifyFile = x => new Promise((resolve, reject) => {
  exec(`npx prettier --single-quote --write ./${x}.js `, (err, stdout, stderr) => {
    if (err) { console.log(err); reject(err); }
    console.log(`all good for ${x}.js`);
    resolve(x);
  });
});

const eslintAutoFix = (x) => {
  exec(`npx eslint --fix ./${x}.js `, (err, stdout, stderr) => {
    if (err) { console.log(err); return false; }
    console.log(`all good for ${x}.js`);
  });
  return x;
};

const eslintAutoFixPromise = (x) => new Promise((resolve, reject) => {
  exec(`npx eslint --fix ./${x}.js `, (err, stdout, stderr) => {
    if (err) { console.log(err); return false; }
    console.log(`all good for ${x}.js`);
    resolve(x)
  });
});

const onlySVGFiles = x => x.match(/.svg$/) !== -1;

const addParenthesisBack = (s) => {
  // .readdirSync('./', 'utf8')
  // .filter(onlySVGFiles)
  // .map(x => {
  const file = fs.readFileSync(`${s}.js`, 'utf8');
  const fileContent = file
    .replace('=>', '=>')
    .replace('</SvgIcon>;', '</SvgIcon>\n);');

  fs.writeFileSync(`${s}.js`, fileContent, 'utf8');
};

const compose = function () {
  const fns = [...arguments];
  fns.filter(x => isFn);

  return item =>
    fns.reduce((r, fn) => { r = fn(r); return r; }, item);
};


const cleanFileName = compose(toLowerCase, capitalize, removeDashIco, toCamelCase);
const template = // fs.readFileSync('./_template.js', 'utf8');
  `import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const {{name}} = (props) => (
  <SvgIcon {...props} >
    {{svg}}
  </SvgIcon>
);

{{name}}.propTypes = {
  color: PropTypes.string,
};

{{name}}.defaultProps = {
  color: 'currentColor',
};

export default {{name}};`;


/**
 * RUN :
 */
// eraseIndex
exec("echo '' > ./index.js", (err, std, stdout) => {
  if (err) { console.log(err); return false; }
  console.log('index deleted');
});

// exec('echo "import React from \'react\';" > ./index.js', (err, std, stdout) => {
//   if (err) { console.log(err); return false; }
//   console.log('index deleted');
// });


(async function () {
  console.log('start');
  const originalFiles = await Promise.all(
    fs.readdirSync('./svgs')
      .filter(filename => filename.toLowerCase() !== '.ds_store')
      // .filter(x => x.match('options'))
      .map(writeFile)
      .map(writeFileTest)
      // .map(prettifyFile)
      .map(addFileToIndex)
      // .map(prettifyFile)
  );

  await mapPromiseSequentially(originalFiles, prettifyFile)

  await mapPromiseSequentially(originalFiles, eslintAutoFixPromise)

  console.log('§§ originalFiles', originalFiles);

  exec('npm run lint', (err, std, stdout) => {
    if (err) { console.log(err); return false; }
    console.log('lint autofix has ran succesfully')
    })

  originalFiles
    .map(addParenthesisBack)
    .map((x) => { console.log(x); return x; });

  // eslint-disable-next-line single-quote
  const gASI = `import * as Icons from './index';

const capitalize = x => x.charAt(0).toUpperCase() + x.slice(1);

export const getAppropriateIcon = (identifier) => {
  const cleanedIdentifer = capitalize(identifier.toLowerCase());
  return Icons[cleanedIdentifer] ? Icons[cleanedIdentifer] : Icons['Circle'];
};

export default getAppropriateIcon;
`;

  exec(`echo "${gASI}" > ./getAppropriateIcon.js`, (err, std, stdout) => {
    if (err) { console.log(err); return false; }
    console.log('index deleted');

  });


  /*

export const getAppropriateSvgIcon = (identifier) => {
  const Element = `${identifier}`;
  return <Element />;
};

  */

  // .map(addParenthesisBack)
}());
