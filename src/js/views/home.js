import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	return (
		<>
			<ul className="list-group">
				{store.personas.map((item, index) =>
					<div className="container border px-0" key={index}>
						<div className="row my-2">
							<div className="col-md-6">
								<h3>{item.name}</h3>
								<p className="mb-1">{item.mass}</p>
							</div>
						</div>
					</div>
				)}
			</ul>
		</>
	)
}
