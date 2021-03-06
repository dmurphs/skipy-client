var path = require('path')
var webpack = require('webpack')

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_DIR + '/index.js',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },

    module: {
        loaders: [
            {test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    }
}
