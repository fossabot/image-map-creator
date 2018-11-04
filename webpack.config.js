const path = require('path');

module.exports = {
	entry: './src/p5.image-map-creator.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'image-map-creator.bundle.js',
		libraryTarget: 'window'
	}
};