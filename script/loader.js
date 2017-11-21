const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    },
    {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
    },
    {
        test: /\.scss$/,
        use: [{
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }
];