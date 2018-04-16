module.exports = {
    entry: './app.ts',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};