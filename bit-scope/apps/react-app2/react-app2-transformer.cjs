"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleFederationReactApp2Transformer = void 0;
const webpack_1 = require("webpack");
const { ModuleFederationPlugin } = webpack_1.container;

const DEV_PUBLIC_PATH = 'http://localhost:60001/';

/* get a webpack config and return a mutated one */
const moduleFederationReactApp2Transformer = (configMutator, _context, appEntry) => {
    configMutator.addPlugin(
    /* add the module federation plugin to the webpack bundle */
    new ModuleFederationPlugin({
        /**
         * the following is the path used by the host app, to load this app:
         * react_app2@http://localhost:60001/remoteEntry.js
         */
        name: 'react_app2',
        /* this file is generated by the mf webpack plugin */
        filename: 'remoteEntry.js',
        exposes: {
            './reactApp2': appEntry,
        },
        /**
         * a list of peer dependencies (to be loaded by the host app).
         */
        shared: {
            react: {
                singleton: true,
                requiredVersion: '^18.2.0',
                eager: true,
            },
            'react-dom': {
                singleton: true,
                requiredVersion: '^18.2.0',
                eager: true,
            },
            'react-dom/client': {
                singleton: true,
                requiredVersion: '^18.2.0',
                eager: true,
            },
        },
    }));
    configMutator.raw.output = configMutator.raw.output || {};
    configMutator.raw.output.publicPath = DEV_PUBLIC_PATH;
    return configMutator;
};

exports.moduleFederationReactApp2Transformer = moduleFederationReactApp2Transformer;