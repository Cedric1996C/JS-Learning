const path = require('path');

module.exports = {
	entry:'./src/index.js',
	output:{
		filename: 'bunfle.js',
		path:path.resolve(__dirname,'dist')
	}
};