module.exports = {
	deploy: ['<%= cfg.deploy.dir %>'],
	css: ['<%= cfg.dist %><%= cfg.dest.styles %>*.css'],
	img: ['<%= cfg.dist %><%= cfg.dest.images %>*.*'],
	// this 2 tasks are a workaround premailer, that cant handle inlining in same
	// folder, but it works if it is the root folder.
	dist: ['<%= cfg.dist %>*.html'], // deletes the dist html files,  on dist after inlining
	temp: ['./index.html', './email.html'], // deletes the html files from root
	ico: ['<%= cfg.deploy.dir %>/images/*.ico'] // deletes favicon
};