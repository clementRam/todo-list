const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        base: ['./node_modules/todomvc-common/base.js', './node_modules/todomvc-common/base.css'],
        helpers: './js/helpers.js',
        store: './js/store.js',
        model: './js/model.js',
        template: './js/template.js',
        view: './js/view.js',
        controller: './js/controller.js',
        app: ['./js/app.js', './index.css']
    },
    output: {
        filename: 'js/[name].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].min.css',
            allChunks: true,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {loader: 'css-loader', options: {minimize: true}}
                    ]
                })
            }
        ]
    }
};
