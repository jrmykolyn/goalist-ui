// IMPORT MODULES
// Vendor
const React = require( 'react' );

// Project
import Header from './Header';
import Main from './Main';

export default class App extends React.Component {
	constructor( props  ) {
		super( props );

		this.state = {
			activeView: 'new',
		};
	}

	render() {
		return (
			<div>
				<Header showView={this.showView.bind( this )} />
				<Main activeView={this.state.activeView } />
			</div>
		);
	}

	showView( view ) {
		this.setState( { activeView: view } );
	}
}
