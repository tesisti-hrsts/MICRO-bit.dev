"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleFederationHostAppTransformer = void 0;
const webpack_1 = require("webpack");
const { ModuleFederationPlugin } = webpack_1.container;

/* get a webpack config and return a mutated one */
const moduleFederationHostAppTransformer = (config) => {
    config.addPlugin(
    /* add the module federation plugin to the webpack bundle */
    new ModuleFederationPlugin({
        /* the remote apps to be loaded by this host app */
        remotes: {
            react_app1: 'react_app1@http://localhost:60000/remoteEntry.js',
            react_app2: 'react_app2@http://localhost:60001/remoteEntry.js',
        },
        /**
         * a list of peer dependencies (to load by this host app, and not by any other remote app).
         * */
        shared: [
            {
                react: {
                    singleton: true,
                    requiredVersion: '^18.0.0',
                    eager: true,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^18.0.0',
                    eager: true,
                },
            },
        ],
    }));
    return config;
};

exports.moduleFederationHostAppTransformer = moduleFederationHostAppTransformer;