var path = require('path');
module.exports = {
  resolve: {
    	alias: {
      		//react: path.resolve('./node_modules/react')
    	},
    	extensions:[".js", ".jsx", ".webpack.js", ".web.js",""]
	},
	resolveLoader: {
		root: path.join(__dirname, "node_modules")
	}
};