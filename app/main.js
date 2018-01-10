/* eslint-disable no-console */

// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const url = require( 'url' );

// Vendor
const { app, BrowserWindow } = require( 'electron' );

// Project

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
let win;

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function init() {
	win = new BrowserWindow( { width: 600, height: 400 } );

	win.loadURL( url.format( {
		pathname: `${__dirname}/dist/index.html`,
		protocol: 'file:',
		slashes: true,
	} ) );

	win.on( 'closed', () => {
		win = null;
	} );
}

// --------------------------------------------------
// INITIALIZATION
// --------------------------------------------------
app.on( 'ready', init );

app.on( 'activate', () => {
	console.log( 'INSIDE `activate`' ); /// TEMP

	if ( !win ) {
		init();
	}
} );
