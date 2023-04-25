/*  @type {import("@teambit/react.apps.react-app-types").ReactAppOptions} */
/*module.exports.default = {
	name: "host-app",
	entry: [require.resolve("./host-app.app-root")],
};*/


const { moduleFederationHostransformer, } = require('@learnbit-react/module-federation.webpack-transformers.mf-host-transformer');
const { Netlify } = require('@teambit/cloud-providers.deployers.netlify');

const netlifyOptions = {
	team: 'teambit',
	accessToken: process.env.NETLIFY_AUTH_TOKEN,
	productionSiteName: 'host-app',
	stagingSiteName: 'host-app-staging',
};

/** @type {import("@teambit/react.apps.react-app-types").ReactAppType} */
module.exports.default = {
	name: 'host-app',
	entry: [require.resolve('./host-app.app-root')],
	portRange: [3000, 3000],
	webpackTransformers: [moduleFederationHostransformer],
	deploy: Netlify.deploy(netlifyOptions),
};
