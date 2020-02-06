const defaultConfig = require("@wordpress/scripts/config/webpack.config");

const path = require( 'path' );
const postcssPresetEnv = require( 'postcss-preset-env' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const IgnoreEmitPlugin = require( 'ignore-emit-webpack-plugin' );

const production = process.env.NODE_ENV === '';

console.log( defaultConfig );

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                        hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    // optimization: {
    //     ...defaultConfig,
    //     namedChunks: true,
    //     namedModules: true,
    //     noEmitOnErrors: true,
    //     splitChunks: {
    //         cacheGroups: {
    //             styles: {
    //                 name: 'style',
    //                 test: /style\.scss$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //             editor: {
    //                 name: 'editor',
    //                 test: /editor\.scss$/,
    //                 chunks: 'all',
    //                 enforce: true,
    //             },
    //         },
    //     },
    // },
    plugins: [
        ...defaultConfig.plugins,
        new CleanWebpackPlugin({
            // cleanStaleWebpackAssets: false,
            // verbose: true,
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new IgnoreEmitPlugin( [ 'editor.js', 'style.js' ] ),
    ],
};