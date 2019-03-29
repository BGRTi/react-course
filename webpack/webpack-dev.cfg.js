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
        extensions: ['*', '.js', '.jsx']
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        mainFields: ['loader', 'main']
      },
    module: {
        rules: [
          {
            test: /\.m?js|jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          }
        ]
    }
};