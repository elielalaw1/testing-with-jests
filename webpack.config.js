const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js', // Huvudfilen där din applikation börjar
    output: {
        path: path.resolve(__dirname, 'dist'), // Målmappen för din bundle
        filename: 'main.js' // Namn på din färdiga bundle-fil
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                context: __dirname + '/src/', // Var HTML-filerna finns
                from: '*.html' // Vilka filer som ska kopieras
            }]
        })
    ],
    mode: 'production' // Lägg till detta för att Webpack ska veta att det är produktionsläge
};
