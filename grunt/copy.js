module.exports = {
	css: {
		files: [{
			expand: true,
			cwd: '<%= cfg.dist %>',
			src: ['<%= cfg.dest.styles %>*.css'],
			dest: './<%= cfg.deploy.dir %>'
		}]
	},
	html: {
		files: [{
			expand: true,
			cwd: '<%= cfg.dist %>',
			src: ['*.html'],
			dest: './<%= cfg.deploy.dir %>'
		}]
	},
	img: {
		files: [{
			expand: true,
			cwd: '<%= cfg.dist %>',
			src: ['<%= cfg.dest.images %>**'],
			dest: './<%= cfg.deploy.dir %>'
		}]
	},
	// this task is used on inlining, after will copy from root the html to html folder
	dist: {
		files: [{
			expand: true,
			cwd: '',
			src: ['index.html', 'email.html'],
			dest: '<%= cfg.dist %>'
		}]
	}
};