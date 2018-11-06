# uxi-cli

jest + eslint + webpack + babel + webpack-dev-server

  - jest + enzyme + snapshot
  - eslint (airbnb)
  - webpack 4
  - webpack-dev-server
  - babel, babel-loader:
    - latest ('env', 'react', 'stage-0')
    - react jsx
    - object spread

## install:
- npm i uxi-cli

print help:

`$ node_modules/.bin/uxi-cli`:


## Usage:

in the package.json:
```JSON
  "scripts": {
    "help": "uxi-cli",
    "dev": "uxi-cli dev",
    "build": "uxi-cli build",
    "lint": "uxi-cli lint",
    "test": "uxi-cli test",
    "test:coverage": "uxi-cli test:coverage",
    "test:watch": "uxi-cli test:watch",
    "pack": "uxi-cli pack",
  }
```

## Commands:
  - **test**
  - **test:watch**
  - **test:coverage**
  - **lint**
  - **build**
  - **dev**
  - **pack**


## Default behaviour:

- **test** scans a target directory (default to .src/) for files under a folder named *\_\_test\_\_* or files that end in *.test.js*

- **test** and **lint** default to targeting ./src folder, but you can say ortherwise by passing the path as the first argument:

  `$ uxi-cli lint ./myFolder` or `$ uxi-cli test ./source`

- **build** defaults to using ./src/index.js as source and .build/app.js as output


## Extending config:

To overwrire webpack config, or some part of it, for example for the dev command, create a `uxi.dev.extend.js` or a `uxi.build.extend.js` for the build command.
  uxi-cli will pick up this file if it exists.

The file must export, as default, a function.
This function will be passed the default uxi-cli config for the relevant command.
You can extend it at this moment and then return it.

  For instance, here's the extended config for the uxi doc website:

```JS
const path = require('path');

module.exports = (config) => {
  // here we're ading 'raw-loader' for md files
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  // custom port for dev server:
  config.devServer.port = 8989;
  config.entry[1].replace(/(:\d*)$/, ':8989');

  // adding aliases
  config.resolve.alias = {
    uxi: path.resolve(__dirname, '../src'),
    'styled-components': path.resolve(__dirname, 'node_modules/styled-components'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    'react': path.resolve(__dirname, 'node_modules/react'),
  };

  return config;
};
```

## uxi-cli dev

This is a pre-packaged webpack configuration to get started quickly with any React application.

Please look at the examples folder to see how you can customize the webpack configuration.

  ## Webpack dev-server:
    - At the root of the project, create an index.html containg a element with an id of `root` for react to attach to be used by dev-server
      ```HTML
      <div id="root"></div>
      ```

    - webpack-dev-server contentBase default is '/'
    - default port is `3100`

## uxi-cli build

Building your application for a production usage.

## uxi-cli pack

The command `uxi-cli pack` will help you if you want to publish a NPM package. It will build the src folder and will copy the appropriate files that should be present for a valid NPM package (package.json and README.md).
