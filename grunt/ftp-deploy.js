module.exports = {
	build: {
		forceVerbose: true,
		auth: {
			host: '<%= cfg.ftp.host %>',
			port: 21,
			authKey: '<%= cfg.ftp.authKey %>',
			authPath: './.ftpconfig'
		},
		src: ['<%= cfg.deploy.dir %>'],
		dest: '<%= cfg.deploy.ftp %>'
	}
};
