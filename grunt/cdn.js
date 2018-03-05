module.exports = {
	options: {
		cdn: '<%= cfg.deploy.cdn %>',
		flatten: false
	},
	css: {
		files: [{
			expand: true,
			cwd: '<%= cfg.dist %><%= cfg.dest.styles %>',
			src: ['*.css'],
			dest: '<%= cfg.dist %><%= cfg.dest.styles %>'
		}]
	},
	html: {
		files: [{
			expand: true,
			cwd: '<%= cfg.dist %>',
			src: ['*.html'],
			dest: '<%= cfg.dist %>'
		}]
	}
};