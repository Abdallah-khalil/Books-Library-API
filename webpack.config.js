// import nodejs core module 
const path = require('path');
const nodeExt = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const config = {

    entry: {
        main: path.join(__dirname, "src/index.ts")
    },

    target: 'node',

    node: {
        __dirname: true
    },

    externals: [nodeExt()],

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },

    plugins: [
       // new Nodemon()      ,
        new WebpackShellPlugin({
            onBuildStart: ['echo "Starting"'],
            onBuildEnd: ['nodemon ./build/api.bundle.js']
          })
    ],

    output: {
        path: path.join(__dirname, "build"),
        filename: "api.bundle.js"
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            include: [path.join(__dirname, "src")],
            loader: "ts-loader"
        }]
    }
};

module.exports = config;