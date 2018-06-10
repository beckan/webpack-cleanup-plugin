# webpack-cleanup-plugin

A CSSComb plugin for webpack

## Requirements

This module requires a minimum of Node v6.9.0 and it's compatible with both Webpack 3 and 4.

## Getting Started

To begin, you'll need to install `webpack-cleanup-plugin`:

```console
$ npm install webpack-cleanup-plugin --save-dev
```

Then add the plugin to your `webpack` config. For example:

```js
// webpack.config.js
const CleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  // ...
  plugins: [
    new CleanupPlugin(options),
  ],
  // ...
}
```

And run `webpack` via your preferred method.

## Options

### `exclude`

Type: `Object`
Default: `{}`

### `extentions`

Type: `Array[String]`
Default: `null`

### `size`

Type: `Integer`
Default: `4700`

### `path`

Type: `String`
Default: `./`

## License

#### [MIT](./LICENSE)