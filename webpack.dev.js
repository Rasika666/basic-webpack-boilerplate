const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(config, {
    mode: "development",
    //devtool: "none",
    //entry: path.resolve(__dirname, 'src', 'js', 'main.js'),

    output: {
        filename: '[name].bundle.js', // hash for deal with cache
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', //take that js and inject to dom
                'css-loader', // trasnsform css to js
                'sass-loader' // transform scss to css
            ]
        }],
    },

    // plugins: [new HtmlWebpackPlugin({  // create html file to serve webpack bundle(main.js) 
    //     title: 'basic-template',
    //     filename: 'index.html',
    //     template: './src/index.html'
    // })],
});