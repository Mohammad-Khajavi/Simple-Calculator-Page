const path = require('path');

module.exports = {
    entry: './src/code.js', // Entry file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Target SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    mode: 'development',
    devServer: {
        static: './dist',
        port: 3000,
    }    
};
