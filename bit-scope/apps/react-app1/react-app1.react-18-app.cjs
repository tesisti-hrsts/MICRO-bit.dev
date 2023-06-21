const { moduleFederationReactApp1Transformer } = require('./react-app1-transformer.cjs');

const ReactApp1 = {
  name: 'react-app1',
  portRange: [60000, 60000],
  entry: [require.resolve('./react-app1.app-root')],
  webpackTransformers: [
    (config) => {
      return moduleFederationReactApp1Transformer(
        config,
        null,
        require.resolve('./react-app1')
      );
    },
  ],
};

module.exports.default = ReactApp1;