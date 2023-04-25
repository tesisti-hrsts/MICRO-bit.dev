/* @type {import("@teambit/react.apps.react-app-types").ReactAppOptions} */
/*module.exports.default = {
	name: "react-app",
	entry: [require.resolve("./react-app.app-root")],
};*/


const { moduleFederationRemoteTransformer } = require('@learnbit-react/module-federation.webpack-transformers.mf-remote-transformer');
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
			return moduleFederationRemoteTransformer(
				config,
				null,
				require.resolve('./react-app')
			);
		},
	],
	deploy: Netlify.deploy(netlifyOptions),
};

module.exports.default = ReactApp;
