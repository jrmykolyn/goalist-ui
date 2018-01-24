// IMPORT MODULES
// Vendor
const React = require( 'react' );

// Project
import List from './List';

export default class Main extends React.Component {
	render() {
		let content = ( this.props.activeView === 'active' ) ? <List activeGoals={this.props.activeGoals} /> : this.props.activeView;

		return (
			<main>
				{ content }
			</main>
		);
	}
}
