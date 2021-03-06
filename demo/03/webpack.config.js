module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_module/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    }
};