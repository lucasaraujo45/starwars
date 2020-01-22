import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="navbararea">
			<div className="container">
				<nav className="navbar mb-3">
					<Link to="/">
						<span className="navitem ">NEWS + BLOG</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">VIDEO</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">FILMS</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">SERIES</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">INTERACTIVE</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">COMMUNITY</span>
					</Link>
					<Link to="/demo">
						<span className="navitem">DATABANK</span>
					</Link>
				</nav>
			</div>
		</div>
	);
};
