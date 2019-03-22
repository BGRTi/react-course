'use strict'

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require('webpack');


module.exports = {
    entry: "./index",
    output: {
        filename: "bundle.js"
    },

    mode: NODE_ENV,

    watch: true,

    devtool: NODE_ENV == 'development' ? "source-map" : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['*','.js']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.json'],
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
    }
};