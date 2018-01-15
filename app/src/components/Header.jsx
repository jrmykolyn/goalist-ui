// IMPORT MODULES
// Vendor
const React = require( 'react' );

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<nav>
					<a href="#" onClick={this.handleShowView.bind( this )}>New</a>
					<a href="#" onClick={this.handleShowView.bind( this )}>Active</a>
					<a href="#" onClick={this.handleShowView.bind( this )}>Archive</a>
				</nav>
			</header>
		);
	}

	handleShowView( e ) {
		this.props.showView( e.target.innerHTML.toLowerCase() );
	}
}
