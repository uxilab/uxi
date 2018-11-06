# Extending uxi-cli

uxi-cli uses Webpack (of course) and provide you a default configuration to ease the use of our library.

To extend our default configuration:

In dev, you can create a file `uxi.dev.extend.js` in the root of your project.
In production, you can create a file `uxi.extend.js` in the root of your project.

Here is an example:

```
module.exports = (config) => {
  config.module.rules.push({
    test: /\.md$/,
    use: 'raw-loader',
    exclude: /node_modules/,
  });

  return config;
};
```
