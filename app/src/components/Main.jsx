// IMPORT MODULES
// Vendor
const React = require( 'react' );

// Project
import Form from './Form';
import List from './List';

export default class Main extends React.Component {
	render() {
		let { activeView, goals } = this.props;
		let displayGoals = goals[ activeView ];

		let content = ( displayGoals ) ? <List goals={displayGoals} removeGoal={this.props.removeGoal} /> : <Form newGoal={this.props.newGoal} createGoal={this.props.createGoal}/>;

		return (
			<main>
				{ content }
			</main>
		);
	}
}
