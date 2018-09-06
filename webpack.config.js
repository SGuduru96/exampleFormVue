var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app1_desktop: './src/index.js'
    },
    output: {
        path: __dirname + '/',
        filename: '[name]_bundle.js'
    },
    resolve: {
        alias: {
            'modules': path.join(__dirname, 'node_modules')
        }
    },
    module: {
    }
};
