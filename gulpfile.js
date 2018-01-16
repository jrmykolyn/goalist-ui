// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node

// Vendor
const bourbon = require( 'bourbon' );
const gulp = require( 'gulp' );
const PathMap = require( 'sfco-path-map' );
const sass = require( 'gulp-sass' );
const sassLint = require( 'gulp-sass-lint' );
const sassUtils = require( 'sfco-sass-utils' );
const sjmConfigs = require( '@sjmdev/sjm-configs' );

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
const { sassLintConfig } = sjmConfigs;

const PATHS = new PathMap( {
	app: `${__dirname}/app`,
	src: '{{app}}/src',
	stylesSrc: '{{src}}/scss',
	scriptsSrc: '{{src}}/js',
	viewsSrc: '{{src}}/views',
	componentsSrc: '{{src}}/components',
	dist: '{{app}}/dist',
	stylesDest: '{{dist}}/css',
	scriptsDest: '{{dist}}/js',
	viewsDest: '{{dist}}/views',
	componentsDest: '{{dist}}/components',
} );

// --------------------------------------------------
// DEFINE TASKS
// --------------------------------------------------
/**
 * Wrapper around any/all tasks to be executed when `gulp` is run.
 */
gulp.task( 'default', [ 'styles', 'scripts', 'views', 'components' ], function() {
	return;
} );

/**
 * Wrapper around any/all style-related tasks.
 */
gulp.task( 'styles', function() {
	return gulp.src( `${PATHS.stylesSrc}/styles.scss` )
		.pipe( sassLint( sassLintConfig ) )
		.pipe( sassLint.format() )
		.pipe( sassLint.failOnError() )
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
	return gulp.src( `${PATHS.scriptsSrc}/*.js` )
		.pipe( gulp.dest( PATHS.scriptsDest ) );
} );

/**
 * Wrapper around any/all script-related tasks.
 */
gulp.task( 'views', function() {
	return gulp.src( `${PATHS.viewsSrc}/*.html` )
		.pipe( gulp.dest( PATHS.viewsDest ) );
} );

/**
 * Wrapper around any/all component-related tasks.
 */
gulp.task( 'components', function() {
	return gulp.src( `${PATHS.componentsSrc}/*.jsx` )
		.pipe( gulp.dest( PATHS.componentsDest ) );
} );

/**
 * Wrapper arround any/all 'watch' tasks.
 */
gulp.task( 'watch', [ 'default' ], function() {
	gulp.watch( `${PATHS.stylesSrc}/**/*.scss`, [ 'styles' ] );
	gulp.watch( `${PATHS.scriptsSrc}/**/*.js`, [ 'scripts' ] );
	gulp.watch( `${PATHS.viewsSrc}/**/*.html`, [ 'views' ] );
	gulp.watch( `${PATHS.componentsSrc}/**/*.jsx`, [ 'components' ] );
} );
