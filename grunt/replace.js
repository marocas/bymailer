module.exports = {
	all: {
		src: ['<%= cfg.dist %>*.html'],
		overwrite: true,
		replacements: [{
			from: 'UA-XXXXX-X',
			to: '<%= cfg.glAnalytics.trackerkey %>'
		}, {
			from: '&gt;',
			to: '>'
		}, {
			from: 'margin',
			to: 'Margin'
		}]
	}
};