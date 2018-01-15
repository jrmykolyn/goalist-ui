// IMPORT MODULES
// Vendor
const React = require( 'react' );

// Project
import Header from './Header';

export default class App extends React.Component {
	constructor( props  ) {
		super( props );

		this.state = {
			view: 'new',
		};
	}

	render() {
		return (
			<div>
				<Header
					showView={this.showView.bind( this )}
				/>
				<section>
					<h1>{this.state.view}</h1>
				</section>
			</div>
		);
	}

	showView( view ) {
		this.setState( { view } );
	}
}
