// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor
const bourbon = require( 'bourbon' );
const gulp = require( 'gulp' );
const PathMap = require( 'sfco-path-map' );
const sass = require( 'gulp-sass' );
const sassUtils = require( 'sfco-sass-utils' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const PATHS = new PathMap( {
	app: `${__dirname}/app`,
	src: '{{app}}/src',
	stylesSrc: '{{src}}/scss',
	scriptsSrc: '{{src}}/js',
	viewsSrc: '{{src}}/views',
	dist: '{{app}}/dist',
	stylesDest: '{{dist}}/css',
	scriptsDest: '{{dist}}/js',
	viewsDest: '{{dist}}/views',
} );

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
/**
 * Wrapper around any/all tasks to be executed when `gulp` is run.
 */
gulp.task( 'default', [ 'styles', 'scripts', 'views' ], function() {
	return;
} );

/**
 * Wrapper around any/all style-related tasks.
 */
gulp.task( 'styles', function() {
	gulp.src( `${PATHS.stylesSrc}/styles.scss` )
		.pipe( sass( {
			outputStyle: 'expanded',
			includePaths: [
				bourbon.includePaths,
				sassUtils.includePaths,
			],
		} ) )
		.pipe( gulp.dest( PATHS.stylesDest ) );
} );

/**
 * Wrapper around any/all script-related tasks.
 */
gulp.task( 'scripts', function() {
	gulp.src( `${PATHS.scriptsSrc}/*.js` )
		.pipe( gulp.dest( PATHS.scriptsDest ) );
} );

/**
 * Wrapper around any/all script-related tasks.
 */
gulp.task( 'views', function() {
	gulp.src( `${PATHS.viewsSrc}/*.html` )
		.pipe( gulp.dest( PATHS.viewsDest ) );
} );

/**
 * ...
 */
gulp.watch( `${PATHS.stylesSrc}/**/*.scss`, [ 'styles' ] );
gulp.watch( `${PATHS.scriptsSrc}/**/*.scss`, [ 'scripts' ] );
gulp.watch( `${PATHS.viewsSrc}/**/*.html`, [ 'views' ] );
