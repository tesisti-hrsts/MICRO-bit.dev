const { moduleFederationHostAppTransformer } = require('./host-app-transformer.cjs');
const { Netlify } = require('@teambit/cloud-providers.deployers.netlify');

const netlifyOptions = {
	team: 'HitachiGroup',
	accessToken: process.env.NETLIFY_AUTH_TOKEN,
	productionSiteName: 'host-app',
	stagingSiteName: 'host-app-staging',
};

/** @type {import("@teambit/react.apps.react-app-types").ReactAppType} */
module.exports.default = {
	name: 'host-app',
	entry: [require.resolve('./host-app.app-root')],
	portRange: [3000, 3000],
	webpackTransformers: [moduleFederationHostAppTransformer],
	deploy: Netlify.deploy(netlifyOptions),
};