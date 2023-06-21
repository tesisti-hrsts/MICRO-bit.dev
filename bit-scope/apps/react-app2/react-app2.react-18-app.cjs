const { moduleFederationReactApp2Transformer } = require('./react-app2-transformer.cjs');

const ReactApp2 = {
  name: 'react-app2',
  portRange: [60001, 60001],
  entry: [require.resolve('./react-app2.app-root')],
  webpackTransformers: [
    (config) => {
      return moduleFederationReactApp2Transformer(
        config,
        null,
        require.resolve('./react-app2')
      );
    },
  ],
};

module.exports.default = ReactApp2;