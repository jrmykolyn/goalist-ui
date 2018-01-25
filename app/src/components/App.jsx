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
			newGoal: {},
		};
	}

	render() {
		return (
			<div>
				<Header showView={this.showView.bind( this )} />
				<Main
					activeView={this.state.activeView }
					goals={this.state.goals}
					newGoal={this.state.newGoal}
					createGoal={this.createGoal.bind( this )}
					removeGoal={this.removeGoal.bind( this )}
					toggleGoal={this.toggleGoal.bind( this )}
				/>
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

	/**
	 * Given an object of 'goal' data, add it.
	 */
	createGoal( goal ) {
		if ( goal && goal.title ) {
			goalist.run( 'add', [ goal.title ] )
				.then( ( data ) => {
					// Update view, clear `newGoal`, and force fetch of 'active' goal data.
					this.setState( {
						activeView: 'active',
						newGoal: {},
						goals: {
							active: null,
						},
					} );
				} )
				.catch( ( err ) => {
					console.log( err.message );
				} );
		}
	}

	/**
	 * Given a 'goal' object, remove it.
	 */
	removeGoal( goal ) {
		if ( goal && goal.id ) {
			goalist.run( 'remove', [ goal.id ] )
				.then( ( data ) => {
					/// TEMP: Force re-fetch of both 'active' and 'archived' goal data.
					this.setState( {
						goals: {
							active: null,
							archive: null,
						},
					} );
				} )
				.catch( ( err ) => {
					console.log( err.message );
				} );
		}
	}

	/**
	 * Given a 'goal' object, toggle its 'active' property.
	 */
	toggleGoal( goal ) {
		if ( goal && goal.id ) {
			// If the goal is active, archive it. If it's already archived, activate it.
			goalist.run( 'archive', [ goal.id ], { active: !goal.active } )
				.then( ( data ) => {
					/// TEMP: Force re-fetch of both 'active' and 'archived' goal data.
					this.setState( {
						goals: {
							active: null,
							archive: null,
						},
					} );
				} )
				.catch( ( err ) => {
					console.log( err.message );
				} );
		}
	}
}
