'use strict'

const NODE_ENV = process.env.NODE_ENV;
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: "../index",
    output: {
        filename: "bundle.js"
    },

    mode: NODE_ENV,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    resolve: {
        modulesDirections: ['node_modules'],
        extentions: ['*','.js']
    },
    resolveLoader: {
        modulesDirections: ['node_modules'],
        modulesTemplates: ['-loader'],
        extentions: ['*','.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }]
        }]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }

};