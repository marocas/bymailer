module.exports = {
	// See if any file is changed
	files: {
		src: [
			//'<%= cfg.dist %><%= cfg.dest.styles %>main.css',
			'<%= cfg.dist %>**/*.*'
		]
	},
	options: {
		// Options passed to Chokidar
		// watchOptions: {
		//   ignoreInitial: true,
		//   ignored: '*.txt'
		// },

		// watchTask deprecated
		watchTask: true,

		// Decide which URL to open automatically when Browsersync starts.
		//Defaults to "local" if none set.
		// Can be true, local, external, ui, ui-external, tunnel or false
		open: "ui",

		// Can be either "info", "debug", "warn", or "silent"
		logLevel: "info",

		// Wait for 2 seconds before any browsers should try to inject/reload a file.
		reloadDelay: 1000,

		// Don't append timestamps to injected files
		timestamps: false,

		// Open the site in Chrome & Firefox, if empty = default
		notify: false,

		// Open the site in Chrome & Firefox
		browser: [""], // "google chrome",

		// Serve files from the html directory
		// or array with multi serve directories
		// server: ['<%= cfg.dist %>']
		server: {
            baseDir: ['<%= cfg.dist %>'],
            index: "email.html"
		}
	}
};
