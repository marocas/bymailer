module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: './',
			src: ['<%= cfg.dist %>*.html'],
			dest: ''
		}],
		options: {
			includes: {
				analytics: './ga.inc'
			}
		}
	}
};