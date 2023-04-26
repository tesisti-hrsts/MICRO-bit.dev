const { moduleFederationReactAppTransformer } = require('./react-app-transformer.cjs');
const { Netlify } = require('@teambit/cloud-providers.deployers.netlify');

const netlifyOptions = {
	team: 'teambit',
	accessToken: process.env.NETLIFY_AUTH_TOKEN,
	productionSiteName: 'react-app',
	stagingSiteName: 'react-app-staging',
};

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
	deploy: Netlify.deploy(netlifyOptions),
};

module.exports.default = ReactApp;