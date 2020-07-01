const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(config, {
    mode: "production",
    //devtool: "none",
    //entry: path.resolve(__dirname, 'src', 'js', 'main.js'),

    output: {
        filename: '[name].[contentHash].bundle.js', // hash for deal with cache //name comes form entry
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader, //3. extract css to file
                'css-loader', // 2. trasnsform css to js
                'sass-loader' // 1. transform scss to css
            ]
        }],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].css",
            
        })
    ],

    optimization: {
        minimizer: [new TerserPlugin()]
    }
});