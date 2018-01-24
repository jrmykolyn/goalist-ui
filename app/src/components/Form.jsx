// IMPORT MODULES
// Vendor
const React = require( 'react' );

export default class List extends React.Component {
	render() {
		return (
			<form onSubmit={this.handleSubmit.bind( this )}>
				<label>Title</label>
				<input type="text" placeholder="Add your goal title here" name="title" value={this.props.newGoal.title} onChange={this.handleChange.bind( this )}/>
				<input type="submit" value="Create Goal" />
			</form>
		);
	}

	handleSubmit( e ) {
		e.preventDefault();

		this.props.createGoal( this.props.newGoal );
	}

	handleChange( e ) {
		let { name, value } = e.target;

		this.props.newGoal[ name ] = value;
	}
}
