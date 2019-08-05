module.exports = {
    context: __dirname,
    entry: './entry.js',
    output: {
        path: __dirname + '/../build',
        filename: "playground-bundle.js"
    },
    module: {
        loaders: [
            /*{
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                cacheDirectory: true,
                presets: [ '../node_modules/babel-preset-es2015']
              }
            }*/
        ]
    }
};
