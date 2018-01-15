// IMPORT MODULES
// Vendor
const React = require( 'react' );

export default class Main extends React.Component {
	render() {
		return (
			<main>
				<h1>{this.props.activeView}</h1>
			</main>
		);
	}
}
