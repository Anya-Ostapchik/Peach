import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
	mode: 'development',
    context: path.resolve('src'),
	entry: './index.js',
    output: {
        filename: 'index.js',
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'styles.css'
    })],
    module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',],
			},
		],
	},
};