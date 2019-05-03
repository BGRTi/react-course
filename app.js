const express = require('express');
const app = express();
const port = 3000;
const webpack = require('webpack');
const webpackConfig = require('./webpack');

const compiler = webpack(webpackConfig);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));