var path = require('path')
var webpack = require('webpack')

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: APP_DIR + '/index.jsx', 
    
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