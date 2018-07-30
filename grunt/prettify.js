module.exports = {
	options: {
		condense: false,
		padcomments: true,
		indent: 2,
		indent_char: ' ',
		brace_style: 'end-expand',
		preserve_newlines: true
	},
	files: {
		expand: true,
		cwd: '<%= cfg.dist %>',
		src: ['*.html'],
		dest: '<%= cfg.dist %>'
	}
};