// IMPORT MODULES
const { ipcRenderer } = require( 'electron' );

window.addEventListener( 'DOMContentLoaded', () => {
	// DECLARE VARS.
	const btnElem = document.querySelector( '#btn' );

	// REGISTER EVENTS
	if ( btnElem ) {
		btnElem.addEventListener( 'click', () => {
			ipcRenderer.send( 'GET:LIST', 'Hello, world!' );
		} );
	}
} );
