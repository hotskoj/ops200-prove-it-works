import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    target: 'node',
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    resolve: {
        alias: {
          react: path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
}