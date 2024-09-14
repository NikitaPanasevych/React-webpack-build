import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolve(options: BuildOptions): webpack.Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [options.paths.src, 'node_modules'],
		alias: {},
		mainFiles: ['index'],
	};
}
