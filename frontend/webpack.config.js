const webpack = require( 'webpack' )
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        inline: true,
        port: 3000,
        contentBase: './public',
    },
    resolve: {
        extensions: [ '.js', '.jsx' ],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './app.css' 
        }) 
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loaders: "babel-loader"
        }, {
            test: /\.css$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    publicPath: '../',
                    hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader',
              ],
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}