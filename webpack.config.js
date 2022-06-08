const path = require('path');


module.exports = {
    mode: "development",

    entry: path.join(__dirname, './index.ts'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: path.join(__dirname, './node_modules')
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx']
        //    这里的解析项是为了保证依赖图中的文件
        //    都正确的被解析了
    }
}
