// IMPORT MODULES
// Vendor
const React = require( 'react' );
const Goalist = require( 'goalist' );

// Project
import Header from './Header';
import Main from './Main';

export default class App extends React.Component {
	constructor( props  ) {
		super( props );

		this.state = {
			activeView: 'new',
			activeGoals: null,
			archivedGoals: null,
		};
	}

	render() {
		return (
			<div>
				<Header showView={this.showView.bind( this )} />
				<Main activeView={this.state.activeView } activeGoals={this.state.activeGoals} archivedGoals={this.state.archivedGoals}/>
			</div>
		);
	}

	componentWillUpdate( nextProps, nextState ) {
		if (
			nextState
			&& nextState.activeView
			&& nextState.activeView === 'active'
			&& !nextState.activeGoals
		) {
			console.log( 'Fetching "active" goal data.' ); /// TEMP

			let instance = new Goalist();

			instance.run( 'list' )
				.then( ( data ) => {
					this.setState( { activeGoals: data.goals } );
				} )
				.catch( ( err ) => {
					console.log( err.message );
				} );
		}
	}

	showView( view ) {
		this.setState( { activeView: view } );
	}
}
