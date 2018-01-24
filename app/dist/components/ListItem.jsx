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
			</li>
		);
	}
}
