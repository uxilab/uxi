/* eslint-disable no-console */
const fse = require('fs-extra');
const path = require('path');

const cwd = process.cwd();

const files = [
  'README.md',
];

function resolveBuildPath(file) {
  return path.resolve(cwd, './build/', path.basename(file));
}


function copyFile(file) {
  const buildPath = resolveBuildPath(file);
  return new Promise((resolve) => {
    fse.copy(
      file,
      buildPath,
      (err) => {
        if (err) throw err;
        resolve();
      },
    );
  })
    .then(() => console.log(`Copied ${file} to ${buildPath}`));
}

function createPackageFile() {
  return new Promise((resolve) => {
    fse.readFile(path.resolve(cwd, './package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
    .then(data => JSON.parse(data))
    .then((packageData) => {
      const minimalPackage = {
        name: packageData.name,
        author: packageData.author,
        version: packageData.version,
        description: packageData.description,
        main: './index.js',
        keywords: packageData.keywords,
        repository: packageData.repository,
        license: packageData.license,
        bugs: packageData.bugs,
        homepage: packageData.homepage,
        peerDependencies: packageData.peerDependencies,
        dependencies: packageData.dependencies,
      };

      return new Promise((resolve) => {
        const buildPath = path.resolve(cwd, './build/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        fse.writeFile(buildPath, data, (err) => {
          if (err) throw (err);
          console.log(`Created package.json in ${buildPath}`);
          resolve();
        });
      });
    });
}


Promise.all(
  files.map(file => copyFile(file)),
)
  .then(() => createPackageFile());
