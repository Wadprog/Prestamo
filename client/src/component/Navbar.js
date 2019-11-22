import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Img/Logo.png';

const Navbar = props => {
	
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-navColor">
			<div className="container">
				<Link className="navbar-brand bg-logo px-5" to="/">
					<img className="Logo" alt="Logo" src={Logo} />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto ">
						<li className="nav-item">
							<Link className="nav-link " to="/">
								Principal
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link " to="/clients">
								Clientes
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="loan">
								Prestamos
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
