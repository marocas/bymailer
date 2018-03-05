module.exports = {
	compile: {
		options: {
			style: 'expanded',
			paths: ['<%= cfg.workflow %><%= cfg.src.styles %>']
		},
		files: {
			'<%= cfg.dist %><%= cfg.dest.styles %>main.css': '<%= cfg.workflow %><%= cfg.src.styles %>main.less'
		}
	},
	sourceMap: {
		options: {
			optimization: 2,
			sourceMap: true,
			//sourceMapFileInline: true,
			sourceMapFilename: '<%= cfg.dist %><%= cfg.dest.styles %>main.css.map',
			sourceMapURL: '../<%= cfg.dest.styles %>main.css.map',
			dumpLineNumbers: 'false'
		},
		src: '<%= cfg.workflow %><%= cfg.src.styles %>main.less',
		dest: '<%= cfg.dist %><%= cfg.dest.styles %>main.css'
	}
};
