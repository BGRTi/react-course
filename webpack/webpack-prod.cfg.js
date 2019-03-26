'use strict'

const NODE_ENV = process.env.NODE_ENV;
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    entry: "./index.jsx",
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
        modules: ['node_modules'],
        extensions: [' ','.js','.jsx']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js','.jsx', '.json'],
        mainFields: ['loader', 'main']
      },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }

};