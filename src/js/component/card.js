import React, { useContext } from "react";
import "../../styles/header.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/cardstyle.scss";

export const Card = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="doc">
			<div className="container bodywrapper row">
				{store.people.map((item, index) => {
					return (
						<div className="col-3 h-100 p-3" key={index}>
							<div className="card h-100">
								<img src="https://i.imgur.com/SWasniV.jpg" className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">
										Gender:
										{" " + item.gender}
										<br />
										<br />
										Hair Color:
										{" " + item.hairColor}
										<br />
										<br />
										Eye Color:
										{" " + item.eyeColor}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
