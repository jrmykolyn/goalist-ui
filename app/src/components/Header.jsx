// IMPORT MODULES
// Vendor
const React = require( 'react' );

export default class Nav extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<a href="#">New</a>
					<a href="#">Active</a>
					<a href="#">Archive</a>
				</nav>
			</header>
		);
	}
}
