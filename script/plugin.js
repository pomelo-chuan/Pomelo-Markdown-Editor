const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        title: 'Pomelo Markdown Editor'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
];