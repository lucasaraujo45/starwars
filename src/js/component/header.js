import React from "react";
import "../../styles/header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div className="header-area">
			<div className="header">
				<div className="container header-wrapper">
					<span className="left-header">
						<div className="social-area">
							<ul className="social">
								<li>
									<span className="facebook-span" />
								</li>
								<li>
									<span className="instagram-span" />
								</li>
								<li>
									<span className="tumblr-span" />
								</li>
								<li>
									<span className="twitter-span" />
								</li>
								<li>
									<span className="youtube-span" />
								</li>
							</ul>
						</div>
					</span>

					<div className="swlogo">
						<Link to="/">
							<a className="sw-a" />
							<img className="mt-4" src="https://i.imgur.com/5ZvtHwm.png" height="88" width="203" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
