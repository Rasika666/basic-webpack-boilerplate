const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //mode: "development",
    //devtool: "none",
    entry: {
        main: path.resolve(__dirname, 'src', 'js', 'main.js'),
        vendor: path.resolve(__dirname, 'src', 'js', 'vendor.js')
    },

    // output: {
    //     filename: 'main.[contentHash].js', // hash for deal with cache
    //     path: path.resolve(__dirname, 'dist')
    // },

    module: {
        rules: [
            
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: "file-loader",
                    options:{
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            },
        
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({  // create html file to serve webpack bundle(main.js) 
        title: 'basic-template',
        filename: 'index.html',
        template: './src/index.html'
        })
    ],
}