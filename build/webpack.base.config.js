var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './public/static/js',
        publicPath: '/static/js/',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
