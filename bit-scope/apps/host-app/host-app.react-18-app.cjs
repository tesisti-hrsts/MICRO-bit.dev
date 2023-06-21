const { moduleFederationHostAppTransformer } = require('./host-app-transformer.cjs');

/** @type {import("@teambit/react.apps.react-app-types").ReactAppType} */
module.exports.default = {
  name: 'host-app',
  entry: [require.resolve('./host-app.app-root')],
  portRange: [3000, 3000],
  webpackTransformers: [moduleFederationHostAppTransformer],
};