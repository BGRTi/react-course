'use strict'

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require('webpack');


module.exports = {
    entry: "./index",
    output: {
        filename: "bundle.js"
    },

    mode: NODE_ENV,

    watch: NODE_ENV == 'development',

    devtool: NODE_ENV == 'development' ? "source-map" : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    resolve: {
        modulesDirections: ['node_modules'],
        extentions: ['', 'js']
    },
    resolveLoader: {
        modulesDirections: ['node_modules'],
        modulesTemplates: ['*-loader', ''],
        extentions: ['', 'js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }]
        }]
    }

};