module.exports = {
	simple: {
		options: {
			baseUrl: null,
			bundleExec: false,
			queryString: '',
			css: [],
			removeClasses: false,
			removeScripts: false,
			removeComments: false,
			preserveStyles: false,
			lineLength: 65,
			ioException: false,
			verbose: false,
			mode: 'html',
			warnLevel: 'none',
			removeIds: false,
			replaceHtmlEntities: false,
			escapeUrlAttributes: true
		},
		files: [{
			expand: true,
			cwd: '<%= cfg.dist %>',
			src: ['*.html'],
			dest: ''
		}]
	}
};