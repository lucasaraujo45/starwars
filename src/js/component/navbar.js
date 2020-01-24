import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbararea">
			<div className="container">
				<nav className="navbar mb-3">
					<Link to="/">
						<span className="navitem ">PEOPLE</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">VEHICLES</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">SPECIES</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">PLANETS</span>
					</Link>
				</nav>
			</div>
		</div>
	);
};
