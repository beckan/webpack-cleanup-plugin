/**
 * webpack-cleanup-plugin
 * ---
 */

import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

class CleanupPlugin {
	/**
	 * Constructor, get options
	 * @param  {[Object]} options [User options]
	 */
	constructor (options = {}) {
		this.pluginName = 'CleanupWebpackPlugin';
		this.options = options;

		this.logs = [];
	}
	/**
	 * Init webpack plugin hooks
	 * @param  {[Object]} compiler [Webpack compiler]
	 */
	apply (compiler) {
		// If Webpack 4, then use new plugin hooks
		if (compiler.hooks) {
			compiler.hooks.afterEmit.tapAsync(this.pluginName, (compiler, callback) => {
				this.run(compiler, callback);
			});
		}
		// Otherwise use the old way of init plugin
		else {
			console.log('Not webpack 4+ ?, sue your self...');
		}
	}

	mergeOptions () {
		// Merge options
		this.options = Object.assign({
			exclude: {},
			extentions: null,
			size: 4700,
			path: './'
		}, this.options);
	}

	/**
	 * Process files
	 * @param  {[Object]} compiler [Webpack compiler]
	 * @param  {Function} callback [Webpack callback function]
	 */
	run (compiler, callback) {

		this.mergeOptions();

		// Start message
		console.log('\n' + chalk.bgWhite.black('   Cleaning   ') + '\n');

		let files = fs.readdirSync(this.options.path);

		files.forEach((file) => {
			if (typeof this.options.exclude[file] === 'undefined' && (!this.options.extentions || this.options.extentions.indexOf(path.extname(file)) > -1)) {
				let filePath = path.join(this.options.path, file);
				let stats = fs.statSync(filePath);

				if (stats.size < this.options.size) {
					fs.unlinkSync(filePath);
				}
			}
		});

		callback();
	}
}

export default CleanupPlugin;