Working with Webpack 4+
______________________________________

If you're using Webpack 4.x (check the package.json file to find out which version was installed), you'll need a slightly different setup than shown in the next lecture.

Here are the adjustments you'll have to put into place:

1. Change loaders to rules.

2. In extensions[0] to "*" from "".

It's also suggested to keep the filename as ./bundle.js as a dist folder is added automatically.

module.exports = {
    entry:"./src/index.tsx",
    output: {
        filename:"./bundle.js"
    },
    devtool:"source-map",
    resolve: {
        extensions: ["*",".ts",".tsx",".js"]
    },
    module:{
        rules: [
            {test:/\.tsx?$/, loader:"ts-loader"}
        ]
    }
};
When running Webpack, you probably get an error:

The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D
Simply install webpack-cli, thereafter it should work:

npm install webpack-cli --save-dev 