const path = require('path');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['env']
            }
        }]
    }
}

module.exports = config

/*
package.json is run with npm start, and we put a script there to be run called start, which runs
this bitch (webpack.config.js), which in turn uses babel via module to transpile all of our code
in /src that is a .js file, and forms a ES5 friendly version in the public folder
which index.html is going to point to budle.js which is compiled by webpack based on our js files
ALSO, npm start updates the bundle.js file
*/
