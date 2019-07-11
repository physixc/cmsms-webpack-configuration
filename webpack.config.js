const path = require('path');
const webpackBuildNotifierPlugin = require('webpack-build-notifier');

const config = {
    entry: ['./resources/js/app.js', './resources/scss/app.scss'],
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpackBuildNotifierPlugin({
            title: "Webpack notification",
            suppressSuccess: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /.[s]+css$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'stylesheet.1.css',
                            outputPath: '../css/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: '../css/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;
