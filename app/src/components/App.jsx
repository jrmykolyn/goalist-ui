// IMPORT MODULES
// Vendor
const React = require( 'react' );
const Goalist = require( 'goalist' );

// Project
import Header from './Header';
import Main from './Main';

// DECLARE VARS
let goalist = new Goalist();

export default class App extends React.Component {
	constructor( props  ) {
		super( props );

		this.state = {
			activeView: 'new',
			goals: {},
		};
	}

	render() {
		return (
			<div>
				<Header showView={this.showView.bind( this )} />
				<Main activeView={this.state.activeView } goals={this.state.goals} />
			</div>
		);
	}

	componentWillUpdate( nextProps, nextState ) {
		if ( nextState && nextState.activeView ) {
			if (
				nextState.activeView === 'active'
				&& !nextState.goals.active
			) {
				console.log( 'Fetching "active" goal data.' ); /// TEMP

				goalist.run( 'list' )
					.then( ( data ) => {
						this.setState( { goals: { active: data.goals } } );
					} )
					.catch( ( err ) => {
						console.log( err.message );
					} );
			}

			if (
				nextState.activeView === 'archive'
				&& !nextState.goals.archive
			) {
				console.log( 'Fetching "archive" goal data.' ); /// TEMP

				goalist.run( 'list', [], { archive: true } )
					.then( ( data ) => {
						this.setState( { goals: { archive: data.goals } } );
					} )
					.catch( ( err ) => {
						console.log( err.message );
					} );
			}
		}
	}

	showView( view ) {
		this.setState( { activeView: view } );
	}
}
