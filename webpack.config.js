const path = require('path');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'

    }
}