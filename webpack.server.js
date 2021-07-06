const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'node',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env'
                    ],
                    plugins: ['@babel/plugin-transform-runtime']
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    emitFile: false,
                }
            }
        ]
    },
    externals: [webpackNodeExternals()]
}