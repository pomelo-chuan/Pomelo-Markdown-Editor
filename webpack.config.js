const path = require('path');
module.exports = {
    entry: './src/index.js',
    module: {
        rules: require('./script/loader')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: require('./script/plugin'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};