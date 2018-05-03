
# uxi


## Install
`$ npm i uxi --save`


## Set Up uxi ThemeProvider to use uxi components
```js
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import Button from 'uxi/Button';

const App = () => (
  <ThemeProvider>
    {/* Use uxi component under <ThemeProvider /> */}
    <Button />
  </ThemeProvider>
)
```

___

## Starting a NEW PROJECT using uxi and uxi-cli
You can use [uxi-cli](https://github.com/uxilab/uxi-cli) to get started faster.
It's a package providing a few utils to build, test, lint and dev (hot-reload)

Once installed

`npm i uxi-cli --save`


you can use it in your package.json as such:

```
  scripts: {
    "build": "uxi-cli build:react",
    "test": "uxi-cli test",
    "test:watch": "uxi-cli test:watch",
    "test:coverage": "uxi-cli test:coverage",
    "lint": "uxi-cli lint",
    "dev": "uxi-cli dev"
  }
```
You can see a demo repo using uxi and uxi-cli [here](https://github.com/uxilab/uxi-get-started-demo)
___


