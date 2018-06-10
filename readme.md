# webpack-cleanup-plugin

A cleanup plugin for webpack

## Requirements

This module requires a minimum of Node v6.9.0 and Webpack 4.

## Getting Started

To begin, you'll need to install `beckans-webpack-cleanup-plugin`:

```console
$ npm install beckans-webpack-cleanup-plugin --save-dev
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

Type: `Array`
Default: `[]`

### `extentions`

Type: `Array`
Default: `null`

### `size`

Type: `Integer`
Default: `4700`

### `path`

Type: `String`
Default: `./`

## License

#### [MIT](./LICENSE)