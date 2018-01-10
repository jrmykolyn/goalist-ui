// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor
const gulp = require( 'gulp' );
const PathMap = require( 'sfco-path-map' );
const sass = require( 'gulp-sass' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const PATHS = new PathMap( {
	app: `${__dirname}/app`,
	src: '{{app}}/src',
	stylesSrc: '{{src}}/scss',
	dist: '{{app}}/dist',
	stylesDest: '{{dist}}/css',
} );

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
/**
 * Wrapper around any/all tasks to be executed when `gulp` is run.
 */
gulp.task( 'default', [ 'styles' ] );

/**
 * Wrapper around any/all style-related tasks.
 */
gulp.task( 'styles', function() {
	gulp.src( `${PATHS.stylesSrc}/styles.scss` )
		.pipe( sass( {
			outputStyle: 'expanded',
		} ) )
		.pipe( gulp.dest( PATHS.stylesDest ) );
} );

/**
 * ...
 */
gulp.watch( `${PATHS.stylesSrc}/**/*.scss`, [ 'styles' ] );
