// IMPORT MODULES
// Vendor
const React = require( 'react' );

// Project
import List from './List';

export default class Main extends React.Component {
	render() {
		let { activeView, goals } = this.props;
		let displayGoals = goals[ activeView ];

		let content = ( displayGoals ) ? <List goals={displayGoals} /> : this.props.activeView;

		return (
			<main>
				{ content }
			</main>
		);
	}
}
