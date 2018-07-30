module.exports = {
	main: {
		files: [{
			expand: true,
			cwd: '<%= cfg.workflow %><%= cfg.src.patterns %>email_template/',
			src: '*.hbs',
			dest: '<%= cfg.dist %>',
			ext: '.html'
		}],

		preHTML: '<%= cfg.workflow %><%= cfg.src.util %>globals/head.hbs',
		postHTML: '<%= cfg.workflow %><%= cfg.src.util %>globals/foot.hbs',

		partials: '<%= cfg.workflow %><%= cfg.src.partials %>*.hbs',

		templateData: '<%= cfg.workflow %><%= cfg.src.patterns %>**/*.json',
		helpers: '<%= cfg.workflow %><%= cfg.src.util %>helpers/*.js'
	}
};
