module.exports = React.createClass({
	render: function render() {
		return (
			<nav role="navigation" className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" data-toggle="collapse" data-target="#pnl-collapsible-nav" className="navbar-toggle collapsed">
							<span className="sr-only">Menu</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand">XYZ Clinic</a>
					</div>
					<div id="pnl-collapsible-nav" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li><a><i className="fa fa-truck"></i> GNDN1</a></li>
							<li><a><i className="fa fa-puzzle-piece"></i> GNDN2</a></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});
