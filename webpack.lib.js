const webpack = require('webpack')
var path = require('path')
var DEBUG = !(process.env.NODE_ENV === 'production')

const vendors = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router',
    'immutable',
    'echarts',
    'bluebird',
    'redux-thunk',
    'lodash',
    'redux-logger'
]

var libConfig = {
    output: {
        path: 'dist',
        filename: '[name]_[chunkhash].js',
        library: '[name]_[chunkhash]'
    },
    entry: {
        vendor: vendors
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'lib_manifest.json',
            name: '[name]_[chunkhash]',
            context: __dirname
        })
    ]
}

if(!DEBUG) {
    libConfig.plugins.concat([
        new webpack.optimize.UglifyJsPlugin()
    ])
} else {
    libConfig.plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ])
}
module.exports = libConfig