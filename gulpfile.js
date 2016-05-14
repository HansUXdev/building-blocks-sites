var	gulp 				= require('gulp'),
	$ 					= require('gulp-load-plugins')(),
	sequence 			= require('run-sequence'),
	panini 				= require('panini'),
	rimraf 				= require('rimraf'),
	browser 			= require('browser-sync'),
	octophant 			= require('octophant'),
	lazypipe 			= require('lazypipe'),
	yaml 				= require('js-yaml'),
	fs 					= require('fs');


// Load settings from settings.yml
	// var { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();
	// function loadConfig() {
	//   var ymlFile = fs.readFileSync('config.yml', 'utf8');
	//   return yaml.load(ymlFile);
	// }


// Generate Settings for building blocks
    gulp.task('block-settings', function() {
      octophant('src/scss/**/*.scss', 
      {
        title: 'Building Blocks Settings',
        output: 'blocks/_building-blocks.scss',
        // sort: ['global', 'grid', 'block-grid', 'type']
      });
    });