// IMPORT MODULES
// Vendor
const React = require( 'react' );

// Project
import ListItem from './ListItem';

export default class List extends React.Component {
	render() {
		let content = this.props.goals ? Object.keys( this.props.goals ).map( ( k ) => { return <ListItem key={ k } goal={this.props.goals[ k ] } removeGoal={this.props.removeGoal} /> } ) : <li>Coming soon!</li>;

		return (
			<ul>
				{ content }
			</ul>
		);
	}
}
