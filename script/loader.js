const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
    },
    {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [{loader: 'css-loader', options: {minimize: true}}, 'sass-loader']
        })
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }
];