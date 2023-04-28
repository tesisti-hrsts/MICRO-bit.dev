const { moduleFederationReactAppTransformer } = require('./react-app-transformer.cjs');

const ReactApp = {
	name: 'react-app',
	portRange: [60000, 60000],
	entry: [require.resolve('./react-app.app-root')],
	webpackTransformers: [
		(config) => {
			return moduleFederationReactAppTransformer(
				config,
				null,
				require.resolve('./react-app')
			);
		},
	],
};

module.exports.default = ReactApp;