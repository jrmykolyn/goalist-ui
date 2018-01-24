// IMPORT MODULES
// Vendor
const React = require( 'react' );

// Project
import ListItem from './ListItem';

export default class List extends React.Component {
	render() {
		let content = this.props.activeGoals ? Object.keys( this.props.activeGoals ).map( ( k ) => { return <ListItem key={ k } goal={this.props.activeGoals[ k ] } /> } ) : <li>Coming soon!</li>;

		return (
			<ul>
				{ content }
			</ul>
		);
	}
}
