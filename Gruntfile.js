'use strict';
// grunt boolean variable
let fs = require('fs');
let path = require('path');
let dateFormat = require('dateformat');
dateFormat.i18n = {
    dayNames: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
        'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'aug', 'set', 'oct', 'nov', 'dez',
        'janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setempbro', 'outubro', 'novembro', 'dezembro'
    ],
    timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ]
};
// Gruntfile.js
module.exports = function (grunt) {

    //loads the various task configuration files
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt, {
        pattern: ['assemble', 'grunt-*']
    });

    // path to tasks and global variables
    let options = {
        // tasks path
        config: {
            src: "grunt/*.*"
        },

        pkg: grunt.file.readJSON('package.json'),

        // Global variables
        cfg: {
            root: './',
            workflow: '_workflow/',
            dist: 'dist/',
            src: {
                styles: '_stylesheets/',
                images: '_images/',
                patterns: 'layout/',
                partials: '<%= cfg.src.patterns %>**/',
                util: '<%= cfg.src.patterns %>_utilities/'
            },

            dest: {
                styles: 'css/',
                images: 'images/'
            },

			litmus: {
				api: 'your@email.com', // Litmus Account settings > Settings = Customer API Subdomain
				user: 'your@email.com', // Litmis username
				pass: 'yourSuperKey', // Litmus password
				url: 'https://' + '<%= cfg.litmus.api %>' + '.litmus.com'
			},

			ftp: {
				host: '***.***.***.***', // .ftpconfig host ip
				authKey: '****' // .ftpconfig key
			},

			deploy: {
				client: 'CLIENT', // client name
				dir: path.basename(__dirname), // folder name
				cdn: 'http://yourcdn.com/<%= cfg.deploy.client %>/newsletter/' +
				'<%= grunt.template.today("yyyy") %>/<%= cfg.deploy.dir %>',
				ftp: '/wwwroot/yourcdn.com/subdomains/clientes/httpdocs/<%= cfg.deploy.client %>/newsletter/' +
				'<%= grunt.template.today("yyyy") %>/<%= cfg.deploy.dir %>'
			},

			// Mailgun settings
			email: {
				key: 'yourSuperEmailKey',
				domain: 'yourcdn.com',
				sender: 'postmaster@yourcdn.com',
				recipient: [
					'yourSuperEmail@yourcdn.com'
				],
				subject: '<%= cfg.deploy.dir %>'
			},

			glAnalytics: {
				trackerkey: '**-*******-*'
			}
		}
	};

    let configs = require('load-grunt-configs')(grunt, options);

    grunt.initConfig(configs);

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    // main tasks
    grunt.registerTask('default', ['less', 'assemble', 'img'/*, 'tracker', 'replaceID'*/]);
    grunt.registerTask('sendmail', ['dist', 'ftp', 'mailgun']);
    grunt.registerTask('dist', ['img', 'inline', 'cdn:html', 'replace']);
    grunt.registerTask('inline', ['cdn:css', 'premailer', 'clean:dist', 'copy:dist', 'clean:temp']);
    grunt.registerTask('serve', function () {
        // validates if 'dist' folder exists
        if (grunt.file.expand("dist").length) {
            // if so, run the task chain
            grunt.task.run(['browserSync', 'watch']);
        } else {
            grunt.task.run(['default', 'browserSync', 'watch']);
        }
    });

    // grunt server deprecated
    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    // secondary tasks
    grunt.registerTask('ftp', ['copy', 'clean:ico', 'ftp-deploy', 'clean:deploy']);
    grunt.registerTask('assemble', ['compile-handlebars:main', 'prettify']);
    grunt.registerTask('img', ['clean:img', 'newer:imagemin']);
    grunt.registerTask('send', ['mailgun']);
    grunt.registerTask('lit', ['litmus', 'att']);

    // Includes google tracker and replace his gaID
    grunt.registerTask('tracker', ['htmlrefs']);
    grunt.registerTask('replaceID', ['replace']);
    grunt.registerTask('att', ['attention']);
    grunt.registerTask('notifyme', ['notify']);
};
