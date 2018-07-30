var grunt = require('grunt');
module.exports = {
	mailer: {
		options: {
			key: '<%= cfg.email.key %>',
			domain: '<%= cfg.email.domain %>',
			sender: '<%= cfg.email.sender %>',
			recipient: '<%= cfg.email.recipient %>',
			subject: '<%= cfg.email.subject %>'
		},
		preventThreading: true,
		hideRecipient: true,
		//src: ['<%= cfg.dist %>'+grunt.option('template')] // need to cancel this action
		src: ['<%= cfg.dist %>email.html'] // it has been corrected
	}
};
