/* eslint-disable no-console */

// --------------------------------------------------
// IMPORT MODULES
// --------------------------------------------------
// Node
const url = require( 'url' );

// Vendor
const { app, BrowserWindow, ipcMain } = require( 'electron' );

// Project

// --------------------------------------------------
// DECLARE VARS
// --------------------------------------------------
let args = process.argv.slice( 2 );
let win;

// --------------------------------------------------
// DECLARE FUNCTIONS
// --------------------------------------------------
function init() {
	win = new BrowserWindow( { width: 600, height: 400 } );

	win.loadURL( url.format( {
		pathname: `${__dirname}/dist/views/index.html`,
		protocol: 'file:',
		slashes: true,
	} ) );

	/// TODO: Outsource argument parsing (eg. to 'minimist', 'meow', etc.).
	if ( args.includes( '--debug' ) ) {
		win.webContents.openDevTools();
	}

	win.on( 'closed', () => {
		win = null;
	} );

	ipcMain.on( 'CLIENT:MSG', ( e, arg ) => {
		console.log( arg ); /// TEMP
	} )
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
