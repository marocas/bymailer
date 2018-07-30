module.exports = {
	less: {
		files: ['<%= cfg.workflow %><%= cfg.src.styles %>**/*.less'],
		tasks: ['less']
	},
	hbs: {
		files: ['<%= cfg.workflow %><%= cfg.src.patterns %>**/*.hbs'],
		tasks: ['assemble']
	},
	imagemin: {
		files: [
			'<%= cfg.workflow %><%= cfg.src.images %>**/*.png',
			'<%= cfg.workflow %><%= cfg.src.images %>**/*.jpg',
			'<%= cfg.workflow %><%= cfg.src.images %>**/*.gif',
			'<%= cfg.workflow %><%= cfg.src.images %>**/*.ico'
		],
		tasks: ['img']
	}
};
