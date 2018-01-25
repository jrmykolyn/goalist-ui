// IMPORT MODULES
// Vendor
const React = require( 'react' );

export default class ListItem extends React.Component {
	render() {
		return (
			<li>
				<span>{ this.props.goal.id }</span><br />
				<span>{ this.props.goal.title }</span><br />
				<span>{ this.props.goal.description }</span><br />
				<span>{ this.props.goal.complete }</span><br />
				<span>{ this.props.goal.active }</span>
				<button onClick={this.handleToggleGoal.bind( this ) }>Toggle</button>
				<button onClick={this.handleRemoveGoal.bind( this ) }>Delete</button>
			</li>
		);
	}

	handleRemoveGoal( e ) {
		e.preventDefault();

		this.props.removeGoal( this.props.goal );
	}

	handleToggleGoal( e ) {
		e.preventDefault();

		this.props.toggleGoal( this.props.goal );
	}
}
