import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
	
	return (
		<nav className=" fixed-bottom navbar navbar-dark bg-navColor">
			<div className="container">
				<div className="row">
					
					<div className="col ">
						<ul className="w-100 list-group list-group-horizontal ml-auto justify-content-end">
							<li className="list-group-item d-flex justify-content-between align-items-center  ">
								<Link className="text-dark" to="/">
									<i className="fa fa-user text-black" />
								</Link>
							</li>

							<li className="list-group-item d-flex justify-content-between align-items-center ">
								<Link className="text-dark" to="loan">
									<i className="fa fa-bell text-black" />
									<span className="badge badge-primary badge-pill">14</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Footer;
