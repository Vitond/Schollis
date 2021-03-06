const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public', 'js')
    },
    devtool: 'eval-cheap-module-source-map',
    mode: 'development',
    devServer: {
        contentBase: './public'
    },

};

