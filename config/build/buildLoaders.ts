import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const cssLoader: webpack.RuleSetRule = {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 'style-loader' for development
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.match(/\.module\.\w+$/)), // Treat only *.module.scss files as CSS modules
						localIdentName: options.isDev
							? '[path][name]__[local]' // Dev-friendly class names
							: '[hash:base64]', // Shorter hashed class names for production
					},
				},
			},
			'sass-loader', // Compiles Sass to CSS
		],
	};

	const tsLoader: webpack.RuleSetRule = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [tsLoader, cssLoader];
}
