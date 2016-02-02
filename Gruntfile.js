module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
  	php: {
  		dist: {
  			options: {
  				hostname: '127.0.0.1',
  				port: 9000,
  				base: '', // Project root
  				keepalive: false,
  				open: false
  			}
  		}
  	},
  	browserSync: {
  		dist: {
  			bsFiles: {
  				src: [
  					// Files you want to watch for changes
  				]
  			},
  			options: {
  				proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
  				watchTask: true,
  				notify: true,
  				open: true,
  				logLevel: 'silent',
  				ghostMode: {
  					clicks: true,
  					scroll: true,
  					links: true,
  					forms: true
  				}
  			}
  		}
  	},
  	watch: {
  		// Your watch tasks
  	}
  });

  grunt.registerTask('serve', [
  	'php:dist',         // Start PHP Server
  	'browserSync:dist', // Using the php instance as a proxy
  	'watch'             // Any other watch tasks you want to run
  ]);
};
